import React,{useState,useEffect} from 'react'
import money from '../assets/images/money.png'
import world from '../assets/images/world.png'
import stocks from '../assets/images/stocks.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from "react-icons/ai";
import { IoChevronForwardSharp } from "react-icons/io5";
import useMediaQuery from '../hooks/useMediaQuery.jsx'
const Blog = () => {

  const data=[
  
    {
      id: 3,
      imageUrl: money,
      category: "Category ",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.",
      backgroundColor: 'yellow',
    },
    {
      id: 4,
      imageUrl:world,
      category: "Category ",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.",
      backgroundColor: 'yellow',
    },
    {
      id: 5,
      imageUrl: stocks,
      category: "Category ",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ea modi, impedit nisi officiis error autem.",
      backgroundColor: 'yellow',
    },  
    
  ];
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [expandedItems, setExpandedItems] = useState(Array(data.length).fill(false));
    const [globalExpanded, setGlobalExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const toggleGlobalExpand = () => {
      setGlobalExpanded(!globalExpanded);
    };
  
    const toggleExpand = (index) => {
      const updatedItems = [...expandedItems];
      updatedItems[index] = !updatedItems[index];
      setExpandedItems(updatedItems);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: windowWidth < 768 ? 1 : 3,
      slidesToScroll: 1, // Change this to 1 for better spacing
      swipe: true,
      swipeToSlide: true,
      draggable: true,
      rtl: true,
      prevArrow: null,
      nextArrow: null,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const CustomDot = ({ onClick, active }) => (
      <button
        style={{
          width: '10px',
          height: '10px',
          margin: '0 5px',
          backgroundColor: active ? '#4CAF50' : '#ccc',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={onClick}
      ></button>
    );
  
    const customDotStyles = {
      position: 'absolute',
      top: '250px',
      left: '96.5%',
      alignItems: 'center',
      transform: 'translateX(-50%)',
      display: 'none',
      alignItems: 'center',
    };
  
    const mediaQueries = {
      smallScreen: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left', // Center the text on small screens
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
      },
      largeScreen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        liveMegaButtons: {
          marginRight: '390px',
        },
      },
      columnFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    };
  
    const currentStyles = windowWidth < 768 ? { ...mediaQueries.smallScreen } : mediaQueries.largeScreen;
  return (
    <div className='bg-[#151518] w-full absolute font-primary text-white xl:top-[370vh] lg:top-[362vh]  md:mt-[340vh] max-md:mt-[270vh] max-sm:mt-[390vh]'>
        <p className='text-center text-[2vh] font-bold max-sm:text-[1.5vh] '>Blog</p>
        <p className='text-center font-extrabold lg:text-[6vh] md:text-[5vh] sm:text-[4vh] max-sm:text-[3vh]'>Headline introducing <span className='text-[#ECC960]'>resources</span></p>
        {/* <p className='text-center lg:text-[2vh] mt-[2%] md:text-[2vh] sm:text-[1.5vh] max-sm:text-[1vh]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id inventore officia.</p> */}
        <p className='font-primary mt-6 text-[1.3vh] lg:text-[2.5vh] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id inventore officia.</p>
        {isAboveSmallScreens? <div className='flex justify-between  px-8 mt-[5%] lg:text-[2.5vh] md:text-[2vh] sm:text-[1.5vh] max-sm:flex-col max-sm:text-[1vh]'>
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
        </div>: <div style={{ ...currentStyles }} id="blog">
        <Slider {...settings} appendDots={(dots) => <div style={customDotStyles}>{dots}</div>} customPaging={(i) => <CustomDot key={i} />}>
          {data.map((item, index) => (
            <div key={index} style={{ textAlign: 'center', margin: '0 auto', padding: '20px', marginTop: '20px', opacity: 1, width: '300px' }}>
              <div style={{ marginTop: '20px', height: '550px', padding: '10px', gap: '20px' }}>
                <div style={{ width: windowWidth < 768 ? '1000' : '1000px', height: '300px', objectFit: 'cover', marginTop: '40px', margin: '' }}>
                  <img
                    src={item.imageUrl}
                    alt={`slide-${index}`}
                    // className='w-[100%]'
                  />
                </div>
                 <button className='p-2 text-black bg-[#F3E7C3] ml-[5%] mt-[1%] max-sm:w-[40%] max-sm:text-[2vh] max-sm:px-0 '>{item.category}</button>
            <span className='font-medium ml-[4%] max-lg:text-[0.8em] lg:text-[1.5vh] xl:text-[2vh] max-sm:text-[1.5vh]'>{item.readTime}</span>
            <h1 className='ml-[5%] mt-[5%] font-bold max-sm:text-[3vh] max-lg:text-[1.2vh] lg:text-[1.5vh] xl:text-[3.5vh]'>{item.title}</h1>
            <p className='mt-[3%] ml-[5%] max-sm:text-[2vh]'>{item.content}</p>
            <button className='mt-[5%] ml-[5%] mb-[5%] max-sm:text-[2.5vh]'>Read more</button>
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
        }<div className='w-full text-center mt-[5%] max-sm:mt-[10%]'>
            <button className='rounded-3xl border-[#ECC960] text-[#ECC960] border-[1px] px-10 py-2 xl:text-[2.5vh] max-sm:text-[1.5vh] mb-[5%]'>View more</button>
            </div>

    </div>
  )
}

export default Blog

