"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Button from '../Button';


const sliders = [
  "/images/banner/img_1.jpg",
  "/images/banner/img_2.jpg",
  "/images/banner/img_3.jpg",
  "/images/banner/img_4.jpg",
  "/images/banner/img_5.jpg",
  "/images/banner/img_6.png",
  "/images/banner/img_7.jpg",
]

const HeroSlider = () => {
    return (
        <div className='md:pb-16 pt-4'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
          sliders.map((image,i) => <SwiperSlide key={i} className='mb-10 w-full h-[300px] md:h-[100vh]'>
          
          <section className='relative w-[100%] h-[300px] md:h-full '>
                  <Image  alt="car" src={image} width={1500} height={800} className=' w-full h-full object-cover z-0'/>
                  <div className='absolute z-10 bg-[#00000000] w-full  md:bottom-20 bottom-4  left-16   '>
                              <div className='container text-[2vw] space-y-2'>
                              
                              <Button href="/">Booking</Button>
                              
                              <Button href="/">Know more</Button>
                              </div>
                              
                  </div>
                  
          </section>
  </SwiperSlide>)
        }
        
        {/* <SwiperSlide className='mb-10 w-full h-[300px] md:h-[100vh]'>
          
                <section className='relative w-[100%] h-[300px] md:h-full '>
                        <Image  alt="car" src="/images/banner/2.jpg" width={1500} height={700} className='relative w-full h-full object-cover z-0'/>
                        <div className='absolute z-10 bg-[#00000000] w-full  md:bottom-20 bottom-4  left-16   '>
                                    <div className='container text-[2vw] space-y-2'>
                                    
                                    <Button href="/">Booking</Button>
                                    
                                    <Button href="/">Know more</Button>
                                    </div>
                                    
                        </div>
                        
                </section>
        </SwiperSlide>
         */}
        
      </Swiper>
        </div>
    );
};

export default HeroSlider;