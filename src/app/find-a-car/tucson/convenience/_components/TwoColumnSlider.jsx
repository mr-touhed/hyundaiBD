"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


const TwoColumnSlider = () => {
    return (
        <>
         <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
      >
        <SwiperSlide className='pb-16 '>
                    <div className='grid md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience-small-image-800x530-1.jpg" alt="Hyundai-tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>Wireless phone charger</h3>
                    </div>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience-small-image-800x530-2.jpg" alt="Hyundai-tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>Longest wheelbase in the segment: Superior legroom and kneeroom</h3>
                    </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className='pb-16 '>
        <div className='grid md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/tucson-suv-convenience-small-image3.jpg" alt="tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>Embedded voice commands</h3>
                    </div>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/tucson-suv-convenience-small-image4.jpg" alt="tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>26.03 cm (10.25&ldquo;) HD audio video navigation system</h3>
                    </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide className='pb-16 '>
        <div className='grid md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/tucson-suv-convenience-small-image5.jpg" alt="tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>10 Regional languages infotainment</h3>
                    </div>
                    <div className='space-y-3'>
                        <Image src="/images/cardetails/tucson/convenience/tucson-suv-convenience-small-image6.jpg" alt="tucson-suv-convenience" width={1200} height={600} className=''/>
                        <h3 className='text-2xl font-semibold'>Ambient sounds of nature</h3>
                    </div>
                    </div>
        </SwiperSlide>
       
      </Swiper>   
        </>
    );
};

export default TwoColumnSlider;