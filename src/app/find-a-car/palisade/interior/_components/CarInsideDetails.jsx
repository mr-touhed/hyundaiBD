"use client"

import Image from "next/image";
import { useState } from "react";

const CarInsideDetails = () => {
    const [color,setColor] = useState(0)
    const carColor = [
        '/images/cardetails/palisade/interior/interior_Colour_Obsidian-Black_rev.png',
        '/images/cardetails/palisade/interior/interior_Colour_Burgundy_rev.png',
        '/images/cardetails/palisade/interior/interior_Colour_Dark-Navy_rev.png',
    ]
    
    return (
        <section className="space-y-6">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center">Interior</h2>


            <Image src={carColor[color]} alt="palisade Interior car details" width={1300} height={700} className="md:w-[80%] mx-auto"/>


            <div className="flex justify-between max-w-[700px]">
                <div>
                <h2 className="text-2xl font-semibold">Seat Color</h2>
                <p>{color == 0 ? "Black Mono-tone"  : color == 1 ? "Burgundy Color Package" : "Navy Color Package"}</p>
                </div>


                <ul className="flex gap-8">
                <li><button onClick={() => setColor(0)} className="w-[50px] h-[50px] rounded-full bg-[#3E3E3C]"></button></li>
                <li><button onClick={() => setColor(1)} className="w-[50px] h-[50px] rounded-full bg-[#50342E]"></button></li>
                <li><button onClick={() => setColor(2)} className="w-[50px] h-[50px] rounded-full bg-[#B9B4AA]"></button></li>
            </ul>
            </div>



            
        </div>

        <div className="relative h-screen">
        <Image src={'/images/cardetails/palisade/interior/Accordion-Interior_Desktop_1920x580.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full  h-screen object-cover"/>
            <h2 className="absolute  md:top-32 top-10 text-3xl text-[white] text-nowrap text-center w-full">Interior Features</h2>
        </div>


        <div className="container space-y-6">
            <h2 className="text-3xl font-semibold text-center">Empower your future.</h2>
            <p className="max-w-[700px] text-center mx-auto">The luxurious New PALISADE cabin space provides exceptional driving comfort. The interior is wrapped in genuine leather, giving it a luxurious yet elegant appearance. All the high-quality materials that are used can be found in meticulous detail. All of that factor creates a unique experience for the rider and passenger.</p>
            <Image src={'/images/cardetails/palisade/interior/lx2_pe_rhd_interior_center_console_terang.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
        </div>

            <div className="container">

                    <div className="grid md:grid-cols-3 gap-6">


                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Hyundai_Banner_Resize_InteriorPalisade_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Dual zone automatic
                        climate control</h2>
            
                        </div>

                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_LCD-Cluster_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">12.3” Supervision Color
                        TFT LCD Meter Cluster</h2>
            
                        </div>

                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_Tilt-&-telescopic-steering_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Tilt & telescopic
                        steering</h2>
            
                        </div>

                    </div>







                    <div className="grid md:grid-cols-2 gap-6 mt-6">


                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_Integrated-Memory-Seat_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Integrated Memory System (driver)</h2>
            
                        </div>

                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_Electric-Chromatic-Mirror_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Frameless Electrochromatic Mirror</h2>
            
                        </div>

                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_Infinity-Premium-Sound-System_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Infinity Premium Sound System</h2>
            
                        </div>
                        <div className="p-4">
                        <Image src={'/images/cardetails/palisade/interior/Interior_Wireless-Smarphone-Charger_2-Kolom_544x360.jpg'} alt="palisade Interior car details" width={1300} height={700} className="w-full object-cover"/>
                        <h2 className="text-xl font-semibold ">Wireless Smartphone Charger</h2>
            
                        </div>

                    </div>

            </div>
        </section>
    );
};

export default CarInsideDetails;