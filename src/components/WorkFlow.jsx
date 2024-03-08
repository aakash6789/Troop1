import React from 'react'
import Step1 from '../assets/images/Step1.png'
import Step2 from '../assets/images/Step2.png'
import Step3 from '../assets/images/Step3.png'
import Step4 from '../assets/images/Step4.png'
const WorkFlow = () => {
  return (
    <div className='flex mt-2 relative font-primary text-white'>
        <div className='w-[25%] absolute left-[15%] text-white  font-primary  lg:top-[12vh] md:mt-[25vh] max-md:mt-[23vh] max-sm:mt-[20vh] '>
            <p>How it works</p>
    <div className='font-bold xl:text-[5.8vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[1.8vh] mt-2'>Headline with USP related to <span className='text-[#ECC960]'>how your product </span>or service works</div>
      </div>
      <div className='w-[50%] absolute right-[0%] lg:top-[12vh] md:mt-[25vh] max-md:mt-[23vh] max-sm:mt-[20vh] xl:text-[2vh] md:text-[1vh] sm:text-[1vh]  max-sm:text-[0.8vh]'>
        <div className='flex ml-[5%]'>
            <img src={Step1} className='w-[8%] h-[7.8%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold'>Short summary of step one</h2>
            <p className='w-[60%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step2} className='w-[8%] h-[8%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold'>Short summary of step one</h2>
            <p className='w-[60%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step3} className='w-[8%] h-[8%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold'>Short summary of step one</h2>
            <p className='w-[60%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step4} className='w-[7.9%] h-[7.7%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold'>Short summary of step one</h2>
            <p className='w-[60%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default WorkFlow
