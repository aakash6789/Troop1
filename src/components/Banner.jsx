import React from 'react'
import banner from '../assets/images/Illustration1.png'
import adidas from '../assets/images/adidas2.png'
import sadidas from '../assets/images/adidas.png'
import burberry from '../assets/images/burberry2.png'
import sburberry from '../assets/images/burberry.png'
import dell from '../assets/images/dell2.png'
import sdell from '../assets/images/dell.png'
import nike from '../assets/images/nike2.png'
import snike from '../assets/images/nike.png'
import Swiggy from '../assets/images/Swiggy2.png'
import sSwiggy from '../assets/images/Swiggy.png'
import Zara from '../assets/images/zara2.png'
import sZara from '../assets/images/Zara.png'
import Zomato from '../assets/images/zomato2.png'
import sZomato from '../assets/images/zomato.png'
import useMediaQuery from '../hooks/useMediaQuery'
import LogoStrip from './LogoStrip.jsx'


const Banner = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  return (
    <div className=' mt-4 text-white relative font-primary'>
        <div className='max-sm:flex-col flex'>
        <div className='xl:text-[6.5vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[3vh] absolute w-[35%] left-[10%] sm:mt-[15%] font-extrabold max-sm:mt-[65vh] max-sm:left-[15%] max-sm:w-[80%]'>THE <span className='text-[#ECC960]'>FUN AND SOCIAL</span> WAY TO LEARN HOW TO INVEST</div>
        {/* <div className='md:text-[7vh] absolute w-[35%] left-[43%] mt-[20.7%] font-extrabold'>TO</div> */}
      <img src={banner} className='max-sm:w-[80%] w-[40%] absolute max-sm:left-[7%] sm:right-[7%] mt-[5%] max-sm:mt-4'></img>
      </div>
      <button className='text-[#121212] bg-[#ECC960] rounded-full px-[3.0%] py-5 md:mt-[45%] xl:mt-[32%] mt-[35%] max-sm:top-[58%] max-sm:mr-[2%] absolute left-[10%] font-semibold md:text-[0.85em] sm:text-[0.7em] max-sm:text-[1.5vh] max-sm:w-[30%] max-sm:left-[35%]'>Download Now</button>
      <div className='h-[30vh]  mt-[110vh] max-sm:mt-[100vh] bg-[#1B1B1D] pt-12 max-sm:pt-2'>
      <LogoStrip/>

      </div>
    </div>
  )
}

export default Banner

// xl:text-[5.8vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[1.8vh]

// 2xl:text-[7vh] xl:text-[6vh] md:text-[5vh] sm:text-[3vh]