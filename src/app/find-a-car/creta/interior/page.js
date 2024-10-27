import ExtoriorCarDetails from "@/app/components/ExtoriorCarDetails";
import ImageSlider from "@/app/components/ImageSlider";
import Image from "next/image";



const IntoriorPage = () => {
    const gallery = [
        '/images/cardetails/creta/interior/slider/1-kolom-Hyundai-CREATA-Configurator-1.jpg',
        '/images/cardetails/creta/interior/slider/1-kolom-Hyundai-CREATA-Configurator-2.jpg',
        '/images/cardetails/creta/interior/slider/1-kolom-Hyundai-CREATA-Configurator-3.jpg',
        '/images/cardetails/creta/interior/slider/1-kolom-Hyundai-CREATA-Configurator-4.jpg',
    ]
    return (
        <div >
                <section className="container">
                        <Image src="/images/cardetails/creta/interior/1-kolom-Hyundai-CREATA-Configurator-2.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                </section>
                <section>
                        <ExtoriorCarDetails image="/images/cardetails/creta/interior/fitur-interior.jpg" heading="Interior Feature">
                                    <div className="container">
                                    <div className="text-center space-y-8 py-8">
                                            <h2 className="text-3xl font-semibold ">Within the spotlight</h2>  
                                            <p>Come in and feel. The 10.25-inch TFT LCD Instrument Cluster technology and 8-inch Display Audio integrated with smartphones provide a touch of the future on your every trip.</p> 
                                            <Image src="/images/cardetails/creta/interior/1-kolom-LCD-Meter-Cluster.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                                    </div> 
                                    <section className="mt-8 grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                            <Image src="/images/cardetails/creta/interior/2-kolom-8-inch-Display-Audio-with-Smartphone-Integration.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                                            <h4 className="text-2xl font-semibold">8-inch Display Audio with Smartphone Integration</h4>
                                            </div>
                                            <div className="space-y-6">
                                            <Image src="/images/cardetails/creta/interior/2-kolom-Ambient-Mood-Lamp.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                                            <h4 className="text-2xl font-semibold">Ambient Mood Lamp</h4>
                                            </div>
                                    </section>
                                    </div>
                        </ExtoriorCarDetails>
                </section>


                <section className="container space-y-8 mt-16">
                        <h2 className="text-3xl font-semibold text-center">The ultimate flexibility & comfort</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                        <Image src="/images/cardetails/creta/interior/2-kolom-flexi-seat.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                        <Image src="/images/cardetails/creta/interior/2-kolom-spacious-cabin.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                        <Image src="/images/cardetails/creta/interior/2-kolom-spacious-kabin.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                        <Image src="/images/cardetails/creta/interior/2-kolom-flexi-comfort-seat.jpg" alt="hyundai-bd-creta interior image" width={1200} height={600} className="w-full"/>
                        </div>
                </section>
                <section className="container my-16">
                        <ImageSlider gallary={gallery} color="#002C5F"/>
                </section>
        </div>
    );
};

export default IntoriorPage;