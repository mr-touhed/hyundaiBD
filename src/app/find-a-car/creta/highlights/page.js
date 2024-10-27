import GridSlider from "@/app/components/GridSlider";
import ImageSlider from "@/app/components/ImageSlider";
import TabImage from "@/app/components/TabImage";
import Video from "@/app/components/Video";
import Image from "next/image";

const Highlights = () => {

        const gallary = [
                '/images/cardetails/creta/highlights/slider/creta_1.jpg',
                '/images/cardetails/creta/highlights/slider/creta_2.jpg',
                '/images/cardetails/creta/highlights/slider/creta_3.jpg',
                '/images/cardetails/creta/highlights/slider/creta_4.jpg',
                '/images/cardetails/creta/highlights/slider/creta_5.jpg',
                '/images/cardetails/creta/highlights/slider/creta_6.jpg',
               
                
                
                
            ]

            
    const TabData = [
        {
            tab:"Ultimate Connectivity",
            img:"/images/cardetails/creta/highlights/Hyundai-creta-suv-Ultimate-Connectivity.jpg",
            details:"The new Hyundai CRETA is equipped with home-to-car with Alexa and innovative Hyundai Bluelink app gives you the power to control your car from the comfort of your home or office."
        },
        {
            tab:"Ultimate Safety",
            img:"/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-Ultimate-Safety.jpg",
            details:"The new Hyundai CRETA comes equipped with 70 plus advanced safety features including six airbags, as standard."
        },
        {
            tab:"Spatial artistry",
            img:"/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-big-Radiant-interiors.jpg",
            details:"With its symphony of space, the new Hyundai CRETA is a work of art. In the new Hyundai CRETA, every journey is a moving moment even when stationary."
        },
        {
            tab:"Ultimate sound",
            img:"/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-big-Ultimate-sound.jpg",
            details:"Immerse yourself and make every drive an Ultimate driving experience with the powerful, precision tuned Bose Premium Sound System (8 speakers)"
        },
    ]
    const gridImageData = [
        {
                name:"Traction control modes (snow, mud, sand)",
                img:'/images/cardetails/creta/highlights/slider/Hyundai-creta-suv-highlight-small-800x530-1-drivemode.jpg'
        },
        {
                name:"Seamlessly integrated infotainment and cluster screen",
                img:'/images/cardetails/creta/highlights/slider/Hyundai-creta-suv-highlight-small-800x530-2-infotainment-&-Cluste-screen.jpg'
        },
        {
                name:"All new premium seat with piping",
                img:'/images/cardetails/creta/highlights/slider/Hyundai-creta-suv-highlight-small-800x530-3-leatherseats.jpg'
        },
        {
                name:"Soothing amber ambient light",
                img:'/images/cardetails/creta/highlights/slider/Ambientlightingcreta.jpg'
        },
        {
                name:"Dual zone automatic temperature control",
                img:'/images/cardetails/creta/highlights/slider/DualACcreta.jpg'
        },
        {
                name:"Complete peace of mind",
                img:'/images/cardetails/creta/highlights/slider/peaceofmindcreta.jpg'
        },
    ]
    return (
        <>
           <section className="container space-y-2">
           <h2 className="text-center text-4xl font-bold">The new Hyundai CRETA Car. Undisputed. Ultimate</h2> 
                <p className="max-w-[544px] mx-auto text-center">Nothing stands in comparison to the presence of the new Hyundai CRETA. At first glance, the new design becomes sharper, more modern and progressive. The premium SUV looks powerful, refined, and captivating with lavish surfaces highlighting the sportiness that is signature to CRETA.</p>
            <Image src="/images/cardetails/creta/highlights/highlights-top.jpg" alt="" width={1200} height={600} className="w-full h-auto py-16" />
           </section>
           <section>
           <h2 className="text-center text-4xl font-bold">What a legend looks like</h2>
                <p className="max-w-[544px] mx-auto text-center">Bold. Charismatic. Extraordinary. The new Hyundai CRETA is symbolic of all things impressive no matter how you look at it.</p>
                <TabImage TabData={TabData} page="md:grid-cols-4"/>
           </section>
                <section className="bg-[#E4DCD3] py-16">
                        <div className="container space-y-16">
                                <h2 className=" text-4xl font-bold">The new Hyundai CRETA - Ultimate features</h2>

                                <div>
                                        <GridSlider gridImageData={gridImageData}/>
                                </div>

                                <div className="grid md:grid-cols-3 md:gap-16 gap-4 ">
                                                <div className="space-y-4">
                                                <Image className="" src="/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-small-800x530-4-paddle shifters.jpg" alt="" width={1200} height={600}/>
                                                <h2 className="font-semibold text-2xl">Paddle shifters</h2>
                                                </div>
                                                <div className="space-y-4">
                                                <Image className="" src="/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-small-800x530-5-transmission.jpg" alt="" width={1200} height={600}/>
                                                <h2 className="font-semibold text-2xl">Choice of transmission (MT, AT, DCT & IVT)</h2>
                                                </div>
                                                <div className="space-y-4">
                                                <Image className="" src="/images/cardetails/creta/highlights/Hyundai-creta-suv-highlight-small-800x530-1-turbo-1.5l.jpg" alt="" width={1200} height={600}/>
                                                <h2 className="font-semibold text-2xl">Choice of engine (1.5l PL, 1.5l DSL, 1.5l Turbo PL)</h2>
                                                </div>
                    </div>
                        </div>
                </section>
                <section className="container my-16  space-y-6">
                        <p>Built on Hyundai’s Global Design Language of ‘Sensuous Sportiness’, the new Hyundai CRETA exudes bolder stance and a head-turner design. Featuring a robust and modern exterior design with a blend of functional and premium interiors, new Hyundai CRETA represents a perfect amalgamation of an SUV that will match the city requirements of the customers as well as satiate the adrenaline daredevil in them.</p>
                        <p>Presenting a captivating and powerful appeal, the new Hyundai CRETA reveals a commanding front look with the new radiator grill and upright hood design displaying a strong, assertive and distinct road presence.</p>
                            <Video thumbnail="/images/cardetails/creta/highlights/thubmnil.jpg" videoId="56tz9wr0IVE"/>
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