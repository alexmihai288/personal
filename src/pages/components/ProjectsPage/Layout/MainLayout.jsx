import React from 'react'
import Footer from '../Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col min-h-[100vh] '>
      <div className='px-4 py-4 xs:px-12 flex-[1] flex flex-col'>
        {children}
      </div>
        <div className='footerContainer'>
          <Footer/>
        </div>
    </div>
  )
}

export default MainLayout