import React from 'react'
import Rating from '../assets/images/Rating1.png'
const LivePlayers = () => {
  return (
    <div className='bg-[#1B1B1D] h-auto  w-full absolute text-white xl:top-[90vh] lg:top-[62vh]  md:mt-[160vh] max-md:mt-[130vh] max-sm:mt-[240vh]'>
      <div className='mt-16'>
        <h1 className='text-[13vh] text-center mt-8 font-extrabold ml-6'>{Math.round(Math.random()*10)+1}<span className='mx-1'>{Math.round(Math.random()*100)}</span><span className='text-[#F3BD1B]'>{Math.round(Math.random()*10)}</span></h1>
        <p className='text-center mt-4'>Players live now</p>
        <hr className='bg-white w-[3%] h-[2px] mt-2 mx-auto'></hr>
        <div className='bg-[#222223] mb-16 justify-between flex   xl:w-[16%] xl:ml-[42%] lg:w-[26%] py-4 px-4 lg:ml-[38%] mt-[5vh] rounded-md max-sm:w-[28%] min-sm:ml-[5%] sm:w-[38%] sm:ml-[33%] md:w-[28%] md:ml-[35%] max-sm:ml-[37%]'>
            <span className='text-[1em] max-sm:text-[0.5em]'>App rating</span>
            <img src={Rating} className='w-[60%] ml-[2%] max-sm:w-[40%] ' alt='Rating'></img>
        </div>
      </div>
    </div>
  )
}

export default LivePlayers
