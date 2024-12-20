import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full h-[7vh] bg-black text-slate-50 flex justify-between items-center'>
            <div className='w-[50%] lg:w-[20%] uppercase flex items-center justify-start gap-4'>
                <a href="#"><img className='w-10 h-10 md:w-12 md:h-12' src="\logoBG.png" alt="logo" /></a>
                <h4 className='text-xs md:text-lg lg:text-md text-[#f8fdff] font-semibold'>Chai-Code-Pen</h4>
            </div>
            <div className='flex-1'></div>
        </div>
    )
}

export default NavBar
