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


const ImageSlider = ({gallary}) => {
    

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            gallary.map((img,i)=> <SwiperSlide key={i}>
                <Image className='w-full md:max-h-[550px] object-cover' src={img} alt="" width={1000} height={500}/>
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
        
        slidesPerView={4}
        freeMode={true}
        
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="imageGallery"
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