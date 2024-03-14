import React from 'react'
import footer_logo from '../assets/images/footer_logo.png'
import logo_facebook from '../assets/images/logo_facebook.png';
import logo_ig from '../assets/images/logo_ig.png';
import logo_x from '../assets/images/logo_x.png';
import logo_linkedln from '../assets/images/logo_linkedln.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#151518] w-full absolute  text-white xl:top-[495vh] lg:top-[430vh]  md:mt-[500vh] max-md:mt-[410vh] max-sm:mt-[610vh]'>
        <div className='flex w-[100%] px-[5%] justify-between font-primary'>
        <img src={footer_logo} className='w-[8%] max-sm:w-[20%]'></img>
        <div className='text-[2vh] font-bold flex justify-between w-[30%] pt-4 xl:text-[2vh] lg:text-[1.0vh] md:text-[1.0vh] sm:text-[1.2vh] max-sm:w-[40%] max-sm:text-[0.8vh]'>
            <div>Home</div>
            <div>Why us</div>
            <div>How to play</div>
            <div>Contests</div>
            <div>Blogs </div>
        </div>
        <div className='w-[10%] flex text-right justify-between pt-4 lg:w-[10%] md:w-[10%] sm:w-[15%] max-sm:w-[20%]'>
            <img src={logo_facebook} className=' lg:h-[3vh] sm:h-[2vh] max-sm:h-[2vh]'></img>
            <img src={logo_ig} className=' lg:h-[3vh] sm:h-[2vh] max-sm:h-[2vh]'></img>
            <img src={logo_x} className='lg:h-[3vh] sm:h-[2vh] max-sm:h-[2vh]'></img>
            <img src={logo_linkedln} className='lg:h-[3vh] sm:h-[2vh] max-sm:h-[2vh]'></img>
        </div>
        </div>
        <div className=''>
      <hr className='w-[90%] bg-white mt-[3%] mx-[5%]'></hr>
      <div className='mt-[2%] xl:px-[5%]  mb-[3%] flex justify-between w-[50%] ml-[25%] text-[2vh] xl:text-[2vh] lg:text-[1vh] md:text-[0.9vh] sm:text-[1.2vh] max-sm:text-[0.6vh]'>
        <span>&#169; {currentYear} TROOP.All rights reserved.</span>
        <span className='underline'>Privacy Policy</span>
        <span className='underline'>Terms of Service</span>
        <span className='underline'>Cookie Settings</span>
      </div>
      </div>
    </div>
  )
}

export default Footer
