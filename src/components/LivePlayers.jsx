import React from 'react'
import Rating from '../assets/images/Rating1.png'
const LivePlayers = () => {
  return (
    <div className='bg-[#1B1B1D]  w-full absolute text-white xl:top-[90vh] lg:top-[62vh]  md:mt-[160vh] max-md:mt-[130vh] max-sm:mt-[110vh]'>
      <div>
        <h1 className='text-[13vh] text-center mt-8 font-extrabold ml-6'>1<span className='mx-1'>200</span><span className='text-[#F3BD1B]'>1</span></h1>
        <p className='text-center mt-4'>Players live now</p>
        <hr className='bg-white w-[3%] h-[2px] mt-2 mx-auto'></hr>
        <div className='bg-[#222223] flex w-[15%] py-4 px-4 ml-[43%] mt-[5vh] rounded-md max-sm:w-[30%] md:w-[30%] max-sm:ml-[37%]'>
            <span className='text-[1em] max-sm:text-[0.5em]'>App rating</span>
            <img src={Rating} className='w-[60%] ml-[2%]'></img>
        </div>
      </div>
    </div>
  )
}

export default LivePlayers
