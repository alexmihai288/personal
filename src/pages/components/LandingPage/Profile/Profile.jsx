import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='profileWrapper flex items-center justify-center lg:mt-5'>
        <div className=' profileContainer border-2 border-[#9E9E9E] p-3 w-[100%] rounded-xl flex flex-col gap-3 items-center sm:justify-center sm:flex-row sm:gap-10 sm:border-none'>
            <div>
                <Image alt="me" src={'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} width={4050} height={4050} className="animate-slideUp object-cover rounded-full w-[100px] h-[100px] xs:w-[150px] xs:h-[150px] lg:w-[200px] lg:h-[200px]"/>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className='font-inter tracking-widest text-[#f8f8f8] text-center animate-slideUp'>Moldovan Dennis</h1>
                <div className='flex flex-col gap-1.5'>
                    <div className='underline underline-offset-4 decoration-wavy decoration-[#9E9E9E] rounded-full px-4 py-0.5 text-sm '>
                      <p className='font-inter text-center text-[13px] text-[#9E9E9E] animate-slideUp'>@Web Developer</p>
                    </div>
                    <div className="flex gap-1 justify-center items-center animate-slideUp">
                        <p className='text-[#f8f8f8]'>Socials: </p>
                        <div className='socials flex items-center'>
                          <a rel='noreferrer' href='https://github.com/dennisdingo28' target={"_blank"} className='-mr-2'> <Image alt="github" className='cursor-pointer' src={'/images/gitwhite.png'} width={35} height={35}/> </a>
                          <a rel='noreferrer' target={"_blank"} href={"https://www.instagram.com/"}> <Image alt="instagram" className='cursor-pointer' src={'/images/insta.png'} width={35} height={35}/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
