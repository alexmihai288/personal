import React,{useState}from "react";

const Filters = ({setAllProjects})=>{
    const [toggleDropdown,setDropDown]=useState(false);

    function handleDropdown(){
        setDropDown(prevState=>!prevState);
    }
    function filterClick(option){
        setAllProjects(prevProjects=>{
            return prevProjects.map(project=>{
                return {
                    ...project,
                    isVisible:project.status!=option ? false:true
                }
            })
        })
    }

    function clearFilters(){
        setAllProjects(prevProjects=>{
            return prevProjects.map(project=>{
                return {
                    ...project,
                    isVisible:true
                }
            })
        })
    }

    return (
        <div className={`filtersWrapper duration-[.25s] pb-4 ${toggleDropdown ? "mb-6":"mb-0"}`}>
            <div onClick={handleDropdown} className="filtersContainer bg-[#211602] rounded-sm px-3 py-1 cursor-pointer flex items-center justify-between gap-1.5">
                <h1 className="text-[#f8f8f8] font-karla">Filters</h1>
                <i className={`bi bi-caret-down-fill text-[#f8f8f8] duration-[.30s] ${toggleDropdown ? "rotate-180":""}`}></i>
            </div>
            {toggleDropdown &&  
                <div className={`cursor-pointer px-2 py-1 dropdownContainer space-y-5 text-[#f8f8f8] bg-[#281818]`}>
                    <div className="space-y-2">
                        <p className="hover:bg-luxBrown duration-100 rounded-md px-1" onClick={()=>filterClick("online")}>Online</p>
                        <p className="hover:bg-luxBrown duration-100 rounded-md px-1" onClick={()=>filterClick("offline")}>Offline</p>
                    </div>
                    <p className="duration-100 rounded-md px-1 bg-red-600 hover:bg-red-700" onClick={clearFilters}>Clear filters</p>
                </div>
            }
        </div>
    )
}

export default Filters;