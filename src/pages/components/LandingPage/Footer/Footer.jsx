import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer flex flex-col items-center justify-center gap-[20px] font-inter w-[100%]'>
      <div className='contactUs'>
        <Link href={"/contact"}><button className='border-2 animate-slideRight border-[#e2b928] px-4 py-0.5 font-semibold text-[12px] text-[#e2b928] hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 active:shadow-none duration-75 xs:px-8 xs:py-1.5 xs:text-[16px]'>GET IN TOUCH</button></Link>
      </div>
      <div className='flex items-center xs:w-[100%] justify-between sm:justify-around'>
        <div className='flex items-center justify-center text-[12px] text-[#f8f8f8] min-h-[120px] xs:text-[14px]'>
            <small className='font-karla text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px]'>© Copyright 2023. All rights reserved.</small>
        </div>
        <div className='socials flex flex-col justify-center text-[13px] text-[#f8f8f8] border-l-2 pl-7 lg:pl-2 gap-7 min-h-[120px] xs:text-[15px]'>
              <Link target={"_blank"} href={"https://www.instagram.com/"}><i className="bi bi-instagram cursor-pointer hover:text-[#e2b928] duration-75 hover:shadow-lg hover:shadow-indigo-500/20"></i></Link>
              <Link target={"_blank"} href={"https://github.com/dennisdingo28"}><i className="bi bi-github cursor-pointer hover:text-[#e2b928] duration-75 hover:shadow-lg hover:shadow-indigo-500/20"></i></Link>
        </div>
      </div>
    </div>
  )
}
  
export default Footer