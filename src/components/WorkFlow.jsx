import React from 'react'
import Step1 from '../assets/images/Step1.png'
import Step2 from '../assets/images/Step2.png'
import Step3 from '../assets/images/Step3.png'
import Step4 from '../assets/images/Step4.png'
import FeaturePhone from '../assets/images/FeaturePhone.png'
import blackshield from '../assets/images/black_shield.png'
import whiteshield from '../assets/images/white_shield.png'
import LivePlayers from './LivePlayers.jsx'
import Rating from '../assets/images/Rating.png'
const WorkFlow = () => {
  return (
    <div className='flex mt-2 relative font-primary text-white max-sm:mt-[40vh]'>
        <div className='w-[25%] absolute left-[15%] text-white  lg:top-[12vh] md:mt-[25vh] max-md:mt-[23vh] max-sm:left-[30%] max-sm:w-[50%] '>
            <p>How it works</p>
    <div className='font-bold xl:text-[5.8vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[3vh] mt-2'>Headline with USP related to <span className='text-[#ECC960]'>how your product </span>or service works</div>
    <button className='text-[#121212] bg-[#ECC960] rounded-full px-[5.0%] py-5 md:mt-[45%] xl:mt-[34%] mt-[35%] max-sm:mt-[22%] max-sm:w-[50%] max-sm:mr-[2%]  font-semibold md:text-[0.85em] sm:text-[0.7em] max-sm:py-4 max-sm:text-[1.2vh]'>Download Now</button>
      </div>
      <div className='w-[50%] absolute right-[0%] lg:top-[12vh] md:mt-[25vh] max-md:mt-[23vh] max-sm:mt-[70vh] xl:text-[2vh] md:text-[1vh] sm:text-[1vh] max-sm:left-[23%] max-sm:w-[70%]  max-sm:text-[0.8vh]'>
        <div className='flex ml-[5%]'>
            <img src={Step1} className='w-[8%] h-[7.8%] max-sm:w-[10%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold max-sm:text-[2vh]'>Short summary of step one</h2>
            <p className='w-[60%] mt-2 max-sm:text-[1vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step2} className='w-[8%] h-[8%] max-sm:w-[10%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold max-sm:text-[2vh]'>Short summary of step one</h2>
            <p className='w-[60%] mt-2 max-sm:text-[1vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step3} className='w-[8%] h-[8%] max-sm:w-[10%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold max-sm:text-[2vh]'>Short summary of step one</h2>
            <p className='w-[60%] mt-2 max-sm:text-[1vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
        <div className='flex mt-2 ml-[5%]'>
            <img src={Step4} className='w-[7.9%] h-[7.7%] max-sm:w-[10%]'></img>
            <div className='ml-[5%]'>
            <h2 className='font-bold max-sm:text-[2vh]'>Short summary of step one</h2>
            <p className='w-[60%] mt-2 max-sm:text-[1vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio qui rerum incidunt vitae hic?</p>
            </div>
        </div>
      </div>
      <div className='flex absolute w-[80%] xl:top-[52vh] lg:top-[32vh] py-8 left-[10%] md:mt-[90vh] max-md:mt-[70vh] max-sm:flex-col max-sm:mt-[130vh] '>
      <img src={FeaturePhone} className='w-[40%] max-sm:w-[80%] max-sm:ml-[15%]'></img>
      <div className='font-bold w-[40%] pt-[5%] ml-[15%]  max-md:ml-[15%]  mt-2 max-sm:w-[80%] max-sm:mt-[15%]'>
        <div className='xl:text-[4.8vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[3vh]'>Describe <span className='text-[#ECC960]'>feature one </span></div>
      <p className='text-white pt-[8%] text-[1em] max-md:text-[0.7em] max-lg:text-[0.8em] max-sm:text-[1.5vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis dolorum et! Quam reprehenderit adipisci incidunt dolorum, architecto dolorem perferendis amet, harum laborum dolor quo molestias hic possimus! Impedit facilis dolores </p>
      <div className='flex mt-4 xl:text-[2.5vh] md:text-[1.5vh] sm:text-[1vh] max-sm:mt-[15%]  max-sm:text-[1vh]'>
        <button className=' group transition duration-500 hover:bg-[#ECC960] text-[white] w-[50%] text-[0.8em] py-4 max-sm:w-[40%] flex rounded-lg'>
          <div className='w-[10%] ml-[8%] mt-[2px] group relative'>
            <img src={whiteshield} className='transition duration-500 ease-in-out transform group-hover:opacity-0 group-hover:scale-110' alt='blackshield'></img>
            <img src={blackshield} className='absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100' alt='whiteshield'></img>
            </div>
            <p className='pl-[5%] mt-[2px] transition duration-500 group-hover:text-[black] max-sm:mt-[3%]'>Sectoral</p></button>
            <button className=' group ml-[10%] transition duration-500 hover:bg-[#ECC960] text-[white] w-[50%] text-[0.8em] py-4 max-sm:w-[40%] flex rounded-lg'>
          <div className='w-[10%] ml-[8%] mt-[2px] group relative'>
            <img src={whiteshield} className='transition duration-500 ease-in-out transform group-hover:opacity-0 group-hover:scale-110' alt='blackshield'></img>
            <img src={blackshield} className='absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100' alt='whiteshield'></img>
            </div>
            <p className='pl-[5%] mt-[2px] transition duration-500 group-hover:text-[black] max-sm:mt-[3%]'>Private</p></button>
      </div>
      <div className='flex mt-[5%] xl:text-[2.5vh] md:text-[1.5vh] sm:text-[1vh] max-sm:ml-[-0%]   max-sm:text-[1vh]'>
      <button className=' group transition duration-500 hover:bg-[#ECC960] text-[white] w-[50%] text-[0.8em] py-4 max-sm:w-[40%] flex rounded-lg'>
          <div className='w-[10%] ml-[8%] mt-[2px] group relative'>
            <img src={whiteshield} className='transition duration-500 ease-in-out transform group-hover:opacity-0 group-hover:scale-110' alt='blackshield'></img>
            <img src={blackshield} className='absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100' alt='whiteshield'></img>
            </div>
            <p className='pl-[5%] transition duration-500 group-hover:text-[black] max-sm:mt-[3%]'>Mega</p></button>
            <button className=' group ml-[10%] transition duration-500 hover:bg-[#ECC960] text-[white] w-[50%] text-[0.8em] py-4 max-sm:w-[40%] flex rounded-lg'>
          <div className='w-[10%] ml-[8%] mt-[2px] group relative'>
            <img src={whiteshield} className='transition duration-500 ease-in-out transform group-hover:opacity-0 group-hover:scale-110' alt='blackshield'></img>
            <img src={blackshield} className='absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100' alt='whiteshield'></img>
            </div>
            <p className='pl-[5%] transition duration-500 group-hover:text-[black] max-sm:mt-[3%]'>Live</p></button>
      </div>
      </div>
      </div>
     <LivePlayers/>

     
    </div>
  )
}

export default WorkFlow
