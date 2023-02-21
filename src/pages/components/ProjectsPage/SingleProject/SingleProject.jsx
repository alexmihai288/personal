import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../Layout/MainLayout';

const SingleProject = ({data}) => {
  const {title, website, description, github, image, status} = data; 
  return (
    <MainLayout>
        <div className='projectWrapper mt-3  md:mt-5'>
            <div className='projectHeader flex items-center text-[#f8f8f8]'>
              <Link href={"/projects"} className="bi bi-box-arrow-left text-[20px] cursor-pointer hover:text-gray-400 duration-100"></Link>
              <h1 className='text-center mx-auto font-medium text-[23px]'>{title}</h1>
            </div>
            <div className='projectContent flex flex-col lg:flex-row mb-0 mt-10 md:mt-20'>
              <div className='flex-1'>
                <Image width={4050} height={4050} src={image} alt="project image" className='object-cover rounded-t-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md w-[100%] h-[100%] max-h-[550px]'/>
              </div>
              <div className='bg-[#211602] px-3 py-4 flex-1'>
                <div className=''>
                  <h1 className='text-[19px] font-bold text-[#f8f8f8]'>Information</h1>
                  <div className='projectStatus mt-3 flex flex-col xs:flex-row gap-3 justify-between overflow-hidden'>

                    <div className='statusContainerDomain flex flex-col justify-between'>
                      <div className='flex items-center statusHead text-[#7b7b7b] gap-2'>
                        <p className='font-source text-[17px]'>Domain</p>
                        <i className="bi bi-globe text-[15px]"></i>
                      </div>
                      <div className='statusContent'>
                        <a rel='noreferrer' href={website} target='_blank' className='text-[#f8f8f8] text-[12px] lg:text-[14px] hover:underline hover:underline-offset-4 self-start'>{website}</a>
                      </div>
                    </div>

                    <div className='statusContainerGithub flex flex-col justify-between'>
                      <div className='flex items-center statusHead text-[#7b7b7b] gap-2'>
                        <p className='font-source text-[17px]'>Github</p>
                        <i className="bi bi-git text-[17px]"></i>
                      </div>
                      <div className='statusContent'>
                        <a rel='noreferrer' href={github} target='_blank' className='text-[#f8f8f8] text-[12px] lg:text-[14px] hover:underline hover:underline-offset-4 self-start max-w-[100px] overflow-hidden'>View Source Code</a>
                      </div>
                    </div>

                  
                    <div className='statusContainerState flex flex-col justify-between'>
                      <div className='flex items-center statusHead text-[#7b7b7b] gap-2'>
                        <p className='font-source text-[17px]'>Status</p>
                        <i className="bi bi-app-indicator text-[17px]"></i>
                      </div>
                      <div className='statusContent'>
                      <div className='flex items-center gap-0.5'>
                          <div className={`h-[7.5px] w-[7.5px] rounded-full ${status=="online"?"bg-[#50E2C1]":"bg-red-500"}`}></div>
                          <div className='text-[#f8f8f8] text-[12px]'>{status=="online" ? "Online" : "Offline"}</div>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>
                <div>
                  <div className='descriptionHead mt-3'>
                    <h1 className='text-[19px] font-bold text-[#f8f8f8]'>Description</h1>
                    <p className='text-[#7b7b7b] mt-3 pl-3 text-[14px] tracking-wider'>{description}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default SingleProject