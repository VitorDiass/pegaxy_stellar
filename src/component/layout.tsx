import React, { FC, ReactNode } from 'react'
import Footer from './footer'
import MainHeaderComponent from './mainHeader'
import StatusBarComponent from './statusbar'



function LayoutComponent({children} : any) {
  return (
    <div className="flex flex-col min-h-screen bg-backimage bg-center bg-cover bg-no-repeat p-10 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-12 lg:pt-10 lg:pb-0 xl:p-6 xl:pt-4 xl:pb-0">
        <div className='flex-grow'>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default LayoutComponent