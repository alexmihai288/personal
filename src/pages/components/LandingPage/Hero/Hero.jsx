import React from 'react'
import Link from 'next/link'

const Hero = () => {

  return (
    <div className='mottoContainer lg:h-[32vh]'>
        <div className='font-source'>
            <h2 className='animate-slideRight text-center mt-8 font-medium text-[#f8f8f8] text-[20px] xs:text-[30px] lg:text-[25px]'>━ HE<span className='text-[#e2b928]'>LL</span>O ━</h2>
            <p className='animate-slideLeft mt-8 text-left text-[17px] text-[#f8f8f8] xs:text-[25px] max-w-[671px] lg:text-[20px]'> I am a Web <span className='text-[#e2b928]'>Developer</span>. Making your dream web <span className='text-[#e2b928]'>application</span> alive<span> .</span></p>
            <Link href="/projects" className='animate-slideDown seeProjctsContainer max-w-[250px] mx-auto flex items-center my-16 lg:my-8 bg-[#211602] text-[#f8f8f8] py-3 w-[100%] font-karla justify-center space-x-4 rounded-md hover:-translate-y-1 cursor-pointer active:scale-[.98] duration-[.20s] xs:text-[18px]'>
              <p>View my projects</p>
              <i className='bi bi-arrow-up'></i>
            </Link>
        </div>
       
    </div>
  )
}

export default Hero