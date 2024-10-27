import Image from "next/image";


const SafetyPage = () => {
    return (
        <div className="space-y-8">
                <section className="container space-y-6 text-center pb-16">
                            <h1 className="text-3xl font-semibold">Always on guard for you</h1>
                            <p>Though the road ahead is filled with uncertainties, CRETA GRAND’s advanced safety systems provide you with complete peace of
mind. Special crush zones serve as your first line of defense. Made of ultra-high tensile strength steel and embedded in critical areas,
these structures are designed to safely absorb impact forces and protect cabin occupants in the event of a collision.
The Blind Spot View Monitor always looks over your shoulder and will alert you if you try to make an unsafe lane change.</p>

<Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_6_AIRBAGS1.jpg" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                </section>

                <div className="bg-[#F6F3F2] py-16 ">
                            <div className="container space-y-16">
                            <section className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_TPMS2.webp" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                                        <h4 className="text-2xl font-semibold">Tire Pressure Monitor System (TPMS)</h4>
                                        <p>TPMS helps you achieve optimal fuel economy and extends tire life by alerting you if the tires require attention.</p>
                                    </div>
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_BVM.jpg" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                                        <h4 className="text-2xl font-semibold">Blind-Spot View Monitor (BVM)</h4>
                                        <p>When the turn signals are activated, the rear-side image of the corresponding direction is displayed in the cluster.</p>
                                    </div>
                            </section>


                            <section className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_8INCH_SVM.jpg" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                                        <h4 className="text-2xl font-semibold">Surround View Monitor (SVM)</h4>
                                        <p>A multi-camera system provides a 360-degree view around the vehicle to assist the driver in parking situations.</p>
                                    </div>
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_6_AIRBAGS.webp" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                                        <h4 className="text-2xl font-semibold">6-airbag system (Driver, Passenger, Side & Curtain)</h4>
                                        <p>CRETA GRAND offers 6 airbags: the driver and front passenger get a pair of front airbags plus a pair of side airbags to protect the thorax and pelvic areas while left and right curtain airbags offer head protection for all cabin occupants.</p>
                                    </div>
                                    <div className="space-y-3">
                                    <Image src="/images/cardetails/creta-grand/safety/PS7i_GEN_LHD_FEATURE_HAC.jpg" alt="hyundai bd creta-grand safety images" width={1200} height={600} className="w-full"/>
                                        <h4 className="text-2xl font-semibold">Hill start Assist Control</h4>
                                        <p>When starting from a stop on a hill, HAC prevents the unintentional rollback that can occur after the brake pedal is released.</p>
                                    </div>
                            </section>
                            </div>

                </div>
        </div>
    );
};

export default SafetyPage;