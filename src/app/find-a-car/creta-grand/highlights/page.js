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
                    tab:"digital cluster",
                    img:"/images/cardetails/creta-grand/highlights/cluster.jpg",
                    details:`26.03 cm (10.25") multi display digital cluster`
                },
                {
                    tab:"premium sound",
                    img:"/images/cardetails/creta-grand/highlights/bose-speakers-v3.jpg",
                    details:"Bose premium sound system (8 Speakers)"
                },
                {
                    tab:"Auto healthy air purifier",
                    img:"/images/cardetails/creta-grand/highlights/purifier-v3.jpg",
                    details:"Auto healthy air purifier with AQI display"
                },
                {
                    tab:"seatback table",
                    img:"/images/cardetails/creta-grand/highlights/hyundai-alcazar-suv-interio-small-all-840x540-3.jpg",
                    details:"Auto healthy air purifier with AQI display"
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
                                <TabImage TabData={TabData} page="md:grid-cols-4"/>
                </section>
                <section className="container mt-16">
           <h2 className="text-center md:text-4xl font-bold">CRETA GRAND’s advanced powertrains deliver all the power you need</h2> 
          
           
            <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-Mid-image_1-1.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>
                <section className="container flex md:flex-row flex-col gap-16 md:gap-0  justify-between">
                        <div className="space-y-3">
                        <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-control-mode.jpg" alt="" width={1200} height={600} className="md:max-w-[544px] md:max-h-[360px]" />
                                <h2 className=" md:text-4xl font-bold">Traction control mode</h2>   
                                <p className="max-w-[544px]">Traction Control Mode automatically fine tunes CRETA GRAND’s front wheel
                                drive system to adapt to difficult driving conditions.</p>
                        </div>
                        <div className="space-y-3">
                        <Image src="/images/cardetails/creta-grand/highlights/creta-grand-hrighlight-wheels.jpg" alt="" width={1200} height={600} className="md:max-w-[544px] md:max-h-[360px]" />  
                        <h2 className=" md:text-4xl font-bold">18″ diamond-cut alloy wheels</h2>   
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