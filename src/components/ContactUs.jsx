import React from 'react'
import Contact_Phone from '../assets/images/Contact_Phone.png'
import logo_apple from '../assets/images/logo_apple.png'
import logo_playstore from '../assets/images/logo_playstore.png'
const ContactUs = () => {
  return (
    <div className='bg-[#151518] w-full absolute font-primary text-white xl:top-[440vh] lg:top-[390vh]  md:mt-[450vh] max-md:mt-[360vh] max-sm:mt-[570vh]'>
      <div className='flex px-[5%] justify-between text-white '>
        <div className='w-[28%] mt-[5%] '>
            <h1 className='font-bold xl:text-[6vh] w-[80%] ml-[5%] lg:text-[4vh] md:text-[3vh] sm:text-[2.5vh] max-sm:text-[2vh]'>Download <span className='text-[#ECC960]'>Fantasy Gaming</span> App Troop</h1>
            <div className='flex mt-[10%] xl:text-[2.5vh] md:text-[1.5vh] sm:text-[1vh]  max-sm:text-[1vh] ml-[5%]'>
        <button className='bg-[#151518] border-[#FFFFFF80] border-[1px] text-[white] w-[50%] text-[0.8em] pt-2 max-sm:w-[40%] flex rounded-lg lg:h-[7.5vh] md:h-[4.5vh] sm:h-[5vh] max-sm:h-[3.5vh] relative'>
            <img src={logo_apple} className='w-[15%] ml-[8%] mt-[2px]'></img>
            <div className='ml-[5%]'>
                <p className='lg:text-[1.2vh] text-[#E6DEFC] md:text-[0.9vh] max-sm:text-[0.5vh] '>available on</p>
                <p className='font-bold pt-0 ml-[2%] w-full lg:text-[2.2vh] text-[#E6DEFC] md:text-[0.9vh] max-sm:text-[0.5vh]'>App Store</p>
                </div>
            </button>
        {/* <button className='bg-[#151518] border-[#FFFFFF80] border-[1px] text-[white] ml-[10%] w-[50%] text-[0.8em] py-4 flex rounded-lg max-sm:w-[40%] '>
        <img src={logo_playstore} className='w-[15%] ml-[8%] mt-[2px]'></img>
           <p className=' mt-[2px] font-bold'>Play Store</p> </button> */}
           <button className='bg-[#151518] border-[#FFFFFF80] border-[1px] ml-[10%] text-[white] w-[50%] text-[0.8em] pt-2 max-sm:w-[40%] flex rounded-lg lg:h-[7.5vh] md:h-[4.5vh] sm:h-[5vh] max-sm:h-[3.5vh] relative'>
            <img src={logo_playstore} className='w-[15%] ml-[8%] mt-[2px]'></img>
            <div className='ml-[5%]'>
                <p className='lg:text-[1.2vh] text-[#E6DEFC] max-sm:text-[0.5vh] md:text-[0.9vh] '>available on</p>
                <p className='font-bold pt-0 ml-[2%] lg:text-[2.2vh] w-full text-[#E6DEFC] md:text-[0.9vh] max-sm:text-[0.5vh]'>Play Store</p>
                </div>
            </button>
      </div>
        </div>
        <div className='w-[25%]'>
         <img src={Contact_Phone}></img>
        </div>
        <div className='w-[28%] mt-[4%]'>
      <p className='text-left xl:text-[4.5vh] font-bold'>Get in <span className='text-[#ECC960]'>Touch</span></p>
      <form className='mt-[8%]'>
        <input type='text' placeholder='YOUR NAME' className='pl-[5%] py-2 block bg-[#2C2C2F] w-[80%] lg:rounded-lg lg:text-[1.8vh] lg:py-4 md:text-[2vh] sm:text-[1vh] max-sm:text-[1vh]'></input>
        <input type='text' placeholder='YOUR EMAIL' className='mt-[5%] pl-[5%] py-2 block bg-[#2C2C2F] w-[80%] lg:rounded-lg lg:text-[1.8vh] lg:py-4  md:text-[2vh] sm:text-[1vh] max-sm:text-[1vh]'></input>
        <button className='text-[#121212] bg-[#ECC960] rounded-full xl:w-[45%] xl:py-4 max-sm:rounded-xl max-sm:py-2 px-[3.0%] py-5 md:mt-[20%] xl:mt-[10%] mt-[15%] max-sm:mt-[15%] font-semibold md:text-[0.85em] sm:text-[0.7em] sm:w-[60%] sm:py-3 max-sm:w-[40%] max-sm:text-[0.4em]'>Send</button>
      </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
