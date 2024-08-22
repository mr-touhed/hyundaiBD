"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const ImageSlider = () => {
    const gallary = [
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-01-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-02-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-03-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-04-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-05-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-06-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-07-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-08-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-09-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-10-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-11-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-12-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-13-pc.jpg',
        '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-14-pc.jpg',
    ]

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            gallary.map((img,i)=> <SwiperSlide key={i}>
                <Image className='w-full ' src={img} alt="" width={1000} height={500}/>
            </SwiperSlide>)
        }
        
        
      </Swiper>
      <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            gallary.map((img,i)=> <SwiperSlide key={i} className='cursor-move'>
                <Image className='w-full h-auto' src={img} alt="" width={500} height={200}/>
            </SwiperSlide>)
        }
       
      </Swiper> 
        </>
    );
};

export default ImageSlider;