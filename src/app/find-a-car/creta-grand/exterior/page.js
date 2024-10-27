import Image from "next/image";

const ExteriorPage = () => {
    return (
        <>
        
        <div className="bg-[#E4DCD3]">
                <section className="container md:py-16 space-y-8 text-center">
                        <h1 className="text-3xl font-semibold ">Radiating supreme confidence</h1>
                        <p>Modern, sporty, and masculine—it’s just my style, it’s in perfect tune with my sensibilities, and it fits in anywhere. From any angle, CRETA GRAND projects
                        supreme confidence and authority. Your fascination only grows as you move in closer to examine the details: The LED lighting, the strikingly-designed
                        diamond-cut alloy wheels, and the catchy-looking radiator grille. But the real centre of attention and even greater delights await you inside.</p>

                    <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_EXTERIOR_MAIN_01.jpg" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                </section>
        </div>
        <div className="container space-y-8 py-16">
                <section className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_EXTERIOR_DARK_CHROME_SIGNATURE_CASCADING_GRILLE.jpg" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">Signature cascading grille with dark chrom</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_EXTERIOR_DRL.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">Finish LED headlamps with
                            LED DRLs</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_EXTERIOR_18INCH_ALLOY_WHEEL.jpg" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">18″ diamond-cut alloy wheels</h3>

                        </div>
                </section>
                <section className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_LED_HEADLAMP.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">LED MFR headlamps & LED DRLs</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_FRONT_FOG_LAMPS.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">Front fog lamps (LED MFR)</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_LED_REAR_COMBINATION_LAMP.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold">LED rear combination lamp</h3>

                        </div>
                </section>
                <section className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_FRONT_DISTANCE_WARNING.jpg" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-3xl font-semibold">Front distance warning</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_PANORAMIC_SUNROOF.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-3xl font-semibold">Panoramic sunroof</h3>

                        </div>
                       
                </section>
                <section className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_17INCH_ALLOY_WHEEL.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold text-center">17″ Alloy wheels</h3>

                        </div>
                        <div className="space-y-4">
                        <Image src="/images/cardetails/creta-grand/exterior/PS7i_GEN_LHD_FEATURE_18INCH_ALLOY_WHEEL.webp" alt="hyundai bd creta-grand exterior images" width={1200} height={600} className="w-full"/>
                            <h3 className="text-2xl font-semibold text-center">18″ Alloy wheels</h3>

                        </div>
                       
                </section>
        </div>

        </>
    );
};

export default ExteriorPage;