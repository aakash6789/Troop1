import React from 'react'
import money from '../assets/images/money.png'
import world from '../assets/images/world.png'
import stocks from '../assets/images/stocks.png'
import useMediaQuery from '../hooks/useMediaQuery.jsx'
const Blog = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  return (
    <div className='bg-[#151518] w-full absolute font-primary text-white xl:top-[370vh] lg:top-[362vh]  md:mt-[340vh] max-md:mt-[270vh] max-sm:mt-[370vh]'>
        <p className='text-center text-[2vh] font-bold max-sm:text-[1.5vh] '>Blog</p>
        <p className='text-center font-extrabold lg:text-[6vh] md:text-[5vh] sm:text-[4vh] max-sm:text-[3vh]'>Headline introducing <span className='text-[#ECC960]'>resources</span></p>
        <p className='text-center lg:text-[2vh] mt-[2%] md:text-[2vh] sm:text-[1.5vh] max-sm:text-[1vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id inventore officia.</p>
        <div className='flex justify-between  px-8 mt-[5%] lg:text-[2.5vh] md:text-[2vh] sm:text-[1.5vh] max-sm:flex-col max-sm:text-[1vh]'>
            <div className='bg-[#1F1F23] rounded-lg max-sm:w-[70%] max-sm:ml-[15%]'>
           <img src={world} className='rounded-lg w-[100%] max-sm:w-full'></img>
            <button className='p-2 text-black bg-[#F3E7C3] ml-[5%] mt-[5%] max-sm:w-[40%] max-sm:text-[2vh] max-sm:px-0 '>Category</button>
            <span className='font-medium ml-[4%] max-lg:text-[0.8em] lg:text-[1.5vh] xl:text-[2vh] max-sm:text-[1.5vh]'>5 min read</span>
            <h1 className='ml-[5%] mt-[5%] font-bold max-sm:text-[2vh] max-lg:text-[1.2vh] lg:text-[1.5vh] xl:text-[3.5vh]'>Blog title heading will go here</h1>
            <p className='mt-[3%] ml-[5%] max-sm:text-[1.2vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.</p>
            <button className='mt-[5%] ml-[5%] mb-[5%] max-sm:text-[1.5vh]'>Read more</button>
            </div>
            <div className='bg-[#1F1F23] sm:mx-8 rounded-lg max-sm:w-[70%] max-sm:ml-[15%] max-sm:my-8'>
           <img src={stocks} className='rounded-lg w-[100%] max-sm:w-full'></img>
            <button className='p-2 text-black bg-[#F3E7C3] ml-[5%] mt-[5%] max-sm:w-[40%] max-sm:text-[2vh] max-sm:px-0'>Category</button>
            <span className='font-medium ml-[4%] max-lg:text-[0.8em] lg:text-[1.5vh] xl:text-[2vh] max-sm:text-[1.5vh]'>5 min read</span>
            <h1 className='ml-[5%] mt-[5%] font-bold max-sm:text-[2vh]  max-lg:text-[1.2vh] lg:text-[1.5vh] xl:text-[3.5vh]'>Blog title heading will go here</h1>
            <p className='mt-[3%] ml-[5%] max-sm:text-[1.2vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.</p>
            <button className='mt-[5%] ml-[5%] mb-[5%] max-sm:text-[1.5vh]'>Read more</button>
            </div>
            <div className='bg-[#1F1F23] rounded-lg max-sm:w-[70%] max-sm:ml-[15%]'>
           <img src={money} className='rounded-lg w-[100%]'></img>
            <button className='p-2 text-black bg-[#F3E7C3] ml-[5%] mt-[5%] max-sm:w-[40%] max-sm:text-[2vh] max-sm:px-0'>Category</button>
            <span className='font-medium ml-[4%] max-lg:text-[0.8em] lg:text-[1.5vh] xl:text-[2vh] max-sm:text-[1.5vh]'>5 min read</span>
            <h1 className='ml-[5%] mt-[5%] font-bold max-sm:text-[2vh] max-lg:text-[1.2vh] lg:text-[1.5vh] xl:text-[3.5vh]'>Blog title heading will go here</h1>
            <p className='mt-[3%] ml-[5%] max-sm:text-[1.2vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.</p>
            <button className='mt-[5%] ml-[5%] mb-[5%] max-sm:text-[1.5vh]'>Read more</button>
            </div>
        </div>
        <div className='w-full text-center mt-[5%]'>
            <button className='rounded-3xl border-[#ECC960] text-[#ECC960] border-[1px] px-10 py-2 xl:text-[2.5vh] max-sm:text-[1.5vh] mb-[5%]'>View more</button>
            </div>
      
    </div>
  )
}

export default Blog
