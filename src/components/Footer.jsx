import React from 'react'
import footer_logo from '../assets/images/footer_logo.png'
import logo_facebook from '../assets/images/logo_facebook.png';
import logo_ig from '../assets/images/logo_ig.png';
import logo_x from '../assets/images/logo_x.png';
import logo_linkedln from '../assets/images/logo_linkedln.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#151518] w-full absolute  text-white xl:top-[495vh] lg:top-[430vh]  md:mt-[500vh] max-md:mt-[410vh] max-sm:mt-[350vh]'>
        <div className='flex w-[100%] px-[5%] justify-between font-primary'>
        <img src={footer_logo} className='w-[8%]'></img>
        <div className='text-[2vh] font-bold flex justify-between w-[30%] pt-4'>
            <div>Home</div>
            <div>Why us</div>
            <div>How to play</div>
            <div>Contests</div>
            <div>Blogs </div>
        </div>
        <div className='w-[10%] flex text-right justify-between pt-4'>
            <img src={logo_facebook} className=' h-[3vh]'></img>
            <img src={logo_ig} className=' h-[3vh]'></img>
            <img src={logo_x} className='h-[3vh]'></img>
            <img src={logo_linkedln} className='h-[3vh]'></img>
        </div>
        </div>
        <div className='text-center'>
      <hr className='w-[90%] bg-white mt-[3%] mx-[5%]'></hr>
      <div className='mt-[2%] flex justify-between w-[50%] ml-[30%] text-[2vh] max-sm:text-[0.9vh]'>
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
