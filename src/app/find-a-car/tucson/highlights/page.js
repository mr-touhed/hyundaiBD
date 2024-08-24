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
           <h2 className="text-center text-4xl font-bold">Highlights</h2> 
           <h2 className="text-center text-2xl font-thin">Count the small wins.</h2> 
           <p className="max-w-[800px] mx-auto text-center">Realizing that you are a canvas of endless potential, you are constantly challenging yourself to be better. It’s time to discover the undiscovered. Start small, make a mess, but just keep going. Every mark represents your growth. Because these moments and experiences are worth treasuring.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-highlights-endless-potential.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>

            <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Thoughtful interior features that let you focus.</h2> 
                    <p className="max-w-[800px] mx-auto text-center">Once you’ve decided to make a change, go for it. The driver’s seat in Tucson has a hassle-free line up of the most essential, cutting edge technologies that lets you stay focused on your mission. Tucson’s roomy interior is also big enough to accommodate all the tools you need to achieve your wins.</p>
            <Image src="/images/cardetails/tucson/highlights/tucson-highlights-Thoughtful-interior-features.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
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