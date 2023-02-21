import Link from 'next/link'
import React from 'react'

const SideMenu = ({sideMenu,setSideMenu}) => {
  return (
    <div className={`${sideMenu ? "opacity-100 z-10":"opacity-0 -z-10"} text-[#f8f8f8] duration-[.3s] w-[100%] flex flex-col items-center justify-center rounded-tl-md rounded-bl-md min-w-[200px] absolute max-w-[300px] right-0 top-0 bottom-0 bg-[#281818]`}>
        <div className='sideHead absolute right-2 top-2'>
            <i onClick={()=>setSideMenu(!sideMenu)} className={`${sideMenu ? "opacity-100":"opacity-0"} duration-200 bi bi-x-lg cursor-pointer`}></i>
        </div>
        <div className='sideBody mt-12 w-[100%]'>
            <div className='socialContainer self-start w-[100%] flex flex-col gap-6'>
                <div className='cursor-pointer w-[100%] hover:bg-[rgba(255,255,255,.5)] duration-200 flex justify-center py-2'>       
                    <Link href={"/"} className=" px-4">Home</Link>
                </div>
                <div className='cursor-pointer w-[100%] hover:bg-[rgba(255,255,255,.5)] duration-200 flex justify-center py-2'>
                    <Link href={"/projects"} className=" px-4">Projects</Link>                
                </div>
                <div className='cursor-pointer w-[100%] hover:bg-[rgba(255,255,255,.5)] duration-200 flex justify-center py-2'>
                     <Link href={"/contact"} className="px-4">Contact</Link>
                </div>
            </div>
        </div>
        <div className='sideCenter px-4 flex-[1] flex items-center justify-center max-h-[450px]'>
            <Link href={"/"} className="bi bi-bounding-box text-[50px]"></Link>
        </div>
        <p className='mb-5 px-4'>Visit My Socials</p>
        <div className='self-start flex flex-col px-4 text-gray-500 text-[17px] text-inter gap-2 mb-2'>
            <a className='text-[14px]' rel="noreferrer" target={"_blank"} href="https://www.instagram.com/">instagram</a>
            <a className='text-[14px]' rel="noreferrer" target={"_blank"} href="https://github.com/dennisdingo28">github</a>
            <a className='text-[14px]' rel='noreferrer' target={"_blank"} href="https://www.discord.com/">discord</a>
        </div>
    </div>
  )
}

export default SideMenu