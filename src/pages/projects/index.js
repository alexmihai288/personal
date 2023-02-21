import React,{useState} from 'react';
import Card from '../components/ProjectsPage/Card/Card';
import SearchBar from '../components/ProjectsPage/SearchBar/SearchBar';
import { nanoid } from 'nanoid';
import MainLayout from '../components/ProjectsPage/Layout/MainLayout';

const Index = ({projects}) => {
  const [allProjects,setAllProjects] = useState([]);
  const [searchText,setSearchText]=useState('');
  if(allProjects.length==0)
    setAllProjects(projects && projects.map(project=>{
      return {
        ...project,
        id:nanoid(),
        isVisible:true
      }
    }))
  const filteredProjects=allProjects && allProjects.filter(project=>project.isVisible); 
  return (        
    <>
        <main className='bg-luxBrown'>
         
            <MainLayout>
              <div>
                <div>
                  <SearchBar projects={allProjects} searchText={searchText} setAllProjects={setAllProjects} setSearchText={setSearchText}/>
                </div>    
                <div className='projectWrapperContainer'>
                  <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:gap-3 mt-9 mb-9'>
                        {filteredProjects.length==0 ? 
                            <p className='text-[#e2b928]'>No results found :/</p>
                            :
                            filteredProjects && filteredProjects.map(project=>{
                            return <Card key={nanoid()} project={project} />
                        })}
                  </div>
                </div>
                  
              </div>
            </MainLayout>
        </main>

    </>
  )
}

export async function getStaticProps(){
  const {projects} = await import ("/data/data.json");
  
  return {
    props:{
      projects:projects,
    }
  }

}

export default Index