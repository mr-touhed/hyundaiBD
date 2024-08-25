"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
const TabSlider = () => {
    const [active,setActive] = useState(1);
    const FirstImage = [
        `/images/cardetails/pick-up/highlights/slider/one/h-100-pe2-extralong-wheel-base-super-cab-pc.jpg`,
        `/images/cardetails/pick-up/highlights/slider/one/h-100-pe2-highlights-extralong-wheel-base-low-type-rear-deck-pc.jpg`,
        `/images/cardetails/pick-up/highlights/slider/one/h-100-pe2-highlights-long-wheel-base-double-cab-pc.jpg`,
        `/images/cardetails/pick-up/highlights/slider/one/h-100-pe2-highlights-long-wheel-base-high-type-rear-deck-pc.jpg`,
        `/images/cardetails/pick-up/highlights/slider/one/h-100-pe2-highlights-long-wheel-base-low-type-rear-deck-pc.jpg`,
    ]
    const secondImage = [
        `/images/cardetails/pick-up/highlights/slider/two/h-100-highlights-eletronic-stability-control-pc.jpg`,
        `/images/cardetails/pick-up/highlights/slider/two/h-100-highlights-locking-differential-pc.jpg`,
    ]
    return (
        <div className="container bg-[white]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:h-14 h-32 border md:border-0">
                <button onClick={()=> setActive(1)} className={` ${active === 1 ? ' h-14 text-dark bg-[white]' : 'bg-dark text-[white]'}`}>Tailored for your dynamic needs</button>
                <button onClick={()=> setActive(2)} className={` ${active === 2 ? ' h-14 text-dark bg-[white]' : 'bg-dark text-[white]'} hover:bg-[white] hover:text-dark`}>Ride & Handling</button>
        </div>
        {
            active === 1 && <div>
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            
          >
            
           {
            FirstImage.map((img,i)=> <SwiperSlide key={i}>
                    <Image src={img} alt="" width={1200} height={600} className="w-full h-auto " />
            </SwiperSlide>)
           }
          </Swiper>
            </div>
        }


{
            active === 2 && <div>
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            
          >
            
           {
            secondImage.map((img,i)=> <SwiperSlide key={i}>
                    <Image src={img} alt="" width={1200} height={600} className="w-full h-auto " />
            </SwiperSlide>)
           }
          </Swiper>
            </div>
        }

</div>
    );
};

export default TabSlider;