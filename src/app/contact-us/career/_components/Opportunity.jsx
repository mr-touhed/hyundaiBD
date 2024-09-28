"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';


const Opportunity = () => {
    return (
        <section className='container'>
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
    <Image src="/images/Pages/Career/our-culture-connectivity.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Connectivity</h3>
    <p>Connectivity and success go hand-in-hand. In an era of non-traditional work set-ups, we provide easy solutions for employees to engage and connect with their peers for enhanced productivity.</p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/revised-career-three.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Safety & Care</h3>
    <p>Keeping our employees and their loved ones healthy is our priority. We are constantly evolving our safety protocols ensuring the employees’ physical, mental, and emotional wellbeing.</p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/revised-career-two.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Flexibility</h3>
    <p>We offer flexibility at work to all our employees and support them in every possible way to maximise their potential. We also regularly encourage them to take time off to recharge and rejuvenate to perform better.</p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/open-communication.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Open Communication</h3>
    <p>A great idea can spark a brand-new initiative or change the way we work. And that idea can come from anyone. That’s why we believe in open communication at work, fostering a culture of open interactions between employees and management contributing to the success of the company.</p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/compressed.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Collaboration</h3>
    <p>We look for people with excellent problem-solving and people skills, leadership potential, healthy curiosity, and the courage to take initiative. It encourages collaboration at work and provides opportunity for personal growth of employees as well as helps us build a team that thrives on sharing ideas.</p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className='space-y-4'>
    <Image src="/images/Pages/Career/compressed.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
    <h3 className='text-2xl font-semibold '>Commitment to serve our customers globally</h3>
    <p>Our recent endeavours and expanding roots show our commitment to Bangladesh and our focus to serve our customers globally.</p>
    </div>
</SwiperSlide>


</Swiper>
        </section>
    );
};

export default Opportunity;