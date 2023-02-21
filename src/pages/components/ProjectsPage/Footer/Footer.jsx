import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footerWrapper mt-8'>
      <div className='bg-[#281818] px-12 py-4 sm:py-2'>
        <div className='topSection flex flex-col'>
          <div className='footerHeader text-[#f8f8f8] flex items-center justify-center gap-16 sm:justify-between'>
            <Link href={"/"} className='footerLogo flex items-center text-[17px] tracking-widest gap-[10px] cursor-pointer'>
              <i className="bi bi-bounding-box text-[20px]"></i>
              <h1>PERSONAL</h1>
            </Link>
            <div className='footerSocialsContainer flex items-center gap-4'>
              <i className="bi bi-instagram cursor-pointer hover:text-[#cccccc]"></i>
              <i className="bi bi-linkedin cursor-pointer hover:text-[#cccccc]"></i>
            </div>
          </div>
        </div>
        <div className='bottomSection flex items-center justify-between mt-6 pb-3 sm:mt-4 text-[#9ca3af97]'>
          <div className='copyrightContainer text-start'>
            <small className='font-source font-medium sm:text-[15px]'>Copyright 2023. All rights reserved.</small>
          </div>
          <div className='font-karla pagesContainer flex flex-col gap-1 sm:flex-row sm:gap-3'>
            <Link href={"/"} className="self-start relative after:content-[''] after:absolute after:duration-[.15s] after:-bottom-1 after:w-0 hover:after:w-[100%] after:h-[1.5px] after:bg-[#9ca3af97] after:left-[50%] after:-translate-x-[50%]">Home</Link>
            <Link href={"/projects"} className="relative after:content-[''] after:absolute after:duration-[.15s] after:-bottom-1 after:w-0 hover:after:w-[100%] after:h-[1.5px] after:bg-[#9ca3af97] after:left-[50%] after:-translate-x-[50%]">Projects</Link>
            <Link href={"/contact"} className="relative after:content-[''] after:absolute after:duration-[.15s] after:-bottom-1 after:w-0 hover:after:w-[100%] after:h-[1.5px] after:bg-[#9ca3af97] after:left-[50%] after:-translate-x-[50%]">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer