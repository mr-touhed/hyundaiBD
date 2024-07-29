
"use client"

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Navigation, } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";


const CarDetails = () => {
    const [index,setIndex] = useState(0);
    const models = ['All','SUV','Sedan','Hatchback','Electric'];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="container">
            <h2 className="text-2xl font-semibold text-center">Hyundai Cars</h2>

            <div className="py-6 overflow-x-scroll lg:overflow-hidden">
                <ul className="flex  md:justify-center gap-16  justify-start">
                    {
                        models.map((model,i) => <li className={`${index === i ? "active": ''} cursor-pointer`} key={i} onClick={()=> setIndex(i)}>{model}</li>)
                    }
                </ul>
            </div>

            <div className="md:my-16">

            <Swiper
            slidesPerView={2}
            centeredSlides={true}
            watchSlidesProgress={true}

          navigation={true}
          modules={[Pagination, Navigation,]}
          className=""
          onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
      >
        <SwiperSlide className="" >
                 
                        <Image src="/images/cars/creta.png" alt="image" width={700} height={500} className="w-full h-auto"/>
                       {activeIndex == 0 && <div className="md:flex gap-6 ">
                        <Link href="/" className="font-bold text-primary text-nowrap">creta &gt;</Link> 
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Starting at </p>
                                    <p>$000000</p>
                                    <p>*Ex showroom Price</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Engine </p>
                                    <p>1.2l kappa Petrol</p>
                                    <p>1.2l Bi-Fuel (Petrol with CNG)</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Transmisstion available </p>
                                    <p>5 speed manual / Smart Auto AMT</p>
                                    
                                </div>
                            </div>
                        </div>}

                 

        </SwiperSlide>
        <SwiperSlide>
                    
                        <Image src="/images/cars/creta-n.png" alt="image" width={1280} height={500} className="w-full h-auto"/>
                       {activeIndex === 1 &&  <div className="md:flex gap-6">
                        <Link href="/" className="font-bold text-primary text-nowrap">creta &gt;</Link> 
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Starting at </p>
                                    <p>$000000</p>
                                    <p>*Ex showroom Price</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Engine </p>
                                    <p>1.2l kappa Petrol</p>
                                    <p>1.2l Bi-Fuel (Petrol with CNG)</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Transmisstion available </p>
                                    <p>5 speed manual / Smart Auto AMT</p>
                                    
                                </div>
                            </div>
                        </div>}

                 

        </SwiperSlide>
        <SwiperSlide>
               
                        <Image src="/images/cars/extra.png" alt="image" width={1280} height={500} className="w-full"/>
                        { activeIndex === 2 && <div className="md:flex gap-6 ">
                        <Link href="/" className="font-bold text-primary text-nowrap">creta &gt;</Link> 
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Starting at </p>
                                    <p>$000000</p>
                                    <p>*Ex showroom Price</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Engine </p>
                                    <p>1.2l kappa Petrol</p>
                                    <p>1.2l Bi-Fuel (Petrol with CNG)</p>
                                </div>
                                <div className="text-nowrap text-xs md:text-sm">
                                    <p>Transmisstion available </p>
                                    <p>5 speed manual / Smart Auto AMT</p>
                                    
                                </div>
                            </div>
                        </div>}

                   

        </SwiperSlide>
       
      </Swiper>


            </div>
        </section>
    );
};

export default CarDetails;