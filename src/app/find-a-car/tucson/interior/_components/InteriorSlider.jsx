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

const InteriorSlider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
                <div className='grid grid-cols-2 gap-6'>
                            <div className='space-y-4'>
                            <Image src="/images/cardetails/tucson/interior/Hyundai-tucson-suv-interior-small-image-800x530-1.jpg" alt="Hyundai-bd-tucson-suv-interior-small-image3" width={1200} height={600}/>
                            <h2 className='text-2xl font-semibold'>Front ventilated & heated seats</h2>
                            </div>
                            <div className='space-y-4'>
                            <Image src="/images/cardetails/tucson/interior/Hyundai-tucson-suv-interior-small-image-800x530-2.jpg" alt="Hyundai-bd-tucson-suv-interior-small-image" width={1200} height={600}/>
                            <h2 className='text-2xl font-semibold'>10-way power adjustable driver seat with lumbar support & memory function</h2>
                            </div>
                </div>
        </SwiperSlide>




        <SwiperSlide >
                <div className='grid md:grid-cols-2 gap-6'>
                            <div className='space-y-4'>
                            <Image src="/images/cardetails/tucson/interior/tucson-suv-interior-small-image3.jpg" alt="Hyundai-bd-tucson-suv-interior-small-image3" width={1200} height={600}/>
                            <h2 className='text-2xl font-semibold'>Multi air mode</h2>
                            </div>
                            <div className='space-y-4'>
                            <Image src="/images/cardetails/tucson/interior/Hyundai-tucson-suv-interior-small-image-800x530-4.jpg" alt="Hyundai-bd-tucson-suv-interior-small-image" width={1200} height={600}/>
                            <h2 className='text-2xl font-semibold'>26.03 cm (10.25”) Floating type digital cluster</h2>
                            </div>
                </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default InteriorSlider;