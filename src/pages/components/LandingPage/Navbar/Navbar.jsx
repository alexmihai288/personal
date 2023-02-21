import React from 'react'
import Link from 'next/link';

const Navbar = ({setSideMenu,sideMenu}) => {
  return (
    <div className='font-source text-[#f8f8f8] navbarContainer flex items-center justify-between lg:h-[3vh] relative'>
        <Link href={"/"} className='logo flex items-center text-[17px] tracking-widest gap-[10px] cursor-pointer'>
          <i className="bi bi-bounding-box text-[20px]"></i>
          <h1>PERSONAL</h1>
        </Link>
        <div className='socialContainer space-x-8 flex items-center'>
            <div className='linksContainer space-x-3 hidden xs:flex'>
                <Link target={"_blank"} href={"https://www.instagram.com/"} className="bi bi-instagram cursor-pointer hover:scale-x-105 duration-75 hover:shadow-lg hover:shadow-indigo-500/20"></Link>
                <Link target={"_blank"} href={"https://www.github.com/"} className="bi bi-github cursor-pointer hover:scale-x-105 duration-75 hover:shadow-lg hover:shadow-indigo-500/20"></Link>
            </div>
            <div onClick={()=>setSideMenu(!sideMenu)} className='menuContainer cursor-pointer space-y-1 flex flex-col w-fit'>
                <div className={`w-[18px] ${sideMenu? "active":""} line line1 h-[2.32px] bg-[#9E9E9E]`}></div>
                <div className={`w-[14px] ${sideMenu? "active":""} line line2 h-[2.32px] bg-[#9E9E9E] self-end`}></div>
                <div className={`w-[18px] ${sideMenu? "active":""} line line3 h-[2.32px] bg-[#9E9E9E]`}></div>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar;