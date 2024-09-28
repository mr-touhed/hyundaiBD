"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Pagination } from 'swiper/modules';

import Video from '@/app/components/Video';


const CarrerWhoWeAre = () => {
    return (
        <section className='container space-y-8'>
                <h2 className='text-3xl font-semibold '>Who we are</h2>
               
                

                    <section>
                    <Swiper
        
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        navigation={{
            clickable: true,
          }}
      >
        <SwiperSlide>
                
                    <Video thumbnail="/images/Pages/Career/thumbnail-first-pc.jpg" videoId="MpM9FjFCkmY"/>
        </SwiperSlide>
        
        <SwiperSlide>
                
                <Video thumbnail="/images/Pages/Career/thumbnail-second-pc.jpg" videoId="HRSoT0AOzxY"/>
        </SwiperSlide>
      </Swiper>
                    </section>
            </section>
    );
};

export default CarrerWhoWeAre;

