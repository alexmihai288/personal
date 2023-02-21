import SingleProject from '../components/ProjectsPage/SingleProject/SingleProject';
import React from 'react'

const single_project = ({data}) => {
  return (
    <>
      <main className='bg-luxBrown min-h-[100vh]'>
        <SingleProject data={data}/> 
      </main>

    </>
  )
}

export async function getStaticPaths(){
  const {projects} = await import ("/data/data.json");

  const allPaths = projects.map(path=>{
    return{
      params:{
        single_project:path.title,
      }
    }
  })
  return{
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context){
    const single_project=context.params.single_project
    const {projects} = await import ("/data/data.json");
    const Project = projects.find(pj=>single_project==pj.title)
    if(Project)
      return{
        props: {data:Project}
      }
    return { props: {} };
  } 


export default single_project