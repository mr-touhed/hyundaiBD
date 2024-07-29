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
import Link from 'next/link';
import Button from '../Button';


const sliders = [
  "/images/banner/img_1.jpg",
  "/images/banner/img_2.jpg",
  "/images/banner/img_3.jpg",
  "/images/banner/img_4.jpg",
  "/images/banner/img_5.jpg",
  "/images/banner/img_6.jpg",
  "/images/banner/img_7.jpg",
]

const HeroSlider = () => {
    return (
        <div className='py-16'>
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
        className="mySwiper"
      >
        <SwiperSlide>
          
                <section className='relative'>
                        <Image  alt="car" src="/images/banner/1.jpg" width={1000} height={500} className='relative w-full z-0'/>
                        <div className='absolute z-10 bg-[#00000000] w-full  md:top-20 top-5 left-16   '>
                                    <div className='container text-[2vw]'>
                                    <h2 className='text-[white] '>The All New</h2>
                                    <h1 className='text-[white]  font-extrabold'>CRETA</h1>
                                    <h3 className=' text-[white]'> <span className='bg-[green]'>MADE IN</span><span className='bg-[red]'>BANGLADESH</span></h3>
                                    <Link href="/" className='text-[white] lg:text-sm lg:px-12  lg:py-2 p-2  bg-primary shadow-md md:mt-16 lg:mt-32 mt-6 inline-block'>Know More</Link>
                                    </div>
                                    
                        </div>
                        
                </section>
        </SwiperSlide>
        <SwiperSlide>
                <section className='relative'>
                        <Image  alt="car" src="/images/banner/2.jpg" width={1000} height={500} className='relative w-full z-0'/>
                        <div className='absolute z-10 bg-[#00000000] w-full  md:top-20 top-5 left-16   '>
                                    <div className='container text-[2vw]'>
                                    <h2 className='text-[white] '>The All New</h2>
                                    <h1 className='text-[white]  font-extrabold'>CRETA</h1>
                                    <h3 className=' text-[white]'> <span className='bg-[green]'>MADE IN</span><span className='bg-[red]'>BANGLADESH</span></h3>
                                    <Button href="/">Know more</Button>
                                    </div>
                                    
                        </div>
                        
                </section>
        </SwiperSlide>
        
        
        
      </Swiper>
        </div>
    );
};

export default HeroSlider;