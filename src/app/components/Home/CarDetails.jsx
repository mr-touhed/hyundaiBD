
"use client"

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Navigation, } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { carData } from "../../../../public/data/data";



const CarDetails = () => {
    const [index,setIndex] = useState(0);
    const models = ['All','SUV','Pick-up'];
    const [showModel,setShowModel] = useState('All')
    const [activeIndex, setActiveIndex] = useState(0);
    const [showCars,setShowCars] = useState([])

    

    useEffect(()=>{
        
        if(showModel !== "All"){
           const update =  carData.filter(car => car.model === showModel)
           setShowCars(update)
        }else{
            setShowCars(carData)
        }

    },[showModel])
    return (
        <section className="">
            <h2 className="text-3xl font-semibold text-center uppercase">Hyundai Cars</h2>

            <div className="py-6 overflow-x-scroll lg:overflow-hidden">
                <ul className="flex  justify-center gap-16  text-sm uppercase">
                    {
                        models.map((model,i) => <li className={`${index === i ? "active": ''} cursor-pointer min-w-[50px] text-center `} key={i} onClick={()=> {setIndex(i);setShowModel(model)}}>{model}</li>)
                    }
                </ul>
            </div>

            <div className="md:my-0">

            <Swiper
            slidesPerView={1}
            centeredSlides={true}
            watchSlidesProgress={true}
            
            breakpoints={{
                
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 200,
                },
              }}
          navigation={true}
          modules={[Pagination, Navigation,]}
          
          onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
      >
        
        {
            showCars.map((car,i) => <SwiperSlide key={i} className=" md:min-h-[350px] min-h-[320px] space-y-8" >
               
                <Image src={car.image} alt="image" width={1500} height={700} className="w-full h-auto object-cover"/>
                { activeIndex === i && <div className="md:flex gap-6 px-3  text-center">
                <Link href={car.path} className="font-bold text-sm text-primary text-nowrap">{car.name} &gt;</Link> 
                    <div className="grid md:grid-cols-3 md:gap-8 gap-2 items-start text-left">
                        <div className="text-nowrap text-xs md:text-sm">
                            <p className="font-semibold text-lightDark">Starting at </p>
                            <p>{car.price}</p>
                            <p>*Ex showroom Price</p>
                        </div>
                        <div className="text-nowrap text-xs md:text-sm">
                            <p className="font-semibold text-lightDark">Engine </p>
                            {
                                car.engine.map(item => <p key={item}>{item}</p>)
                            }
                        </div>
                        <div className="text-nowrap text-xs md:text-sm">
                            <p className="font-semibold text-lightDark">Transmisstion available </p>
                            <p>5 speed manual / Smart Auto AMT</p>
                            
                        </div>
                    </div>
                </div>}

           

</SwiperSlide>)
        }
       


      </Swiper>


            </div>
        </section>
    );
};

export default CarDetails;