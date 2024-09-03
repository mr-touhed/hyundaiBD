import TabImage from "@/app/components/TabImage";
import Image from "next/image";


const PerformancePage = () => {
    const details = [
        {
            tab:"R 2.0 l diesel engine",
            img:"/images/cardetails/tucson/performance/tucson-R 2.0-image-2-pc.jpg",
            details:"R 2.0 l diesel engine"
        },
        {
            tab:"Nu 2.0 l petrol engine",
            img:"/images/cardetails/tucson/performance/tucson-Nu 2.0-image-2-pc.jpg",
            details:"Nu 2.0 l petrol engine"
        }
    ]
    return (
        <section>
                <div className="bg-[#E4DCD3] p-16">
                        <div className="container space-y-8">
                            <h1 className="text-3xl font-semibold">A Supreme Performance: Hyundai TUCSON Car&rsquo;s Outstanding Driving Experience</h1>
                            <p>The all-new Hyundai TUCSON is ready for everything. HTRAC empowers you to take on challenging roads while different modes ensure all your journeys go smooth.</p>

                                <TabImage TabData={details} page="md:grid-cols-2" />
                        </div>
                </div>
                <div className="container md:py-16 space-y-8">
                        <Image src="/images/cardetails/tucson/performance/Hyundai-tucson-suv-interior-top-image-pc-1600x580.jpg" alt="Hyundai-tucson-suv-interior" width={1200} height={600} className="w-full"/>
                        <h2 className="text-3xl font-semibold">Multi terrain modes</h2>

                        <ul className="list-disc text-justify space-y-2" >
                            <li><span className="font-semibold">HTRAC All-Wheel Drive:</span>Trade the tarmac for the road less taken. HTRAC continuously analyzes your speed and road conditions. It automatically optimizes torque distribution among the four wheels and will apply the brakes, if necessary, to ensure maximum traction and directional stability.</li>
                            <li><span className="font-semibold">Multi terrain modes:</span>With a quick flick of the switch, you can adjust the powertrain to suit challenging road and weather conditions: SNOW, MUD and SAND settings ensure you are getting maximum traction when the going gets really rough.</li>
                            <li><span className="font-semibold">Drive mode select:</span>With Drive mode, you get to pick the style suits you best: NORMAL is for relaxed everyday driving while ECO gives you optimal fuel efficiency. SPORT is for quicker acceleration, and *SMART selects the proper driving mode amongst ECO, SPORT and NORMAL by judging the driver&rsquo;s driving habits</li>
                        </ul>



                        <div className="grid grid-cols-4 gap-4 md:pt-28">

                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/tucson/performance/Hyundai-tucson-suv-performance-small-image-800x530-1.jpg" alt="Hyundai-tucson-suv-performance" width={1200} height={600} className="w-full"/>
                                    <h3 className="text-2xl font-semibold">Drive mode select - Eco</h3>
                                    </div>

                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/tucson/performance/Hyundai-tucson-suv-performance-small-image-800x530-2.jpg" alt="Hyundai-tucson-suv-performance" width={1200} height={600} className="w-full"/>
                                    <h3 className="text-2xl font-semibold">Drive mode select - Normal</h3>
                                    </div>
                                    
                                    
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/tucson/performance/Hyundai-tucson-suv-performance-small-image-800x530-3.jpg" alt="Hyundai-tucson-suv-performance" width={1200} height={600} className="w-full"/>
                                    <h3 className="text-2xl font-semibold">Drive mode select - Sport</h3>
                                    </div>

                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/tucson/performance/Hyundai-tucson-suv-performance-small-image-800x530-4.jpg" alt="Hyundai-tucson-suv-performance" width={1200} height={600} className="w-full"/>
                                    <h3 className="text-2xl font-semibold">Drive mode select - Smart</h3>
                                    <p className="text-xs text-[gray]">Disclaimer : Smart mode is applicable only for Diesel trims.</p>
                                    </div>
                        </div>
                </div>

        </section>
    );
};

export default PerformancePage;