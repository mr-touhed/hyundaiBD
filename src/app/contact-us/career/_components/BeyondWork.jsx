"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';

const BeyondWork = () => {
    return (
        <section className='container space-y-6'>
            <h2 className='text-3xl font-semibold'>Beyond Work</h2>
        <Swiper
slidesPerView={1}
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

spaceBetween={30}
pagination={{
clickable: true,
}}
modules={[Navigation, Pagination]}
navigation={{
clickable: true,
}}

>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Best-Employer-Brand.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Best Employer Brand 2022</h3>
    
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/career-new-revised-image.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Leading by example from the front</h3>
    
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Hyundai-Got-talent.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Hyundai&lsquo;s got Talent</h3>
    
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Conversations-with-COO.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Conversation with COO</h3>
    
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Emboldening-the-next-generation-Building-skills-and-confidence.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Emboldening the next generation - Building skills and confidence</h3>
    
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Commitment-to-a-Sustainable-Future.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Committment to a sustainable future</h3>
    
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/Revolutionizing-Learning-Stepping-into-the-VR-World.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Revolutionizing learning - stepping into the VR world</h3>
    
    </div>
</SwiperSlide>



</Swiper>
        </section>
    );
};

export default BeyondWork;