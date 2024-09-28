"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation, } from 'swiper/modules';
import Image from 'next/image';

const CareerHeader = () => {
    return (
        <section>
            <Swiper navigation={true} modules={[Navigation, ]} className="mySwiper">
        <SwiperSlide>
                <Image src="/images/Pages/Career/inner-kv-one-pc.jpg" alt="hyundai bd Official" width={1200} height={600} className='w-full h-auto'/>
        </SwiperSlide>
        <SwiperSlide>
                <Image src="/images/Pages/Career/inner-kv-two-pc.jpg" alt="hyundai bd Official" width={1200} height={600} className='w-full h-auto'/>
        </SwiperSlide>
        
                    </Swiper>
            </section>
    );
};

export default CareerHeader;