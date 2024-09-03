"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination,  } from 'swiper/modules';
import Image from 'next/image';


const ImageSlider = ({data}) => {
    return (
        <>
            <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
       
        modules={[Navigation, Pagination, ]}
        
      >
        {
            data.map(details => <SwiperSlide key={details.title}  className='space-y-6 pb-16'>
                <Image src={details.img} alt="" width={1200} height={600} className='w-full'/>
                <h3 className='text-2xl font-semibold'>{details.title}</h3>
            </SwiperSlide>)
        }
        
      </Swiper>
        </>
    );
};

export default ImageSlider;