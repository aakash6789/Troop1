


import React, { useRef, useEffect, useState } from 'react';
import circleImage from "../assets/images/[Linked] Ellipse 1.png";
import textImage from "../assets/images/Group 48.png";
import smallCircle from "../assets/images/Ellipse 2.png";

const MergeImages = () => {
  const canvasRef = useRef(null);
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

  useEffect(() => {
    const loadImageAsync = (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (err) => reject(err);
        image.src = src;
      });
    };

    const drawImages = async () => {
      try {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const [circleImg, textImg, smallCircleImg] = await Promise.all([
          loadImageAsync(circleImage),
          loadImageAsync(textImage),
          loadImageAsync(smallCircle)
        ]);

        const newCanvasWidth = 652;
        const newCanvasHeight = 652;

        canvas.width = newCanvasWidth;
        canvas.height = newCanvasHeight;

        // Draw circle image
        const circleX = (newCanvasWidth - circleImg.width) / 2;
        const circleY = (newCanvasHeight - circleImg.height) / 2;
        ctx.drawImage(circleImg, circleX, circleY);

        // Draw small circle image
        const smallCircleX = (newCanvasWidth - 22) / 2;
        const smallCircleY = (newCanvasHeight - 22) / 2;
        ctx.drawImage(smallCircleImg, smallCircleX, smallCircleY, 22, 22);

        // Define text properties
        const text = "  BY PLAYING LEARN ABOUT INVESTMENT ";
        const radius = 130.25;
        const centerX = newCanvasWidth / 2;
        const centerY = newCanvasHeight / 2;
        const rightMargin = -5;
        // Initial angle for rotation
        let angle = 0;

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas on each frame

          // Redraw circle image and small circle image
          ctx.drawImage(circleImg, circleX, circleY);
          ctx.drawImage(smallCircleImg, smallCircleX, smallCircleY, 22, 22);

          // Draw curved text with rotation animation
          ctx.font = "50px Futura Md BT";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";

          for (let i = 0; i < text.length; i++) {
            const textAngle = (i / (text.length - 1)) * Math.PI * 2;
            const x = centerX + Math.cos(textAngle + angle) * radius + rightMargin;
            const yOffset = 9.5;
            const y = centerY + Math.sin(textAngle + angle) * radius - yOffset;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(textAngle + angle + Math.PI / 2);
            ctx.fillText(text[i], 0, 0);
            ctx.restore();
          }

          angle += 0.03; // Increment rotation angle for animation speed

          requestAnimationFrame(animate); // Loop the animation
        };

        animate(); // Start the animation loop
      } catch (error) {
        console.error('Error loading or drawing images:', error);
      }
    };

    drawImages();
  }, [windowWidth]);

  const canvasStyle = {
    border: '2px ',
    borderRadius: '8px',
    display: 'block',
    height: "120px",
    width: "120px",
    marginLeft: '100px',
    
    
    
  };

  // Define your media query styles here
  const mediaQueries = {
    smallScreen: {
      flexDirection: 'column',
      alignItems: "center",
      marginTop:"-388px",
      marginLeft:"22px",
      display:"None"
      // Add styles for small screens here
    },
    largeScreen: {
      flexDirection: 'row',
      marginTop:"-140px"
      // Add styles for larger screens here
    },
  };

  // Apply styles based on screen width
  const currentStyles = windowWidth < 768 ? mediaQueries.smallScreen : mediaQueries.largeScreen;

  return (
    <div style={{ textAlign: 'center', ...currentStyles }} className=''>
      <canvas ref={canvasRef} style={canvasStyle} />
    </div>
  );
};

export default MergeImages;

// import React, { useRef, useEffect, useState } from 'react';
// import circleImage from "../Assets/[Linked] Ellipse 1.png";
// import textImage from "../Assets/Group 48.png";
// import smallCircle from "../Assets/Ellipse 2.png";

// const MergeImages = () => {
//   const canvasRef = useRef(null);
//   const [canvasDimensions, setCanvasDimensions] = useState({ width: 200, height: 200 });

//   useEffect(() => {
//     const loadImageAsync = (src) => {
//       return new Promise((resolve, reject) => {
//         const image = new Image();
//         image.onload = () => resolve(image);
//         image.onerror = (err) => reject(err);
//         image.src = src;
//       });
//     };

//     const handleResize = () => {
//       const { clientWidth, clientHeight } = canvasRef.current.parentElement;
//       const newSize = Math.min(clientWidth, clientHeight);
//       setCanvasDimensions({ width: newSize, height: newSize });
//     };

//     const drawImages = async () => {
//       try {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');

//         const [circleImg, textImg, smallCircleImg] = await Promise.all([
//           loadImageAsync(circleImage),
//           loadImageAsync(textImage),
//           loadImageAsync(smallCircle)
//         ]);

//         canvas.width = canvasDimensions.width;
//         canvas.height = canvasDimensions.height;

//         const circleX = (canvasDimensions.width - circleImg.width) / 2;
//         const circleY = (canvasDimensions.height - circleImg.height) / 2;
//         ctx.drawImage(circleImg, circleX, circleY);

//         const smallCircleX = (canvasDimensions.width - 22) / 2;
//         const smallCircleY = (canvasDimensions.height - 22) / 2;
//         ctx.drawImage(smallCircleImg, smallCircleX, smallCircleY, 22, 22);

//         const text = "PLAYING LEARN ABOUT INVESTMENT BY";
//         const radius = 130.25;
//         const centerX = canvasDimensions.width / 2;
//         const centerY = canvasDimensions.height / 2;

//         let angle = 0;

//         const animate = () => {
//           ctx.clearRect(0, 0, canvas.width, canvas.height);

//           ctx.drawImage(circleImg, circleX, circleY);
//           ctx.drawImage(smallCircleImg, smallCircleX, smallCircleY, 22, 22);

//           ctx.font = "50px Futura Md BT";
//           ctx.fillStyle = "white";
//           ctx.textAlign = "center";

//           for (let i = 0; i < text.length; i++) {
//             const textAngle = (i / (text.length - 1)) * Math.PI * 2;
//             const x = centerX + Math.cos(textAngle + angle) * radius;
//             const y = centerY + Math.sin(textAngle + angle) * radius;

//             ctx.save();
//             ctx.translate(x, y);
//             ctx.rotate(textAngle + angle + Math.PI / 2);
//             ctx.fillText(text[i], 0, 0);
//             ctx.restore();
//           }

//           angle += 0.03;

//           requestAnimationFrame(animate);
//         };

//         animate();
//       } catch (error) {
//         console.error('Error loading or drawing images:', error);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     drawImages();

//     return () => window.removeEventListener('resize', handleResize);
//   }, [canvasDimensions]);

//   const canvasStyle = {
//     border: '2px',
//     borderRadius: '8px',
//     display: 'block',
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ width: 'fit-content', margin: 'auto' }}>
//         <canvas ref={canvasRef} style={{ ...canvasStyle, width: canvasDimensions.width, height: canvasDimensions.height }} />
//       </div>
//     </div>
//   );
// };

// export default MergeImages;





