


import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import root20 from '../assets/images/Ellipse 1791 (1).png';
import root21 from '../assets/images/Ellipse 1791 (2).png';
import root22 from '../assets/images/Ellipse 1791.png';
import root23 from '../assets/images/Ellipse 1791 (1).png';
import root24 from '../assets/images/Ellipse 1791 (2).png';
import root25 from '../assets/images/Name.png';

// function App() {

    
    const Testimonial = () => {
      
    
    
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

  const settings = {
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    slidesToShow: windowWidth < 768 ? 1 : 3,
  };

  const currentStyles = windowWidth < 768 ? { slidesToShow: 1 } : { slidesToShow: 3 };


  const data = [
    {
      Image1: root25,
      name: `Jacob CV`,
      img: root20,
      rating: 5,
      review:`Troop, yaar, you're something else! I've been trading stocks for ages, but this app just adds a whole new level of excitement to it. It's like playing a game where every move matters. And the best part? The withdrawal process is super quick!`,
    },
    {
      Image1: root25,
      name: 'Neha K',
      img: root21,
      rating: 5,
      review: `Dude, I've been hooked to Troop ever since it launched! It's like gaming and investing combined in one epic package. The thrill of competing with others and making trades—it's addictive, man! Troop, you're definitely onto something here!`,
    },
    {
      Image1: root25,
      name: `Krish R.`,
      img: root22,
      rating: 5,
      review:`Troop, bhai, you are just awesome!! I've been playing this for a month now, and let me tell you, it's been super crazy. The whole gaming vibe they've got going on is too nice! Hats off to the Troop team yaar.`,
    },
    {
      Image1: root25,
      name: 'Zeyan T',
      img: root23,
      rating: 5,
      review: `Troop, my man, you're the real deal! Been playing on this fantasy stock trading app for a month now, and let me tell you, it's been one heck of a ride! It's like gaming and investing had a baby, and that baby is Troop!`,
    },
    {
      Image1: root25,
      name: 'Madhuri F.',
      img: root24,
      rating: 5,
      review: `Competing with friends is really fun. Withdrawal process is also really fast. I was playing it for the 1st time and it was a really great experience. Love playing on Troop!`,
    },
    {
      Image1: root25,
      name: 'Aruna L',
      img: root24,
      rating: 5,
      review: `First time I tried it, I was blown away. Troop is awesome! Money comes out quick too.`,
    }
  ];
  return (
    <div className='w-full absolute font-primary text-white xl:top-[380vh] lg:top-[332vh]  md:mt-[235vh] max-md:mt-[195vh] max-sm:mt-[300vh]'>
    <div style={{width:"100%",marginTop: windowWidth < 768 ? '0':"20px"}}>
    <div style={{ textAlign: 'center', marginTop: '40px', wordSpacing: '4px', fontFamily: ' Futura Hv BT', fontStyle: 'normal', fontWeight: '400', lineHeight: '125%', currentStyles,marginRight: windowWidth < 768 ? '0':"100px" }}>
      <h4>
        {' '}
        <span className='font-primary text-center ml-[10%] font-extrabold  lg:text-[8vh] text-[5vh]' style={{ color: '#FBFFFF' }}>User</span> <span className='font-primary text-center font-extrabold lg:text-[8vh] text-[5vh]' style={{ color: '#ECC960' }}>Testimonials</span>
      </h4>
    </div>
    <div style={{ textAlign: 'center', marginTop: '10px', wordSpacing: '4px', color: '#FBFFFF', fontFamily: ' Futura Hv BT', fontStyle: 'normal', fontWeight: '400', lineHeight: '125%',marginRight: windowWidth < 768 ? '0':"100px" }}>
      <p className='font-primary ml-[10%] mt-6 text-[1.5vh] lg:text-[2.5vh]'>Hear what our users have to say about us</p>
    </div>
      {/* Other JSX components */}
      <div className="mt-[8%]" style={{ marginLeft: '10px', maxWidth: '100%', height: 'auto' }}>
        <Marquee {...settings} slidesToShow={currentStyles.slidesToShow}>
        {data.map((d, index)=>(
            <div key={d.name + index} style={{ maxWidth: windowWidth < 768 ? '600px':'600px', marginRight: windowWidth < 768 ? '-150.5px':'60px',height:""}}>
            <div className='' style={{ height: 'auto', color: 'black' }}>
                <div className='px-8 py-2 rounded-[15%]' style={{ width: windowWidth < 768 ? '50%':'80%', backgroundColor: '#171935', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#FBFFFF', margin: '0 auto' }}>
                  
                  <div className='' style={{ margin: '0 auto', width:windowWidth < 768 ? '75px': '150px',marginLeft:windowWidth < 768 ? '100px':'170px' }}>
                    <img className='w-[20%] mt-6 max-sm:mt-8' src={d.Image1} alt="user" style={{  marginLeft: '',marginTop:windowWidth < 768 ? '5px':''  }} />
                  </div>
                  
                  <div className='w-[100%] h-[18vh]' style={{ fontFamily: 'Futura Bk BT', fontSize: windowWidth < 768 ? '12px':'16px', marginTop: windowWidth < 768 ? '3px':'18px',wordSpacing:windowWidth < 768 ? '3px':'0'  }}>
                    <p style={{ color: 'white', textAlign: 'left' }}>{d.review}</p>
                  </div>
                </div>
                <div className='rounded-full' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem', color: 'white', marginTop: '20px' }}>
                  <img className='w-[10%]' src={d.img} alt={d.name} style={{ height:windowWidth < 768 ? '30.5px': '81px', width: windowWidth < 768 ? '30.5px':'81px', borderRadius: '50%', marginTop: windowWidth < 768 ? '-50px':'-75px', background: 'url(<path-to-image>), lightgray 50% / cover no-repeat' }} />
                  <p className='font-primary' style={{ color: 'white', textAlign: 'center', fontFamily: 'Futura Bk BT', fontSize: '17px' }}>{d.name}</p>
                  <div className='font-primary rounded-full' style={{ display: 'flex', alignItems: 'center' }}>
                    {[...Array(d.rating)].map((_, index) => (
                      <AiFillStar key={index} style={{ color: '#CCAB00', width: windowWidth < 768 ? '11px':'22.815px', height: windowWidth < 768 ? '11px':'22px', flexShrink: '0' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
    </div>
  );
}
export default Testimonial;