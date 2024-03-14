import React,{useState} from 'react'
import troopLogo from '../assets/images/TroopLogo1.png'
import '../index.css'
import '../App.css'
import { FaBars } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery.jsx"
const Navbar = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    
        <nav className='relative h-[15vh] bg-[#151518] pt-[5vh] text-[#FFFFFF] font-primary font-thin'>
       <img src={troopLogo} className='absolute left-[10%] w-[7%] max-sm:w-[18%] mt-2 '></img>
       {isAboveSmallScreens?
        <div className='flex  justify-between  w-2/4 max-sm:w-[60%] absolute left-[45%] right-[5%] max-sm:left-[40%]  md:text-[0.85em] sm:text-[0.7em] max-sm:text-[1vh] '>
        <span className='font-thin py-4'>Home</span>
        <span className='font-thin py-4'>Why us</span>
        <span className='font-thin py-4'>How to play?</span>
        <span className='font-thin py-4'>Contests</span>
        <span className='font-thin py-4'>Blogs</span>
        
        <button className='text-[#121212] bg-[#ECC960] rounded-full px-[5%] min-sm:px-[3%] py-4 font-semibold max-sm:w-[25%] max-sm:py-1 max-sm:rounded-2xl max-sm:px-0 max-sm:text-[0.8vh]'>Download Now</button>

        </div>  : <button className='absolute right-[7%] mt-[3%]' onClick={()=>setIsMenuToggled(!isMenuToggled)}><FaBars style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }}/></button> }

        {!isAboveSmallScreens && isMenuToggled && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0, // Align to the left side
            width: '100%',
            // background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align items to the left
            marginTop: "95px",
            paddingLeft: '20px', // Left padding for menu items
            paddingTop: '60px', // Adjust the top padding as needed
            gap: "25px",
            zIndex: 1000, // Ensure the menu is on top of other elements
          }} className='bg-[#000000] font-primary font-bold'>
            {/* Menu items */}
            <a href="/" style={{  marginLeft: '10px' }}>Home</a>
            <a href="#whyus" style={{  marginLeft: '10px' }}>Why<span style={{ marginLeft: "2px" }}>Us</span></a>
            <a href="#how-to-play" style={{  marginLeft: '10px' }}>How<span style={{ marginLeft: "2px" }}>To</span>Play?</a>
            <a href="#Contests" style={{ marginLeft: '10px' }}>Contacts</a>
            <a href="#blog" style={{ marginLeft: '10px' }}>Blog</a>
            {/* <a  style={{ textDecoration: 'none', marginLeft: '10px' }}>
              <button style={{ backgroundColor: '#ECC960', color: 'black', padding: '8px 16px', border: 'none', borderRadius: '5rem', fontSize: '13px', fontWeight: '100', cursor: 'pointer', textDecoration: 'none', display: 'inline-block', marginTop: '10px', fontFamily: "Futura Bk BT" }}>Download Now</button>
            </a> */}
              <button className='text-[#121212] bg-[#ECC960] rounded-full px-[5%] min-sm:px-[3%] py-4 mb-[5%] font-semibold max-sm:w-[15%] max-sm:py-1 max-sm:rounded-xl max-sm:px-0 max-sm:text-[0.8vh]'>Download Now</button>
          </div>
        )}
      </nav>
      
  )
}

export default Navbar
