import ImageSlider from "@/app/components/ImageSlider";
import Video from "@/app/components/Video";
import Image from "next/image";

const Highlights = () => {

        const gallary = [
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-01-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-02-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-03-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-04-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-05-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-06-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-07-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-08-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-09-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-10-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-11-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-12-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-13-pc.jpg',
                '/images/cardetails/palisade/highlights/slider/palisade-lx2-pe-gallery-14-pc.jpg',
            ]

    return (
        <>
           <section className="container space-y-2">
           <h2 className="text-center text-4xl font-bold">The bold new look.</h2> 
           <p className="max-w-[800px] mx-auto text-center">The bold, premium look of the new PALISADE commands immediate attention wherever your travels take you.
It’s a unique look that inspires confident driving and your confidence is well placed: PALISADE’s advanced
safety features keep you and your loved ones free from danger. PALISADE’s spacious cabin, flexible seating,
and advanced connectivity features make it the perfect getaway family car.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-pe-highlights-the-bold-new-look-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

            <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Premium presence.</h2> 
                    <p className="max-w-[800px] mx-auto text-center">Born to rule as Hyundai’s flagship SUV, PALISADE shows all the traits of a leader. Both muscular and
elegant, it projects a powerful presence with premium qualities that get noticed.
Wherever you’re headed, the PALISADE will take you there in style.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-pe-highlights-premium-presence-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>


            <section className="container my-16 space-y-2">
           <h2 className="text-center text-4xl font-bold">Next level technology.</h2> 
           <p className="max-w-[800px] mx-auto text-center">The PALISADE will always have you looking forward to your drive. Its powerful powertrain delivers
quiet, nimble performance that make it a delight to drive. And you’ll be driving with complete peace of mind
knowing that PALISADE is equipped with advanced safety systems that protect you against the unexpected.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-pe-highlights-next-level-technology-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

           <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Family values.</h2> 
                            <p className="max-w-[800px] mx-auto text-center">Family time is precious. PALISADE helps you make the most of it with generous amounts of cabin space
        that will meet the needs of families, big and small. Extra versatility is built into the living space with flexible
        seating configurations and abundant storage spaces. Whatever the mix of adults, kids, and cargo,
        the family-friendly PALISADE is built to handle the job comfortably and efficiently.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-pe-highlights-family-values-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>

                <section className="container my-16  ">
                            <Video thumbnail="/images/cardetails/palisade/highlights/thubmnil.jpg" videoId="C2_cQ6TuhEw"/>
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