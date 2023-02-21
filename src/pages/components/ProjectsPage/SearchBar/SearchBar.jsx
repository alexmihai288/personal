import React from 'react'
import Filters from '../Filters/Filters';

const SearchBar = ({searchText,setAllProjects,setSearchText}) => {
  function handleSearch(e){
    const searchValue=e.target.value.toLowerCase();
    setAllProjects(prevProjects=>{
      return prevProjects.map(project=>{
        return {
          ...project,
          isVisible:project.title.toLowerCase().includes(searchValue) ? true:false
        }
      })
    })
    setSearchText(searchValue);
  }
  return (
    <div className='sm:flex sm:items-center sm:justify-between sm:gap-5 md:flex-col md:items-start'>
      <h1 className='text-center sm:text-start text-[#f8f8f8] sm:whitespace-nowrap font-bold font-karla mb-4 text-[20px] xs:text-[25px] sm:text-[30px]'>Explore My Projects</h1>
      <div className='searchContainer flex-col justify-center mb-4 sm:w-[100%] md:max-w-[350px] md:flex-row md:self-center md:gap-3'>
        <div className="flex items-center">
          <input type="text" onChange={handleSearch} value={searchText} className='border-b bg-transparent w-[100%] px-1 outline-none text-[#f8f8f8] font-inter text-[13px] md:text-[15px]' placeholder='search by name'/>
          <i className='-ml-[25px] bi bi-search cursor-pointer text-[#f8f8f8] hover:bg-[#606060] px-1 mb-2 rounded-md duration-[.12s]'></i>
        </div>
        <div className='w-fit p-1'><Filters setAllProjects={setAllProjects}/></div>
      </div>
    </div>
  )
}

export default SearchBar
