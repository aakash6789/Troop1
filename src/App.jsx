import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import WorkFlow from './components/WorkFlow.jsx'
import LivePlayers from './components/LivePlayers.jsx'
import About from './components/About.jsx'
import './App.css'
import Testimonial from './components/Testimonial.jsx'
import Blog from './components/Blog.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'

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
