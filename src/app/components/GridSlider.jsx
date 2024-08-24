"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function GridSlider({gridImageData}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        
       
       {
        gridImageData.map(data => <SwiperSlide key={data.name} className='mb-16'>
                <Image src={data.img} alt="" width={1200} height={600} />
        </SwiperSlide>)
       }
      </Swiper>
    </>
  );
}




