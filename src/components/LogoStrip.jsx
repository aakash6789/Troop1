import React from 'react'
import adidas from '../assets/images/adidas2.png'
import burberry from '../assets/images/burberry2.png'
import dell from '../assets/images/dell2.png'
import nike from '../assets/images/nike2.png'
import Swiggy from '../assets/images/Swiggy2.png'
import Zara from '../assets/images/zara2.png'
import Zomato from '../assets/images/zomato2.png'
const LogoStrip = () => {
  return (
    <div className='w-[full] absolute mt-[60%] ml-[10%] flex bg-[#1B1B1D]'>
        <img src={nike}></img>
        <img src={dell}></img>
        <img src={burberry}></img>
        <img src={Zomato}></img>
        <img src={adidas}></img>
        <img src={Swiggy}></img>
        <img src={Zara}></img>
      </div>
  )
}

export default LogoStrip
