
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

const carData = [
    {
        models:"SUV",
        cars:[
            {
                name:"PALISADE",
                img:"/images/Palisade-thumb.png"
            },
            {
                 name:"TUCSON",
                img:"/images/tucson_thumbnail_pc.png"
            },
            {
                name:"CRETA GRAND",
               img:"/images/Creat_grand-thumb.png"
           },
            {
                name:"CRETA",
               img:"/images/creta-thumb.png"
           },

        ]
    },           
    {
        models:"Pick-up",
        cars:[
            {
                 name:"H 100",
                img:"/images/H-100_thumbnil.png"
            },
            
        ]

    },
    
]

const CarDetails = () => {
    const [index,setIndex] = useState(0);
    const models = ['All','SUV','Pick-up'];
    const [showModel,setShowModel] = useState('All')
    const [activeIndex, setActiveIndex] = useState(0);
    const [showCars,setShowCars] = useState([])

    

    useEffect(()=>{
        const carData = [
            {
                name:'PALISADE',
                image:"/images/cars/palisade.png",
                price:"1000",
                engine:[
                    "1.2 | Kappa petrol",
                    "1.0 | kappa turbo GDi petrol"
                ],
                transmission:"5 speed manual / Smart Auto AMT",
                model:"SUV"
            },
            {
                name:'TUCSON',
                image:"/images/cars/TUCSON.png",
                price:"1000",
                engine:[
                    "1.2 | Kappa petrol",
                    "1.0 | kappa turbo GDi petrol"
                ],
                transmission:"5 speed manual / Smart Auto AMT",
                model:"SUV"
            },
            {
                name:'CRETA GRAND',
                image:"/images/cars/grand.png",
                price:"1000",
                engine:[
                    "1.2 | Kappa petrol",
                    "1.0 | kappa turbo GDi petrol"
                ],
                transmission:"5 speed manual / Smart Auto AMT",
                model:"SUV"
            },
            {
                name:'CRETA',
                image:"/images/cars/creat.png",
                price:"1000",
                engine:[
                    "1.2 | Kappa petrol",
                    "1.0 | kappa turbo GDi petrol"
                ],
                transmission:"5 speed manual / Smart Auto AMT",
                model:"SUV"
            },
        ]
        if(showModel !== "All"){
           const update =  carData.filter(car => car.model === showModel)
           setShowCars(update)
        }else{
            setShowCars(carData)
        }

    },[showModel])
    return (
        <section className="">
            <h2 className="text-2xl font-semibold text-center">Hyundai Cars</h2>

            <div className="py-6 overflow-x-scroll lg:overflow-hidden">
                <ul className="flex  justify-center gap-16  ">
                    {
                        models.map((model,i) => <li className={`${index === i ? "active": ''} cursor-pointer`} key={i} onClick={()=> {setIndex(i);setShowModel(model)}}>{model}</li>)
                    }
                </ul>
            </div>

            <div className="md:my-16">

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
               
                <Image src={car.image} alt="image" width={1000} height={500} className="w-full "/>
                { activeIndex === i && <div className="md:flex gap-6 px-3  text-center">
                <Link href="/" className="font-bold text-sm text-primary text-nowrap">{car.name} &gt;</Link> 
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