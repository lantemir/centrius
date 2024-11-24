import React, { ReactNode } from 'react'

const Homelayout = ({children}: {children: ReactNode} ) => {
  return (
    <main className='relative'>
        {/* Navbar */}

        <div className='flex'>
            {/* SideBar */}
            

            <section className='flex min-h-screen flex-1 flex-col '>
                <div className='w-full'>
                  {children}
                </div>
            </section>

        </div>        
      
    </main>
  )
}

export default Homelayout