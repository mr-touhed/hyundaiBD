
"use client"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const ColumnSlider = () => {

    const SliderData = [
        {
            title:"Blind-spot collision warning (BCW)",
            img:"/images/cardetails/tucson/safety/slider/Safety-sixteen.jpg",
            details:"Never drive blind. BCW ensures a safe drive by detecting and warning the driver of obstacles located in the blind spot in the rear-side of the vehicle."
        },
        {
            title:"Forward collision - avoidance assist (FCA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-first.jpg",
            details:"The SUV with a sixth sense. It warns you of a potential front collision with cars, pedestrians or cyclist and automatically applies brakes if needed."
        },
        {
            title:"Blind-spot view monitor (BVM)",
            img:"/images/cardetails/tucson/safety/slider/Safety-second.jpg",
            details:"Blind spot view monitor enables you to see vehicles hidden in the blind spots. This helps in taking turns safely."
        },
        {
            title:"Driver attention warning (DAW)",
            img:"/images/cardetails/tucson/safety/slider/Safety-third.jpg",
            details:"Get tired while driving? DAW will detect and alert you if your attention level is low while driving and suggest you to take a break."
        },
        {
            title:"Smart cruise control with stop and go (SCC w/ S&G)",
            img:"/images/cardetails/tucson/safety/slider/Safety-fourth.jpg",
            details:"This feature helps you maintain a pre-determined distance from vehicles ahead by automatically adjusting the driving speed. It also works in stop and go situations."
        },
        {
            title:"Forward collision warning (FCW)",
            img:"/images/cardetails/tucson/safety/slider/Safety-fifth.jpg",
            details:"Always forewarned. The forward collision warning system warns you of an impending collision with cars, cyclists and pedestrians ahead of you by giving audio video signals."
        },
        {
            title:"Lane following assist (LFA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-sixth.jpg",
            details:"LFA helps you to keep the car in the centre of the lane"
        },
        {
            title:"High beam assist (HBA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-seven.jpg",
            details:"HBA detects lights from oncoming vehicles and automatically shifts between low and high beam enabling you to focus on the road."
        },
        {
            title:"Blind-spot collision avoidance assist (BCA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-eight.jpg",
            details:"No more blind spots. BCA helps to mitigate a chance of any collision with vehicles in the rear blind spots by giving a warning and then by braking."
        },
        {
            title:"Lane keeping assist (LKA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-nine.jpg",
            details:"The system uses the front camera to detect lane drift and provides audio visual warnings. The steering wheel makes adjustments to keep the vehicle in line and avoid accidents."
        },
        {
            title:"Safe exit warning (SEW)",
            img:"/images/cardetails/tucson/safety/slider/Safety-ten.jpg",
            details:"Safe inside and out. The Safe Exit warning alerts you if a vehicle is approaching from the rear while you exit the car."
        },
        {
            title:"Rear cross traffic collision avoidance assist (RCCA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-eleven.jpg",
            details:"While reversing your car , if there is oncoming traffic then SmartSense will warn you of incoming traffic. If your miss the warning, then RCCA will automatically apply the brakes to mitigate the collision."
        },
        {
            title:"Surround view monitor (SVM)",
            img:"/images/cardetails/tucson/safety/slider/Safety-twelve.jpg",
            details:"Welcome to hassle-free parking. The Surround View Monitor shows a 360 degree top view of your surroundings making parking safer and easier."
        },
        {
            title:"Forward collision avoidance assist - junction turning (FCA-JT)",
            img:"/images/cardetails/tucson/safety/slider/Safety-thirteen.jpg",
            details:"FCA-JT helps to avoid a collision with a vehicle in an adjacent lane, when turning right at a cross road (with turn signal on), by automatically applying brakes."
        },
        {
            title:"Leading vehicle departure alert (LVDA)",
            img:"/images/cardetails/tucson/safety/slider/Safety-fourteen.jpg",
            details:"No more delayed starts. LVDA alerts you when the vehicle ahead, starts moving and you do not react quickly enough."
        },
        {
            title:"Lane departure warning (LDW)",
            img:"/images/cardetails/tucson/safety/slider/Safety-fifteen.jpg",
            details:"Lane Departure Warning emits an audio visual alert if the vehicle starts to veer out of its lane while a turn signal is not active"
        },
        
    ]


    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={35}
        breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            SliderData.map((box,i) => <SwiperSlide key={i} className='pb-16'>
            <div className='space-y-4'>
                <Image src={box.img} alt={box.title + "image"} width={1200} height={600} />
                <h2 className='text-2xl font-semibold'>{box.title}</h2>
                <p>{box.details}</p>
            </div>
        </SwiperSlide>)
        }


        
        
      </Swiper>
        </div>
    );
};

export default ColumnSlider;