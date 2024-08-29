"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Button from '../Button';


const images = [
  "/images/showcase/3.jpg",
  "/images/showcase/2.jpg",
    "/images/showcase/1.jpg",
]
const ShowCase = () => {
    return (
        <div className='mt-16'>
        <Swiper
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{
          '--swiper-navigation-color': '#002C5F',
          '--swiper-pagination-color': '#002C5F',
        }}
      >
        {
          images.map(img => <SwiperSlide key={img} className=''><Image src={img} alt="img" width={1200} height={800} className='w-full max-h-[70vh] object-cover object-top'/> </SwiperSlide>)  
        }


      </Swiper>
        <div className='container flex justify-center'>
            <Button href="/connect-to-service/book-a-service" className='mt-6 '>Know More</Button>
        </div>

      </div>
    );
};

export default ShowCase;