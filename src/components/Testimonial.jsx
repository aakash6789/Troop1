// import React, { useState,useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { AiFillStar } from "react-icons/ai";
// import ProfilePic1 from "../Assets/Image09.png";
// import ProfilePic2 from "../Assets/Image-10.png";
// import ProfilePic3 from "../Assets/Image-209.png";
// import { IoChevronForwardSharp } from "react-icons/io5";

// const data=[
  
//   {
//     id: 3,
//     imageUrl: ProfilePic3,
//     category: "Category ",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     backgroundColor: 'yellow',
//   },
//   {
//     id: 4,
//     imageUrl:ProfilePic2,
//     category: "Category ",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     backgroundColor: 'yellow',
//   },
//   {
//     id: 5,
//     imageUrl: ProfilePic1,
//     category: "Category ",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     backgroundColor: 'yellow',
//   },
//   {
//     id: 6,
//     imageUrl: ProfilePic3,
//     category: "Category ",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     backgroundColor: 'yellow',
//   },

  
// ];
//   // Repeat the above object structure for the remaining 5 items


 

//   const CarouselSlider = () => {
//     const [expandedItems, setExpandedItems] = useState(Array(data.length).fill(false));
//     const [globalExpanded, setGlobalExpanded] = useState(false);
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
//     const toggleGlobalExpand = () => {
//       setGlobalExpanded(!globalExpanded);
//     };
  
//     const toggleExpand = (index) => {
//       const updatedItems = [...expandedItems];
//       updatedItems[index] = !updatedItems[index];
//       setExpandedItems(updatedItems);
//     };
  
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: windowWidth < 768 ? 1 : 3,
//       slidesToScroll: 1, // Change this to 1 for better spacing
//       swipe: true,
//       swipeToSlide: true,
//       draggable: true,
//       rtl: true,
//       prevArrow: null,
//       nextArrow: null,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
  
//     const CustomDot = ({ onClick, active }) => (
//       <button
//         style={{
//           width: '10px',
//           height: '10px',
//           margin: '0 5px',
//           backgroundColor: active ? '#4CAF50' : '#ccc',
//           borderRadius: '50%',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//         onClick={onClick}
//       ></button>
//     );
  
//     const customDotStyles = {
//       position: 'absolute',
//       top: '250px',
//       left: '96.5%',
//       alignItems: 'center',
//       transform: 'translateX(-50%)',
//       display: 'none',
//       alignItems: 'center',
//     };
  
//     const mediaQueries = {
//       smallScreen: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'left', // Center the text on small screens
//         justifyContent: 'space-between',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         width: '80%',
//       },
//       largeScreen: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         liveMegaButtons: {
//           marginRight: '390px',
//         },
//       },
//       columnFlex: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       },
//     };
  
//     const currentStyles = windowWidth < 768 ? { ...mediaQueries.smallScreen } : mediaQueries.largeScreen;
  
//     return (
//       <div style={{ ...currentStyles }} id="blog">
//         <h1 style={{ textAlign: 'center', margin: '20px', fontSize: '16px', color: 'white', fontFamily: 'Futura Bk BT' }}>Blog </h1>
//         <h1 style={{ textAlign: windowWidth < 768 ? 'left' : 'center', margin: '20px', fontSize: ' 48px', color: 'white', marginLeft: windowWidth < 768 ? '40px' : '', fontFamily: 'Futura Bk BT' }}>Headline introducing <span style={{ color: '#ECC960' }}>resources</span> </h1>
//         <h1 style={{ textAlign: windowWidth < 768 ? 'left' : 'center', margin: '20px', fontSize: '20px', color: 'white', wordSpacing: '3px', marginLeft: windowWidth < 768 ? '40px' : '', fontFamily: 'Futura Bk BT' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros <br />elementum tristique.</h1>
//         <Slider {...settings} appendDots={(dots) => <div style={customDotStyles}>{dots}</div>} customPaging={(i) => <CustomDot key={i} />}>
//           {data.map((item, index) => (
//             <div key={index} style={{ textAlign: 'center', margin: '0 auto', padding: '20px', marginTop: '20px', opacity: 1, width: '300px' }}>
//               <div style={{ marginTop: '20px', height: '550px', padding: '10px', gap: '20px' }}>
//                 <div style={{ width: windowWidth < 768 ? '1100' : '1400px', height: '300px', objectFit: 'cover', marginTop: '40px', margin: '0 auto' }}>
//                   <img
//                     src={item.imageUrl}
//                     alt={`slide-${index}`}
                  
//                   />
//                 </div>
//                 <div style={{ marginTop: '10px', width: windowWidth < 768 ? '70%' : '60%' }}>
//                   <button style={{ margin: '10px 0', fontSize: windowWidth < 768 ? '10px' : '16px', color: 'black', backgroundColor: '#F3E7C3', padding: '2px', fontFamily: 'Futura Bk BT' }}>{item.category}</button> <span style={{ color: 'white', marginLeft: '10px', wordSpacing: '3px' }}>{item.readTime}</span>
//                   <p style={{ margin: '5px 0', fontSize: '14px', color: 'white' }}></p>
//                   <h2 style={{ margin: '10px 0', fontSize: windowWidth < 768 ? '20px' : '30px', color: 'white', fontFamily: 'Futura Bk BT' }}>{item.title}</h2>
//                   <p style={{ marginBottom: expandedItems[index] || globalExpanded ? '20px' : '5px', fontSize: windowWidth < 768 ? '10px' : '18px', color: 'white', wordSpacing: '3px', fontFamily: 'Futura Bk BT' }}>
//                     {expandedItems[index] || globalExpanded ? item.content : item.content.slice(0, 100) + '...'}
//                   </p>
  
//                   {item.content.length > 100 && (
//                     <button
//                       onClick={() => toggleExpand(index)}
//                       style={{
//                         padding: '5px',
//                         fontSize: '22px',
//                         backgroundColor: 'transparent',
//                         color: 'white',
//                         border: 'none',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       {expandedItems[index] ? 'Read Less' : 'Read More'}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//         <div style={{ textAlign: 'center', marginTop: windowWidth < 768 ? '-550px' : '-600px', marginLeft: windowWidth < 768 ? '15px' : '-30px' }}>
//           <button
//             onClick={toggleGlobalExpand}
//             style={{
//               borderRadius: '100px',
//               color: '#ECC960',
//               fontFamily: 'Futura Bk BT',
//               letterSpacing: '-0.3px',
//               border: '1px solid #ECC960',
//               backgroundColor: 'transparent',
//               padding: '8px 20px',
//               fontSize: windowWidth < 768 ? '9px' : '15px',
//               width: windowWidth < 768 ? '130px' : '180px',
//               height: windowWidth < 768 ? '36px' : '52px',
//             }}
//           >
//             {globalExpanded ? 'Show Less' : ' View More'}
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default CarouselSlider;
  
  




