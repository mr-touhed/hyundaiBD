import ImageSlider from "@/app/components/ImageSlider";
import Image from "next/image";


const PerformancePage = () => {
    const images = [
        '/images/cardetails/creta/performance/slider/1-kolom-drive-mode.jpg',
        '/images/cardetails/creta/performance/slider/1-kolom-drive-modecomfort.jpg',
        '/images/cardetails/creta/performance/slider/1-kolom-drive-mode-sport.jpg',
        '/images/cardetails/creta/performance/slider/1-kolom-drive-moe-smart.jpg',
    ]
    return (
        <div className="container space-y-16 pb-16">
                    <section className="text-center space-y-10">
                            <h1 className="text-3xl  font-semibold ">Impressive performance.</h1>
                            <p>Armed with a 1.5L Smartstream engine with an Intelligent Variable Transmission (IVT) system, it produces tough, responsive, and efficient performance. Also equipped with a Drive Mode feature to choose the most suitable driving style for you.</p>
                            <Image src='/images/cardetails/creta/performance/1-kolom-impression-performance.jpg' alt='hyundai-bd creta performance ' width={1200} height={600} className="w-full"/>
                    </section>
                    <section>
                    <Image src='/images/cardetails/creta/performance/1-kolom-smart-stream-EN.jpg' alt='hyundai-bd creta performance ' width={1200} height={600} className="w-full"/>
                    </section>
                    <section>
                    <ImageSlider gallary={images}/>
                    </section>
                    <section>

                            <h2 className="text-3xl font-semibold text-center my-6">Intelligent Variable Transmission (IVT)</h2>
                            <Image src='/images/cardetails/creta/performance/1-kolom.jpg' alt='hyundai-bd creta performance ' width={1200} height={600} className="w-full"/>

                    </section>

                    <section className="space-y-8 text-center">
                    <h2 className="text-3xl font-semibold text-center my-6">Traction Control Mode</h2>
                    <p>By adjusting the right/left wheel slip control according to engine torque and gearshift pattern, Traction Control Mode automatically fine-tunes the CRETA front-wheel-drive system to adapt to road conditions.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                            <Image src='/images/cardetails/creta/performance/2-kolom-sand.jpg' alt='hyundai-bd creta performance ' width={1200} height={600} className="w-full"/>
                            <Image src='/images/cardetails/creta/performance/2-kolom-mud.jpg' alt='hyundai-bd creta performance ' width={1200} height={600} className="w-full"/>
                            </div>
                    </section>
                    
        </div>
    );
};

export default PerformancePage;