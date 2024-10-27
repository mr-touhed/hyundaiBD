import ImageSlider from "@/app/components/ImageSlider";
import Image from "next/image";


const PerformancePage = () => {
    const images = [
        '/images/cardetails/stargazer/performance/slider/Drive-Mode-Sport_1-Kolom_230822.jpg',
        '/images/cardetails/stargazer/performance/slider/Eco-Mode_1-Kolom_1120x600_PC_240822.jpg',
        '/images/cardetails/stargazer/performance/slider/Normal-Mode_1-Kolom_1120x600_PC_rev.jpg',
        '/images/cardetails/stargazer/performance/slider/Smart-Mode_1-Kolom_1120x600_PC_240822.jpg',
    ]
    return (
        <div className="container space-y-16 pb-16">
                    <section className="text-center space-y-10">
                            <h1 className="text-3xl  font-semibold ">Maximum performance star</h1>
                            <p>The New STARGAZER is equipped with a Smartstream 1.5L engine with an Intelligent Variable Transmission (IVT) system that produces tough, responsive and efficient performance. The Drive Mode feature is also available to choose the driving style that suits you best</p>
                            <Image src='/images/cardetails/stargazer/performance/Highlight_1kolom_D_1220x600.jpg' alt='hyundai-bd stargazer performance ' width={1200} height={600} className="w-full"/>
                    </section>
                    <section>
                    <Image src='/images/cardetails/stargazer/performance/Performance-EN-1-Kolom_1120x600_PC.jpg' alt='hyundai-bd stargazer performance ' width={1200} height={600} className="w-full"/>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                            <Image src='/images/cardetails/stargazer/performance/Performance-IVT_2-Kolom_544x360.jpg' alt='hyundai-bd stargazer performance ' width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl  font-semibold ">Intelligent Variable Transmission (IVT)</h3>
                            </div>
                            <div className="space-y-2">
                            <Image src='/images/cardetails/stargazer/performance/Performance-Push-Start-Button_2-Kolom_544x360.jpg' alt='hyundai-bd stargazer performance ' width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl  font-semibold ">Push Button Start</h3>
                            </div>
                    </section>
                    <section>
                                <div className="text-center space-y-3">
                                <h2 className="text-3xl font-bold">Drive Mode</h2>
                                <p>New STARGAZER comes with four driving styles.</p>
                                <p><b>Normal</b> for everyday driving, <b>Eco</b> for fuel efficiency, <b>Sport</b> for maximum vehicle performance, and <b>Smart</b> which automatically adjusts the gearshift interval based on the driver&#39;s pattern.</p>
                                </div>
                            
                            
                    </section>
                    <section>
                    <ImageSlider gallary={images}/>
                    </section>
        </div>
    );
};

export default PerformancePage;