"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { getBlogs } from '@/app/utils/fetchingData';

const News = () => {
    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
       const newsdataFetch =  async () => {
             const data = await getBlogs('BD News');
             setNews(data.result);
             setLoading(false)
        }
        newsdataFetch()
    },[])
    
    return (
        <div className="min-h-[100vh] mt-16 grid grid-cols-1 justify-center items-center" style={{backgroundImage:`linear-gradient(0deg, rgb(82 73 73 / 68%) 0%, rgb(250 250 250 / 78%) 90%), url(/images/news_bg.jpg)`, backgroundSize:"cover"}}>
                <div className='space-y-4 container'>
                <h2 className="text-4xl font-bold text-center">News</h2>
                
                {
                    loading ? <div className='h-[60vh] grid place-content-center'>
                        <h4 className='text-2xl font-thin text-[#4b4848]'>Loading...</h4>
                    </div> :

<Swiper
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        {
          news.map((n,i) => <SwiperSlide key={i} className='mb-8'>
            
                 
                <div className=' bg-[white] p-16 text-[black] flex flex-col gap-16 items-center'>
                    <p>{n.type} | 10-10-2025</p>
                    <h2 className='text-2xl font-semibold'>{n.title}</h2>
                    <p>{n.details.slice(0,300)}...</p>
                    <div>
                        <Button href="/hyundai-story/bangladesh-news">Learn More</Button>
                    </div>
                </div>
            
                
                
          </SwiperSlide>)  
        }


                </Swiper>
                }
                
                </div>
      </div>
       
    );
};

export default News;