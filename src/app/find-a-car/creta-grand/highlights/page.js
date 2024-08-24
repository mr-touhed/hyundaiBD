import ImageSlider from "@/app/components/ImageSlider";
import TabImage from "@/app/components/TabImage";
import Video from "@/app/components/Video";
import Image from "next/image";

const Highlights = () => {

        const gallary = [
                '/images/cardetails/creta-grand/highlights/slider/creta-grand_1.jpg',
                '/images/cardetails/creta-grand/highlights/slider/creta-grand_2.jpg',
                '/images/cardetails/creta-grand/highlights/slider/creta-grand_3.jpg',
                '/images/cardetails/creta-grand/highlights/slider/creta-grand_4.jpg',
                '/images/cardetails/creta-grand/highlights/slider/creta-grand_5.jpg',
                
                
                
            ]
            const TabData = [
                {
                    tab:"LED headlamps with LED DRLs",
                    img:"/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-Mid-image_2-1.jpg",
                    details:"Your fascination only grows as you move in closer to examine the details: The LED lighting, the strikingly-designed diamond-cut alloy wheels, and the catchy looking radiator grille."
                },
                {
                    tab:"AC vent",
                    img:"/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-Mid-image_3-1.jpg",
                    details:"CRETA GRAND’s advanced temperature control system with 2nd row AC vent will always provide you with complete relaxation and peace of mind."
                },
                
            ]
    return (
        <>
           <section className="container space-y-2">
           <h2 className="text-center text-4xl font-bold">Live the grand life.</h2> 
          
           <p className="max-w-[800px] mx-auto text-center">Designed to exceed all expectations.</p>
            <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>
                <section className="">
                                <TabImage TabData={TabData} page="md:grid-cols-2"/>
                </section>
                <section className="container mt-16">
           <h2 className="text-center text-4xl font-bold">CRETA GRAND’s advanced powertrains deliver all the power you need</h2> 
          
           
            <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-Mid-image_1-1.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>
                <section className="container flex justify-between">
                        <div>
                        <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-control-mode.jpg" alt="" width={1200} height={600} className="max-w-[544px] max-h-[360px]" />
                                <h2 className=" text-4xl font-bold">Traction control mode</h2>   
                                <p className="max-w-[544px]">Traction Control Mode automatically fine tunes CRETA GRAND’s front wheel
                                drive system to adapt to difficult driving conditions.</p>
                        </div>
                        <div>
                        <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-wheels.jpg" alt="" width={1200} height={600} className="max-w-[544px] max-h-[360px]" />  
                        <h2 className=" text-4xl font-bold">18″ diamond-cut alloy wheels</h2>   
                                <p className="max-w-[544px]">Modern, sporty, and masculine—it’s just my style, it’s in perfect tune with my sensibilities, and it fits in anywhere.</p> 
                        </div>
                </section>

                <section className="container my-16  ">
                            <Video thumbnail="/images/cardetails/creta-grand/highlights/thubmnil.jpg" videoId="4v3SVkkVDkI"/>
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