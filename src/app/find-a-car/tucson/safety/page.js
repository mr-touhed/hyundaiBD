import TabImage from "@/app/components/TabImage";
import Image from "next/image";
import ColumnSlider from "./_components/ColumnSlider";


const SafetyPage = () => {
    const data = [
        {
            tab:"Six airbags",
            img:"/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-top-image-1120x600-1.jpg",
            details:"Six airbags - Driver, passenger, side & curtain"
        },
        {
            tab:"Vehicle stability management (VSM)",
            img:"/images/cardetails/tucson/safety/tucson-suv-safety-top-image1.jpg",
            details:"Vehicle stability management (VSM)"
        },
        {
            tab:"Electric parking brake & front parking sensors",
            img:"/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-top-image-1120x600-3.jpg",
            details:"Electric parking brake & front parking sensors"
        },
        {
            tab:"Electronic stability control (ESC)",
            img:"/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-top-image-1120x600-4.jpg",
            details:"Electronic stability control (ESC)"
        },
    ]
    return (
        <section>
                <div className="container py-16 space-y-3">
                            <h1 className="text-3xl font-semibold ">Hyundai TUCSON Car Safety: The Confidence of 60+ Safety Features</h1>
                            <p>The all-new Hyundai TUCSON is loaded with advanced tech that ensures a better driving experience and a range of features to ensure your safety.</p>
                </div>

                <div className="bg-[#F6F3F2] py-16 ">
                        <div className="container">
                                <TabImage TabData={data} page="md:grid-cols-4"/>
                        </div>
                </div>

                <div className="container space-y-16 md:py-16">
                            <div className="grid md:grid-cols-3 gap-6">

                                <div className="space-y-2">
                                        <Image src="/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-small-image.jpg" alt="Hyundai_BD-tucson-suv-safety" width={1200} height={600}/>
                                    <h2 className="text-2xl font-semibold">Hill-start Assist Control (HAC)</h2>
                                </div>
                                <div className="space-y-2">
                                        <Image src="/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-small-image-2.jpg" alt="Hyundai_BD-tucson-suv-safety" width={1200} height={600}/>
                                    <h2 className="text-2xl font-semibold">TPMS (Highline)</h2>
                                </div>
                                <div className="space-y-2">
                                        <Image src="/images/cardetails/tucson/safety/Hyundai-tucson-suv-safety-small-image-4.jpg" alt="Hyundai_BD-tucson-suv-safety" width={1200} height={600}/>
                                    <h2 className="text-2xl font-semibold">All four disc brakes</h2>
                                </div>



                            </div>


                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold">Hyundai SmartSense (Best in segment)</h2>
                                <p className="text-justify">Advanced Driver Assistance System (ADAS) uses automated sensing technology with radars, sensors and cameras to detect obstacles on the road & respond with countermeasures for impact avoidance. Thus offering comprehensive protection on the road. The all-new Hyundai TUCSON comes with cutting-edge autonomous level 2 ADAS system for a smart & intuitive driving experience.</p>
                            </div>
                </div>

                <div className="py-16">

                    <ColumnSlider/>

                </div>


        </section>
    );
};

export default SafetyPage;