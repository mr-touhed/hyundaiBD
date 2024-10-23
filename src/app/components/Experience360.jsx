"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Experience360 = ({ images }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [showRotatedImage, setShowRotatedImage] = useState(false);
  const imageCount = images.length;
  const containerRef = useRef(null);

  const handleStart = () => {
    if (!loading) {
      setProgress(0);
      setLoading(true);
    }
  };

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX) => {
    const { offsetWidth } = containerRef.current;
    const moveX = clientX - startX;
    setCurrentX(currentX + moveX);
    setStartX(clientX);

    const newIndex = Math.floor(((currentX + moveX) / offsetWidth) * imageCount);
    setCurrentIndex(Math.max(0, Math.min(imageCount - 1, newIndex)));
  };

  const handleMouseDown = (event) => {
    if (event.detail === 1) {
      handleDragStart(event.clientX);
      event.preventDefault();
    }
  };

  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      handleDragStart(event.touches[0].clientX);
      event.preventDefault();
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      handleDragMove(event.clientX);
    }
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      handleDragMove(event.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, currentX]);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            setShowRotatedImage(true);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className='w-full'>
      <div className='space-y-6'> 
        <h2 className='text-3xl text-center'>360° Experience</h2>
        <p className='text-center'>Click and turn vehicle image to the left or right</p>
      </div>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          margin: "0 auto",
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        className='container relative w-full h-auto overflow-hidden'
      >
        {!showRotatedImage ? (
          <div className='relative w-full md:mt-12'>
            <Image src={images[0]} alt="" width={1300} height={700} className='w-full' />
            <button onClick={handleStart} className='absolute z-20 top-[45%] md:left-[46%] left-[42%] md:w-[100px] w-[50px] h-[50px] md:h-[100px] rounded-full bg-[#00000065]'>
              {loading ? <span className='text-[white]'>{progress}%</span> : <Image src={`/images/btn_start.png`} alt="" width={100} height={100} />}
            </button>
          </div>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`360 view ${currentIndex}`}
            width={1200}
            height={700}
            style={{
              transform: 'rotate(360deg)',
            }}
            className='md:w-[90%] w-full h-auto object-contain mx-auto'
          />
        )}
      </div>
    </div>
  );
};

export default Experience360;




