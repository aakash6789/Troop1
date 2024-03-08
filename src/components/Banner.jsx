import React from 'react'
import banner from '../assets/images/Illustration1.png'
import adidas from '../assets/images/adidas2.png'
import burberry from '../assets/images/burberry2.png'
import dell from '../assets/images/dell2.png'
import nike from '../assets/images/nike2.png'
import Swiggy from '../assets/images/Swiggy2.png'
import Zara from '../assets/images/zara2.png'
import Zomato from '../assets/images/zomato2.png'
const Banner = () => {
  return (
    <div className=' mt-4 text-white relative font-primary'>
        <div className='flex'>
        <div className='2xl:text-[7vh] xl:text-[6vh] md:text-[5vh] sm:text-[3vh] absolute w-[35%] left-[10%] mt-[16%] font-extrabold'>THE <span className='text-[#ECC960]'>FUN AND SOCIAL</span> WAY TO LEARN HOW TO INVEST</div>
        {/* <div className='md:text-[7vh] absolute w-[35%] left-[43%] mt-[20.7%] font-extrabold'>TO</div> */}
      <img src={banner} className='w-[40%] absolute right-[7%] mt-[5%]'></img>
      </div>
      <button className='text-[#121212] bg-[#ECC960] rounded-full px-[3.0%] py-5 md:mt-[45%] xl:mt-[35%] mt-[35%] absolute left-[10%] font-semibold md:text-[0.85em] sm:text-[0.7em] max-sm:text-[0.4em]'>Download Now</button>
      <div className='h-[35vh] mt-[60%] bg-[#1B1B1D] pt-12'>
        <p className='text-white text-center'>Trusted by the India's best companies</p>
      <div className='w-[98.5vw]  mt-[0%] flex justify-between h-[15vh] py-12 h-[20vh]  bg-[#1B1B1D] px-2 max-sm:px-2'>
        <img src={nike} className='max-sm:w-[8%]' ></img>
        <img src={dell} className='w-[7%] mt-2 max-sm:w-[12%]'></img>
        <img src={burberry} className='w-[15%] h-[55%] mt-4 max-sm:w-[15%]'></img>
        <img src={Zomato} className='w-[9%] max-sm:w-[10%]  mt-2'></img>
        <img src={adidas} className='max-sm:w-[8%]'></img>
        <img src={Swiggy} className='w-[7%] max-sm:w-[12%]'></img>
        <img src={Zara} className='max-sm:w-[10%]'></img>
      </div>
      </div>
      
    </div>
  )
}

export default Banner
