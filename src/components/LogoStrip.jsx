


import React, { useEffect, useState } from 'react'; 
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/Layer_1-1100.png";
import img2 from "../assets/images/Layer_1-2100.png";
import img3 from "../assets/images/Layer_100.png";
import img4 from "../assets/images/logo-1100.png";
import img5 from "../assets/images/logo-2100.png";
import img6 from "../assets/images/Swiggy100.png";
import img7 from "../assets/images/Vordergrund1100.png";
import img8 from "../assets/images/Zara New 20201100.png";
import img9 from "../assets/images/lacoste-logo100.png";
import img10 from "../assets/images/logo-31100.png";
import img11 from "../assets/images/Frame 1000001996100.png"
import img12 from "../assets/images/samsung-logo-nnanhj100.png"
import img13 from "../assets/images/logo-v.png"
import Circle from "../assets/images/Circle1.png"

const YourComponent = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 3, // Updated for large screens
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 6,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Adjust the number of slides for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6, // Display a single slide on smaller screens
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6, // Display a single slide on even smaller screens
          centerMode: false, // Disable center mode for small screens
        },
      },
    ]
  };

  useEffect(() => {
    const slideItems = document.querySelectorAll('.slick-slide');

    const animateSlider = () => {
      slideItems.forEach((item, index) => {
        const delay = index * 200;

        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)'; // Initial position outside the view
        item.style.transition = `opacity 0.5s ease-in-out ${delay}ms, transform 0.5s ease-in-out ${delay}ms`;

        setTimeout(() => {
          item.style.opacity = 1;
          item.style.transform = 'translateX(0)'; // Shifting to left-to-right animation
        }, delay);
      });
    };
    const slider = document.querySelector('.slick-list');

    if (slider) {
      slider.addEventListener('transitionend', () => {
        animateSlider();
      });
    }
    animateSlider();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mediaQueries = {
    smallScreen: {
      textAlign: 'center',
      color: 'white',
      wordSpacing: '5px',
      fontFamily: 'Futura Bk BT',
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '125%',
      margin: 'auto',
      wordSpacing: '3px',
      // width:"10%"
    },
    largeScreen:{
      textAlign: 'center',
      color: 'white',
      wordSpacing: '3px',
      // Add styles for larger screens here
    },
  };
  const currentTextStyles = windowWidth < 768 ? { ...mediaQueries.smallScreen, marginRight: '0' } : mediaQueries.largeScreen;
// const images=[img1, img4 ,  img2,img5, img3, img6, img9, img7, img8, img10,];
const images=[ img2, img11,img1,img3,img6,img8,img11,img7,img12, img9,img10,img5,img4,img13 ];
return(

    <div className=' pb-6 relative ' style={{ backgroundColor: '#1B1B1D', padding: '18px 0px', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%', marginTop: '20px' }} id='home1'>
      {/* <Circle/> */}
      <img src={Circle} className='w-[8%] absolute lg:bottom-[105%] ml-[8%] md:bottom-[110%] md:w-[8%] sm:w-[10%] sm:bottom-[115%] max-sm:w-[12%] max-sm:bottom-[98%]'></img>
      <div style={{ marginBottom: '40px', marginRight: windowWidth < 768 ? '0' : '200px' }} className='relative'>
        {/* <h4 className='text-4xl text-center my-7 font-bold color-white' style={currentTextStyles}>
          Trusted by India’s best companies
        </h4> */}
         <p className='text-white text-center ml-[20%] max-sm:ml-[10%] text-[1em]'>Trusted by the India's best companies</p>
      </div>
      <Marquee speed={60} delay={0}>
        <div className='image_wrapper flex mb-6'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: 'auto', height: '50px', margin: '0 24px' }} // Adjust margin here for spacing
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default YourComponent;

