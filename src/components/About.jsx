import React from 'react'
import PhoneSpin from '../assets/images/PhoneSpin.png'
const About = () => {
  return (
    <div className='flex mt-2 relative lg:h-[98vh] md:h-[68vh] max-md:h-[55vh] sm:h-[65vh] max-sm:flex-col max-sm:mt-[100vh] max-sm:h-[42vh]'>
      <img src={PhoneSpin} className='w-[40%] absolute left-[8%] top-[12vh]'></img>
      <div className='w-[30%] absolute right-[14%] text-white  font-primary  lg:top-[12vh] md:mt-[25vh] max-md:mt-[23vh] max-sm:mt-[20vh] '>
    <div className='font-bold xl:text-[5.8vh] md:text-[3vh] sm:text-[2vh]  max-sm:text-[1.8vh]'>Tell the visitor <span className='text-[#ECC960]'>what the [Product] </span>is about</div>
      <p className='text-white pt-4 text-[1em] max-md:text-[0.7em] max-lg:text-[0.8em] max-sm:text-[0.5em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis dolorum et! Quam reprehenderit adipisci incidunt dolorum, architecto dolorem perferendis amet, harum laborum dolor quo molestias hic possimus! Impedit facilis dolores </p>
      </div>
    </div>
  )
}

export default About
