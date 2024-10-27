import Image from "next/image";


const PerformancePage = () => {
    return (
        <div>
            <section className="container text-center space-y-8">
                    <h1 className="text-3xl font-semibold">Flex that muscle</h1>
                    <p>Mostly you go with the flow, but sometimes you have to make a move and assert yourself. CRETA GRAND’s advanced powertrains deliver all the power you
need for effortless acceleration and passing on the highway. The G2.0 gasoline engine is made of weight-saving aluminum and comes with Multi-Point
Fuel Injection, Dual Overhead Camshafts and Dual Continuously Variable Valve Timing to maximize fuel economy and horsepower. The U2 diesel is fitted
with the latest Variable Geometry Turbocharger to force extra air into the combustion chamber for higher torque output. Plus, CRETA GRAND offers you a
choice of 6-speed transmissions to suit your driving style.</p>
<Image src="/images/cardetails/creta-grand/performance/PS7i_GEN_LHD_EXTERIOR_MAIN_02-1.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
<Image src="/images/cardetails/creta-grand/performance/performance-creta-su2id-r-performance-smartstream-en-original.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
            </section>


            <div className="bg-[#F6F3F2] py-16">
                        <div className="container space-y-8">
                        <section className="text-center space-y-8">
                                        <h2 className="text-3xl font-semibold">Traction Control Mode</h2>
                                        <p>By regulating slip control for the right/left wheels while adjusting engine torque and gear shift patterns, the Traction Control Mode automatically fine tunes
                                        CRETA GRAND’s front wheel drive system to adapt to difficult driving conditions. Optional.</p>
                                        <Image src="/images/cardetails/creta-grand/performance/PS7i_GEN_LHD_FEATURE_TCM-2.webp" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-[500px] mx-auto"/>

                        </section>

                        <section className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                    <Image src="/images/cardetails/creta-grand/performance/PS7i_GEN_LHD_FEATURE_TCM_SUB1.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-[500px] mx-auto"/>
                                        <p className="text-md">When the roads are icy and snow-covered, this setting ensures optimal traction to keep you moving safely and confidently.</p>
                                    </div>
                                    <div className="space-y-2">
                                    <Image src="/images/cardetails/creta-grand/performance/PS7i_GEN_LHD_FEATURE_TCM_SUB2.webp" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-[500px] mx-auto"/>
                                        <p className="text-md">Driving over sand poses special challenges but selecting the Sand setting minimizes wheel slip to keep you out of trouble.</p>
                                    </div>
                                    <div className="space-y-2">
                                    <Image src="/images/cardetails/creta-grand/performance/PS7i_GEN_LHD_FEATURE_TCM_SUB3.webp" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-[500px] mx-auto"/>
                                        <p className="text-md">When tires fail to grip because of mud, this setting automatically applies the correct amount of torque to the left and right wheels to reduce slippage.</p>
                                    </div>
                        </section>
                        </div>
            </div>
        </div>
    );
};

export default PerformancePage;