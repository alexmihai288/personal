import Navbar from './components/LandingPage/Navbar/Navbar';
import Hero from './components/LandingPage/Hero/Hero';
import Footer from './components/LandingPage/Footer/Footer';
import Profile from './components/LandingPage/Profile/Profile';
import Background from './components/LandingPage/Background/Background';
import SideMenu from './components/LandingPage/SideMenu/SideMenu';
import { useEffect, useState } from 'react';
import Experience from './components/LandingPage/Experience/Experience';

export default function Home({clients}) {
  const [sideMenu,setSideMenu]=useState(false);
  
  return (
    <>
      <div className='APP flex flex-col lg:flex-row' onClick={()=>{if(sideMenu)setSideMenu(false)}}>
          <main className='bg-luxBrown lg:sticky lg:left-0 lg:top-0 bottom-0 leftSection w-[100%] lg:h-[100vh] lg:max-w-[600px] relative'>
            <div className='px-10 py-5 lg:px-4 h-[100%] flex flex-col gap-12 lg:gap-2'>
              <div className='lg:flex-[1]'>
                <Navbar setSideMenu={setSideMenu} sideMenu={sideMenu}/>
                <Hero />
                <Profile/>
              </div>
              <div className='lg:h-fit lg:flex lg:items-end lg:justify-center '>
                <Footer />
              </div>
            </div>
            <SideMenu setSideMenu={setSideMenu} sideMenu={sideMenu}/>
          </main>
          <main className='rightSection bg-[#d0c9c7] w-[100%] py-4'>
            <Background/>
            <Experience clients={clients}/>
          </main>
      </div>
      
    </>
  )
}

export async function getServerSideProps(){
  const {clients}=await import("/data/data.json");
  return {
      props:{
          clients:clients,
      }
  }
}