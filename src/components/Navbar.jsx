import React from 'react'
import troopLogo from '../assets/images/TroopLogo1.png'
import '../index.css'
import '../App.css'
const Navbar = () => {
  return (
    
        <nav className='relative h-[15vh] bg-[#151518] pt-[5vh] text-[#FFFFFF] font-primary font-thin'>
       <img src={troopLogo} className='absolute left-[10%] w-[7%] max-sm:w-[15%] mt-2 '></img>
        <div className='flex  justify-between  w-2/4 max-sm:w-[60%] absolute left-[45%] right-[5%] max-sm:left-[40%]  md:text-[0.85em] sm:text-[0.7em] max-sm:text-[1vh] '>
        <span className='font-thin py-4'>Home</span>
        <span className='font-thin py-4'>Why us</span>
        <span className='font-thin py-4'>How to play?</span>
        <span className='font-thin py-4'>Contests</span>
        <span className='font-thin py-4'>Blogs</span>
        
        <button className='text-[#121212] bg-[#ECC960] rounded-full px-[5%] min-sm:px-[3%] py-4 font-semibold max-sm:w-[25%] max-sm:py-1 max-sm:rounded-2xl max-sm:px-0 max-sm:text-[0.8vh]'>Download Now</button>

        </div>  
      </nav>
      
  )
}

export default Navbar
