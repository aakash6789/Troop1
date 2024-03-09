import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import WorkFlow from './components/WorkFlow'
import LivePlayers from './components/LivePlayers'
import About from './components/About'
import './App.css'

function App() {


  return (
    <div className='font-BkBook'>
    <Navbar/>
     <Banner/> 
     <About/>
     <WorkFlow/>
     {/* <LivePlayers/> */}
    </div>
  )
}

export default App
