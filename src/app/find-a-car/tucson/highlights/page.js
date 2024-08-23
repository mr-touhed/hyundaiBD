import ImageSlider from "@/app/components/ImageSlider";
import Video from "@/app/components/Video";
import Image from "next/image";

const Highlights = () => {

        const gallary = [
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_1.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_2.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_3.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_4.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_5.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_6.jpg',
                '/images/cardetails/tucson/highlights/slider/tucson-hyundai-car-bd_7.jpg',
                
                
            ]

    return (
        <>
           <section className="container space-y-2">
           <h2 className="text-center text-4xl font-bold">Overtake the ordinary</h2> 
           <p className="max-w-[800px] mx-auto text-center">The new TUCSON signals the start of a new day, and a new way of driving.
Rejecting the ordinary, the new TUCSON pushes the boundaries of the segment to reinvent everything.
Outside, the new TUCSON is designed to impress while inside, you’ll discover a level of roominess,
comfort and versatility that exceeds all expectations.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-highlights-walker-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

            <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Design that’s thrilling and timeless.</h2> 
                    <p className="max-w-[800px] mx-auto text-center">With its 3D parametric-style grille and jewel-like surfaces,
the new TUCSON is for trendsetters with a taste for futuristic design.
Adopting a daring new design language we call Sensuous Sportiness and created with
cutting-edge digital design tools, the new TUCSON stands out from the crowd.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-nx4-2023-sunset-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>


            <section className="container my-16 space-y-2">
           <h2 className="text-center text-4xl font-bold">The new TUCSON poised to set new standards.</h2> 
           <p className="max-w-[800px] mx-auto text-center">Based on innovative design and delivering value above and beyond its class,
           the new TUCSON is here to set new standards for SUVs everywhere.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-nx4-2023-orange-model-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

           <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Reason to believe.</h2> 
                            <p className="max-w-[800px] mx-auto text-center">Boasting an innovative sporty SUV look, the new TUCSON comes with an interior space that’s equal to mid-sized vehicles as well as improved specifications for safety and convenience.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-highlights-under-viaduct-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>

                <section className="container my-16  ">
                            <Video thumbnail="/images/cardetails/tucson/highlights/thubmnil.jpg" videoId="7o7fD1y9Jh4"/>
                </section>

            <section className=" md:p-16 ">
                    <div className="container space-y-16">
                    <h2 className="text-center text-4xl font-bold">Gallery</h2> 
                            <div className="pb-16">
                            <ImageSlider gallary={gallary}/>
                            </div>
            
                        
                    </div>

            </section>


            
        </>
    );
};

export default Highlights;