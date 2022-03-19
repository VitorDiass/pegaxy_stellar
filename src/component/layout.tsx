import React, { FC, ReactNode } from 'react'



function LayoutComponent({children} : any) {
  return (
    <div className="flex flex-col min-h-screen bg-backimage bg-center bg-cover bg-no-repeat p-5 pb-0">
        {children}
    </div>
  )
}

export default LayoutComponent