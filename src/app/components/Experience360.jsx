"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Experience360 = ({ images }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [showRotatedImage, setShowRotatedImage] = useState(false); // New state to control rotated image
  const imageCount = images.length;
  const containerRef = useRef(null);

  const handleStart = () => {
    if (!loading) {
      setProgress(0);
      setLoading(true);
    }
  };

  const handleMouseDown = (event) => {
    if (event.detail === 1) { // Check for single click
      setIsDragging(true);
      setStartX(event.clientX);
      event.preventDefault(); // Prevent default drag behavior
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const { offsetWidth } = containerRef.current;
      const moveX = event.clientX - startX;
      setCurrentX(currentX + moveX);
      setStartX(event.clientX);

      const newIndex = Math.floor(((currentX + moveX) / offsetWidth) * imageCount);
      setCurrentIndex(Math.max(0, Math.min(imageCount - 1, newIndex)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, currentX,]);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            setShowRotatedImage(true); // Show rotated image when loading completes
            return 100;
          }
          return prev + 1;
        });
      }, 50); // Adjust the interval time to control the speed of loading
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className=''>
          
         <div className='space-y-6'> 
         <h2 className='text-3xl text-center'>360° Experience</h2>
         <p className='text-center'>Click and turn vehicle image to the left or right</p>
         </div>
<div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{
       
        margin: "0 auto",
      
      
       
       
        cursor: isDragging ? 'grabbing' : 'grab', // Change cursor when dragging
      }}
      className='container relative w-full h-auto overflow-hidden'
    >
      {!showRotatedImage ? (
        <div className='relative w-full mt-12'>
          <Image src={images[0]} alt="" width={1300} height={700} className=' w-full' />
          <button onClick={handleStart} className='absolute z-20 top-[45%] md:left-[46%] left-[42%]  md:w-[100px] w-[50px] h-[50px] md:h-[100px] rounded-full bg-[#00000065]'>
            {loading ? <span className='text-[white]'>{progress}%</span> : <Image src={`/images/btn_start.png`} alt="" width={100} height={100} className='' />}
          </button>
        </div>
      ) : (
        <img
         
          src={images[currentIndex]}
          alt={`360 view ${currentIndex}`}
          style={{
            
            transform: 'rotate(360deg)', // Apply rotation if needed
          }}
          className='md:w-[90%] w-full h-auto object-contain mx-auto'
        />
      )}
    </div>
    </div>
  );
};

export default Experience360;
