import TabImage from '@/app/components/TabImage';
import React from 'react';
import TwoColumnSlider from './_components/TwoColumnSlider';

const ConveniencePage = () => {

    const TabData = [
        {
            tab:"60+ Bluelink connected features",
            img:"/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience1.jpg",
            details:"Disclaimer : Functionality of Bluelink depends on adequate power supply and uninterrupted network connectivity to infotainment system. The Bluelink system is designed in such a way that it makes vehicle theft difficult if its circuit and battery connection is uninterrupted"
        },
        {
            tab:"Passenger seat walk-in device",
            img:"/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience-top-image-1120x600-2.jpg",
            details:""
        },
        {
            tab:"2nd row seat folding - boot lever",
            img:"/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience-top-image-1120x600-3.jpg",
            details:""
        },
        {
            tab:"Bose premium sound 8 speaker system",
            img:"/images/cardetails/tucson/convenience/Hyundai-tucson-suv-convenience-top-image-1120x600-4.jpg",
            details:""
        },
    ]


    return (
       <div>
                <section className='bg-[#F6F3F2] py-16'>
                            <div className='container'>
                            <article className='space-y-8'>
                                    <h1 className='text-3xl font-semibold '>Hyundai TUCSON Car Convenience: Leading-edge Technology</h1>
                                    <p className='pb-16'>Connections go beyond in the all-new Hyundai TUCSON . The 26.03 cm (10.25”) HD audio video navigation system will always get an encore. The home to car (H2C) with Alexa allows you to stay connected with your car from home, while 60+ Bluelink connected features ensure you’re connected with the world while on the move.</p>
                                    <TabImage TabData={TabData} page="md:grid-cols-4"/>
                            </article>

                            </div>
                </section>

                <section className='container py-16'>
                        <TwoColumnSlider/>
                </section>
       </div>
    );
};

export default ConveniencePage;