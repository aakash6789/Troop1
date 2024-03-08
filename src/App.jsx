import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import LogoStrip from './components/LogoStrip'
import About from './components/About'
import './App.css'

function App() {


  return (
    <div className='font-BkBook'>
    <Navbar/>
     <Banner/> 
     {/* <LogoStrip/>  */}
     <About/>
    </div>
  )
}

export default App
