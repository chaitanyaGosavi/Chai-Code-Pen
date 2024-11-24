import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full h-[7vh] bg-black text-slate-50 flex justify-between items-center'>
            <div className='w-[30%] lg:w-[15%] uppercase flex items-center justify-around'>
                <a href="#"><img className='w-10 h-10' src="\logoBG.png" alt="logo" /></a>
                <h4 className='text-xs md:text-sm lg:text-md text-[#f8fdff] font-semibold'>Chai-Code-Pen</h4>
            </div>
            <div className='flex-1'></div>
        </div>
    )
}

export default NavBar
