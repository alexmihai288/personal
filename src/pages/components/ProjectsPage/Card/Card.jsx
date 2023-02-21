import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({title, website, github, image, status}) => {
  return (
    <div className={`card flex flex-col justify-center gap-3.5 p-4 border border-[#9e9e9e] rounded-md md:flex-row md:justify-start overflow-hidden`}>
        <Link rel='noreferrer' href={`/projects/${title}`}>
          <div className='leftCard relative rounded-md h-[100%]'>
              <Image width={4050} height={4050} className='rounded-md object-cover max-h-[2100px] h-[100%] w-[100%] min-w-[200px]' src={image} alt="project preview"/>
              <div className='rounded-md duration-100 absolute  top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,.5)]'>
                <p className='text-[#f8f8f8] font-medium text-[19px]'>View Details</p>
              </div>
          </div>
        </Link>
        <div className='rightCard flex flex-col self-start gap-2 font-inter md:self-center'>
            <div className='title flex flex-col gap-0.5 text-[12px] lg:text-[15px]'>
              <p className='text-[#7b7b7b]'>DEPLOYMENT NAME: </p>
              <p className='text-[#f8f8f8] lg:text-[14px]'>{title}</p>
            </div>
            <div className='domain flex flex-col gap-0.5'>
              <p className='text-[#7b7b7b] text-[12px] lg:text-[15px]'>DOMAIN: </p>
              <a rel='noreferrer' href={website} target='_blank' className='text-[#f8f8f8] text-[12px] lg:text-[14px] hover:underline hover:underline-offset-4 self-start'>{website}</a>
            </div>
            <div className='information flex flex-col gap-3.5 items-center sm:flex-row md:gap-4'>
                <div className='status self-start'>
                  <div className='toggle flex flex-col'>
                    <p className='text-[#7b7b7b] text-[12px] lg:text-[15px]'>STATUS </p>
                    <div className='flex items-center gap-0.5'>
                        <div className={`h-[7.5px] w-[7.5px] rounded-full ${status=="online"?"bg-[#50E2C1]":"bg-red-500"}`}></div>
                        <div className='text-[#f8f8f8] text-[12px]'>{status=="online" ? "Online" : "Offline"}</div>
                    </div>
                  </div>
                </div>
                <div className='github'>
                  <div className='toggle flex flex-col'>
                    <p className='text-[#7b7b7b] text-[12px] lg:text-[15px]'>GITHUB</p>
                    <a rel='noreferrer' href={github} target='_blank' className='text-[#f8f8f8] text-[12px] hover:underline hover:underline-offset-4 self-start '>{github}</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card