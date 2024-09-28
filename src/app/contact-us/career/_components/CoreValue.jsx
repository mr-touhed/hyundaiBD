"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';


const CoreValue = () => {
    return (
        <section className='container space-y-8'>
                <h2 className='text-2xl font-semibold text-center'>Core Values</h2>
                <p>Our Core values are guiding principles for employees behavior and decision-making that are essential to realize our management philosophy and vision. we live by our core values, and we demonstrate in every small activity that we do and deliver. It simply represents our style and way of doing things</p>
                

                    <section>
                    <Swiper
        slidesPerView={1}
        breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
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
                <div>
                <Image src="/images/Pages/Career/Core-value-logos-02.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
                <p>We promote a customer-driven corporate culture by providing the best quality and impeccable service with all values centered on our customers</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div>
                <Image src="/images/Pages/Career/Core-value-logos-04.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
                <p>We refuse to be complacent, embrace every opportunity for greater challenge, and are confident in achieving our goals with unwavering passion and ingenious passion</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div>
                <Image src="/images/Pages/Career/Core-value-logos-05.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
                <p>We create synergy through a sense of &ldquo;togetherness&ldquo; that is fostered by mutual communication and cooperation within the company and with our business partners.</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div>
                <Image src="/images/Pages/Career/Core-value-logos-06.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
                <p>We believe the future of our organization lies in the hearts and capabilities of individual members and will help them develop their potential by creating a corporate culture that respects talent</p>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div>
                <Image src="/images/Pages/Career/Core-value-logos-07.jpg" alt="carrer object" width={1200} height={600} className='w-full h-auto'/>
                <p>We respect the diversity of cultures and customers, aspire to be the world&lsquo;s best at what we do, and strive to become a respected globa corporate citizen</p>
                </div>
        </SwiperSlide>

      </Swiper>
                    </section>
            </section>
    );
};

export default CoreValue;