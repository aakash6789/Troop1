import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import WorkFlow from './components/WorkFlow'

import About from './components/About'
import './App.css'

function App() {


  return (
    <div className='font-BkBook'>
    <Navbar/>
     <Banner/> 
     <About/>
     <WorkFlow/>
    </div>
  )
}

export default App
