"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Button from '../Button';

const News = () => {

    const news = [
        {
            date:"March - 2024",
            heading:"HYUNDAI TUCSON: SETTING NEW STANDARDS FOR ‘MADE IN BANGLADESH’ CARS.",
            details: "Korean automobiles have come a long way, and this turbocharged gem of an engine is a case in point. The Tucson is the second Hyundai a�erthe Creta to come with a ‘Made in Bangladesh’ moniker The Tucson's sculpted body lines and bold design language undeniably makes it lookstraight out of a sci-fi movie. [...]"
        },
        {
            date:"April - 2024",
            heading:"HYUNDAI TUCSON: SETTING NEW STANDARDS FOR ‘MADE IN BANGLADESH’ CARS.",
            details: "Korean automobiles have come a long way, and this turbocharged gem of an engine is a case in point. The Tucson is the second Hyundai a�erthe Creta to come with a ‘Made in Bangladesh’ moniker The Tucson's sculpted body lines and bold design language undeniably makes it lookstraight out of a sci-fi movie. [...]"
        },
        {
            date:"May - 2024",
            heading:"HYUNDAI TUCSON: SETTING NEW STANDARDS FOR ‘MADE IN BANGLADESH’ CARS.",
            details: "Korean automobiles have come a long way, and this turbocharged gem of an engine is a case in point. The Tucson is the second Hyundai a�erthe Creta to come with a ‘Made in Bangladesh’ moniker The Tucson's sculpted body lines and bold design language undeniably makes it lookstraight out of a sci-fi movie. [...]"
        }
    ]

    return (
        <div className="min-h-[100vh] mt-16 grid grid-cols-1 justify-center items-center" style={{backgroundImage:`linear-gradient(0deg, rgb(82 73 73 / 68%) 0%, rgb(250 250 250 / 78%) 90%), url(/images/news_bg.jpg)`, backgroundSize:"cover"}}>
                <div className='space-y-4 container'>
                <h2 className="text-4xl font-bold text-center">News</h2>
                
                <Swiper
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        {
          news.map((n,i) => <SwiperSlide key={i} className=''>
                <div className=' bg-[white] p-16 text-[black] flex flex-col gap-16 items-center'>
                    <p>Bangla News | {n.date}</p>
                    <h2 className='text-2xl font-semibold'>{n.heading}</h2>
                    <p>{n.details}</p>
                    <div>
                        <Button href="/">Learn More</Button>
                    </div>
                </div>
                
          </SwiperSlide>)  
        }


                </Swiper>
                </div>
      </div>
       
    );
};

export default News;