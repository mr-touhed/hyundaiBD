"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';




const AwardsNewsComponent = ({news:data}) => {
    const [newsData,setNewsData] = useState(data);


    
    return (
        <div className="space-y-16 pb-16" >
            <div className="p-4 bg-[#F6F3F2] flex md:flex-row flex-col justify-center md:gap-8 gap-4">
                        <span className="bg-[white] px-6 py-3">Achievable Awards</span>
                        
                        {/* <input type="text" className="md:w-[500px] p-2"/>
                        <button className="bg-primary px-6 py-3 text-[white]">Search</button> */}
            </div>


            <section className="container space-y-16">
                
                            <div className='text-center space-y-3'>
                            <h1 className='text-3xl font-semibold'>Awards Won by Hyundai Motor Bangladesh </h1>
                            <p>Kick starting the award season of 2023, Hyundai Motor Bangladesh bags six awards, including top honors at the third edition of #ZeeAutoAwards2023. Delivering on our vision of &rsquo;Progress for Humanity&rsquo;, Hyundai was acknowledged across categories:</p>
                            </div>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
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
            newsData?.map(news => <SwiperSlide key={news._id}>
                <Image src={news.image} alt={news.title} width={1000} height={500}/>
                <h2 className='text-2xl font-semibold'>{news.title}</h2>
        </SwiperSlide>)
        }
        
    
      </Swiper>  
                            
            </section>
        </div>
    );
};

export default AwardsNewsComponent;


