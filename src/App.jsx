import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import WorkFlow from './components/WorkFlow'
import LivePlayers from './components/LivePlayers'
import About from './components/About'
import './App.css'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {


  return (
    <div className='font-BkBook'>
    <Navbar/>
     <Banner/> 
     <About/>
     <WorkFlow/>
     {/* <LivePlayers/> */}
     <Testimonial/>
     <Blog/>
     <ContactUs/>
     <Footer/>
    </div>
  )
}

export default App
