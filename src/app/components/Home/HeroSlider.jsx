"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Button from '../Button';
import BuyButton from '../BuyButton';
import { useEffect, useRef, useState } from 'react';


const sliders = [
  {
    img:"/images/banner/img_1.jpg",
    link:"/find-a-car/creta/highlights"
  },
  {
    img:"/images/banner/img_2.jpg",
    link:"/find-a-car/palisade/highlights"
  },
  {
    img:"/images/banner/img_3.jpg",
    link:"/find-a-car/tucson/highlights"
  },
  {
    img:"/images/banner/img_4.jpg",
    link:"/find-a-car/tucson/highlights"
  },
  {
    img:"/images/banner/img_5.jpg",
    link:"/find-a-car/creta-grand/highlights"
  },
  {
    img:"/images/banner/img_6.png",
    link:"/find-a-car/creta/highlights"
  },
  {
    img:"/images/banner/img_7.jpg",
    link:"/find-a-car/creta/highlights"
  },
 
]

const HeroSlider = () => {

  const [autoplay, setAutoplay] = useState(true);
 
  const swiperRef = useRef(null);
  const changeValue = (e) =>{
    setInputValue(e.target.value)
  }
  const StopSlider = ()=>{
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.autoplay.stop();
    
  }
  
 

    return (
        <div className='md:pb-16 pt-4'>
            <Swiper
            ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          '--swiper-navigation-color': '#002C5F',
          '--swiper-pagination-color': '#002C5F',
        }}
      >
        {
          sliders.map((image,i) => <SwiperSlide key={i} className='mb-10 w-full h-[300px] '>
          
          <section className='relative w-[100%] h-[300px] md:h-full '>
                  <Image  alt="car" src={image.img} width={1500} height={100} className=' w-full h-full object-cover z-0'/>
                  <div className='absolute z-10 bg-[#00000000] w-full  md:bottom-20 bottom-4  left-16   '>
                              <div className='container text-[2vw] space-y-2'>
                              
                              <Button href="/">Booking</Button>
                              
                              {/* <Button href={image.link}>Know more</Button> */}
                              <BuyButton StopSlider={StopSlider}/>
                              </div>
                              
                  </div>
                  
          </section>
  </SwiperSlide>)
        }
        
       
        
      </Swiper>
        </div>
    );
};

export default HeroSlider;