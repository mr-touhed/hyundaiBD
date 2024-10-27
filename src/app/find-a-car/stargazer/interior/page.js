import TabImage from "@/app/components/TabImage";
import Image from "next/image";



const IntoriorPage = () => {
    const data = [
        {
            tab:"6-Seater",
            img:"/images/cardetails/stargazer/interior/TopView-6Seat_1kolom_D_1220x600.png"
        },
        {
            tab:"7-Seater",
            img:"/images/cardetails/stargazer/interior/TopView-7Seat_1kolom_D_1220x600.png"
        },
    ]
    return (
        <div className="container pb-16">
                        <section>
                                <TabImage TabData={data} page="md:grid-cols-2"/>
                        </section>
                        <section className="space-y-8 mt-16 ">
                                <h1 className="text-3xl font-semibold text-center">Better visibility</h1>
                                <Image src="/images/cardetails/stargazer/interior/Visibilitas_1kolom_D_1220x600.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>
                        </section>

                        <section>
                                <div className="text-center space-y-10 py-10">
                                    <h2 className="text-3xl font-semibold">The star of innovation</h2>
                                    <p>You can experience convenience after convenience with innovative technology provided by New STARGAZER. There is an 8” Display Audio with smartphone connectivity, Wireless Smartphone Charger, and other advanced features that provide comfort for your and your family&#39;s trips.</p>
                                </div>
                        </section>

                        <section className="grid md:grid-cols-2 gap-6">

                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/KS_RHD_AMBIENT_MOODLAMP_2kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h2 className="text-3xl font-semibold text-center">Ambient Mood Lighting (Prime)</h2>
                                </div>
                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/Interior-Full-Segment-LCD-Cluster-2-Kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h2 className="text-3xl font-semibold text-center">Full Digital Cluster with 4.2” TFT LCD</h2>
                                </div>
                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/KS_RHD_EPB_2kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h2 className="text-3xl font-semibold text-center">Electric Parking Brake</h2>
                                </div>
                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/KS_RHD_8_DISPLAY_2kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h2 className="text-3xl font-semibold text-center">8” Display Audio with Smartphone Connectivity</h2>
                                </div>
                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/KS_RHD_WIRELESS_CHARGING_2kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h2 className="text-3xl font-semibold text-center">Wireless Smartphone Charger</h2>
                                </div>
                                <div className="space-y-8">
                                <Image src="/images/cardetails/stargazer/interior/KS_RHD_LEATHER_SEAT_2kolom_544x360.jpg" alt="Hyundai-bd stargazer interior" width={1200} height={600} className="w-full"/>  
                                <h3 className="text-3xl font-semibold text-center">12 V Power Outlet + USB Multimedia Port</h3>
                                </div>
                                
                        </section>
        </div>
    );
};

export default IntoriorPage;