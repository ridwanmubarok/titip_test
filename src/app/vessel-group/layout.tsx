"use client";

import Hstack from '@/components/Stacks/Hstack';
import Sidebar from '@/components/layouts/Sidebar'
export default function Layout({children}:{children: React.ReactNode}){
    return(
      <div className='flex'>
      <Sidebar/>
      <div className='h-screen ml-32 bg-gray-100 w-full'>
        {children}
      </div>
    </div>
    )
}