"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const BannerSlider = () => {

    const sliders = [
        {
          img:"/images/banner/img_1.jpg",
          link:"/find-a-car/creta/highlights"
        },
        {
          img:"/images/banner/img_2.jpg",
          link:"/find-a-car/palisade/highlights"
        },
        {
          img:"/images/banner/img_3.jpg",
          link:"/find-a-car/tucson/highlights"
        },
        {
          img:"/images/banner/img_4.jpg",
          link:"/find-a-car/tucson/highlights"
        },
        {
          img:"/images/banner/img_5.jpg",
          link:"/find-a-car/creta-grand/highlights"
        },
        {
          img:"/images/banner/img_6.png",
          link:"/find-a-car/creta/highlights"
        },
        {
          img:"/images/banner/img_7.jpg",
          link:"/find-a-car/creta/highlights"
        },
       
      ]



    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
            {
                sliders.map(img => <SwiperSlide className='max-h-[365px] w-full' key={img.img}><Image  src={img.img} alt="car image" width={1900} height={365} className='w-full h-[365px] object-cover bg-top' /></SwiperSlide>)
            }
        
       
      </Swiper>
    );
};

export default BannerSlider;