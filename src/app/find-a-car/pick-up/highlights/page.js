import ImageSlider from "@/app/components/ImageSlider";
import Video from "@/app/components/Video";
import Image from "next/image";
import TabSlider from "./_component/TabSlider";

const Highlights = () => {

        const gallary = [
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_1.jpg',
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_2.jpg',
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_3.jpg',
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_4.jpg',
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_5.jpg',
                '/images/cardetails/pick-up/highlights/slider/H100-hyundai-pickup-bd_6.jpg',
             
                
                
            ]

    return (
        <>
           <section className="container space-y-2">
           <h2 className="text-center text-4xl font-bold">Your dependable business partner.</h2> 
          
           <p className="max-w-[800px] mx-auto text-center">No matter how tough the conditions, the H-100 delivers 100 percent of the time.</p>
            <Image src="/images/cardetails/pick-up/highlights/h-100-pe-2-highlights-white-car-man-outside-pc.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>

            <section className="bg-[#F6F3F2] md:p-16 pt-3">
                    <div className="container flex gap-6">
                                <div className="space-y-3">
                                <Image src="/images/cardetails/pick-up/highlights/h-100-pe2-highlights-front-part-white-original.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
                                <h2 className=" text-2xl font-bold">Your dependable business partner.</h2>
                                <p>H-100 has a sleek profile and solid build quality to provide an equal measure of style and stability.</p>     
                                </div>
                                <div className="space-y-3">
                                <Image src="/images/cardetails/pick-up/highlights/h-100-pe2-highlights-rear-view-white-original.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
                                <h2 className=" text-2xl font-bold">Your dependable business partner.</h2>
                                <p>H-100 has a sleek profile and solid build quality to provide an equal measure of style and stability.</p>     
                                </div>
                    </div>
            </section>

                <section className="bg-[#E4DCD3] md:p-16 ">
                               <TabSlider/>

                        <div className="mt-16">
                                <h2 className="text-center text-4xl font-bold">Locking differential (LD)</h2>
                                <p className="max-w-[800px] mx-auto text-center">From driving over muddy or uneven road surfaces to icy roads, the Locking differential (LD) offers the highest level of traction to stabilize the vehicle for optimal control. This is automatically activated at speeds over 30 kph.</p>
                        </div>
                </section>
           

           

                <section className="container my-16  ">
                            <Video thumbnail="/images/cardetails/pick-up/highlights/thubmnil.jpg" videoId="Fxk4EJR2eEE"/>
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