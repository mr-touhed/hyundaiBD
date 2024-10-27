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
           <h2 className="text-center text-4xl font-bold">Always Remarkable</h2> 
           <p className="max-w-[800px] mx-auto text-center">A random turn down a different road can lead to a wonderful discovery. For those with a sense of adventure and who want to explore for themselves, Hyundai presents its all-new Palisade, the ultimate getaway vehicle. With its bold design, Palisade is made for those who dare to be different, who want to break the daily routine and just get away from it all. From its innovative smart safety features to its class-leading spaciousness, Palisade delivers an endless stream of pleasant surprises.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-highlights-always-remarkable-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

            <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Get it all done in style</h2> 
                    <p className="max-w-[800px] mx-auto text-center">There’s a busy day ahead: school runs, fitness club, lunch with friends and shopping. When there’s so much to do and so little time to do it, Palisade helps you get it all done and in high style. Safety, comfort and convenience features are all well-thought-out and take much of the stress out of driving. Palisade lets you relax, focus on the important things and makes life a whole lot easier.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-highlights-get-it-all-done-in-style-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>


            <section className="container my-16 space-y-2">
           <h2 className="text-center text-4xl font-bold">Remember that time</h2> 
           <p className="max-w-[800px] mx-auto text-center">The big day is here so round up the crew, load up Palisade and head for that special place. Beautiful memories are made on days like this and Palisade helps make it all happen. Whatever the mix of passengers and cargo, Palisade is built to handle the job with comfort and ease.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-highlights-remember-that-time-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
           </section>

           <section className="bg-[#EDEDED] md:p-16 pt-3">
                    <div className="container space-y-2">
                    <h2 className="text-center text-4xl font-bold">Smart start</h2> 
                            <p className="max-w-[800px] mx-auto text-center">Palisade is loaded with remarkable smart features like the power tailgate that not only opens automatically but also allows you to adjust the opening/closing speed and lift height to suit personal preferences. And should you ever accidentally leave a child or pet behind after parking, the rear passenger alert system will automatically issue a gentle reminder. Smart from start to finish, that’s Palisade.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-highlights-smart-start-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
                    </div>

            </section>
            <section className="container my-16 space-y-2">
           <h2 className="text-center text-4xl font-bold">Refreshingly clean</h2> 
           <p className="max-w-[800px] mx-auto text-center">Beyond the cabin’s clean, ultra-modern lines, there’s clean air technology that not only filters away dust and pollen but also deodorizes the air with an ionizer. And seconds before entering a tunnel, Palisade will automatically close the windows and cut off external air intake. Double-laminated glass ensures whisper quiet travel while the 10.25″ touchscreen comes with split-screen and 360-degree surround view monitor capabilities to ensure effortless command and control.</p>
            <Image src="/images/cardetails/palisade/highlights/palisade-lx2-highlights-refreshingly-clean-pc.jpg" alt="" width={1000} height={600} className="w-full h-auto py-16" />
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