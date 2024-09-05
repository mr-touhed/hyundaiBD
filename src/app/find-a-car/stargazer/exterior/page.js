import Experience360 from "@/app/components/Experience360";
import ExtoriorCarDetails from "@/app/components/ExtoriorCarDetails";
import Image from "next/image";

const ExteriorPage = () => {

    const threeSixtyImages =[
        '/images/cardetails/stargazer/exterior/360/ks-creamy_0.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_1.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_2.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_3.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_4.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_5.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_6.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_7.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_8.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_9.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_10.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_11.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_12.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_13.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_14.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_15.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_16.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_17.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_18.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_19.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_20.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_21.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_22.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_23.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_24.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_25.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_26.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_27.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_28.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_29.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_30.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_31.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_32.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_33.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_34.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_35.png',
        '/images/cardetails/stargazer/exterior/360/ks-creamy_36.png',
    ]
    return (
        <div>
                <div className="container space-y-16">
                <section>
                            <Experience360 images={threeSixtyImages}/>
                </section>
                <section className="space-y-12 py-16">
                        <h2 className="text-3xl font-semibold text-center">Look stunning like a star.</h2>
                        <p className="text-center">The futuristic and dynamic design will be immediately visible through the <b>one curve design</b> that was created to turn away every glance. Equipped with <b>Horizon type DRL (Daytime Running Lights) and H-shape LED Rear Combination Lamp,</b> the New STARGAZER is even more charming with an exterior that makes you and your family look stunning like stars.</p>
                        <Image src="/images/cardetails/stargazer/exterior/23MY_KS_RHD_SIDE_MAIN_1kolom_D_.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className="w-full"/>
                </section>
                </div>
                <section>
                        <ExtoriorCarDetails heading="Front" title="" image="/images/cardetails/stargazer/exterior/Accordion-Desktop_1920x580_Depan.jpg" >
                                        <div className="container  p-16 space-y-6 text-center">
                                            <h2 className="text-3xl font-semibold">Horizon DRL</h2>
                                            <Image src="/images/cardetails/stargazer/exterior/Eksterior_1kolom_D_1220x600.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=" w-full"/>



                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                <Image src="/images/cardetails/stargazer/exterior/1LED-Headlamp_2kolom_544x360.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=""/>
                                                <h2 className="text-3xl font-semibold">Horizon DRL</h2>
                                                </div>
                                                <div className="space-y-4">
                                                <Image src="/images/cardetails/stargazer/exterior/Exterior-LED-Headlight_2kolom_544x360.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=" "/>
                                                <h2 className="text-3xl font-semibold">Horizon DRL</h2>
                                                </div>
                                            </div>
                                        </div>

                        </ExtoriorCarDetails>
                        <ExtoriorCarDetails heading="Side" title="" image="/images/cardetails/stargazer/exterior/Accordion-Desktop1_1920x580_Samping.jpg" >
                                        <div className="container  p-16 space-y-6 text-center">
                                            <h2 className="text-3xl font-semibold">16” Diamond Cut Alloy Wheels (Prime & Style)</h2>
                                            <Image src="/images/cardetails/stargazer/exterior/16-Sporty-Alloy-Wheels-23MY_KS_RHD_SIDE_MAIN.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=" w-full"/>



                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                <Image src="/images/cardetails/stargazer/exterior/Exterior-Outside-Rear-View-Mirror_2-Kolom_544x360.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=""/>
                                                <h2 className="text-3xl font-semibold">Outside Rear View Mirror with Turn Signal</h2>
                                                </div>
                                                <div className="space-y-4">
                                                <Image src="/images/cardetails/stargazer/exterior/Exterior-Smart-Key-Button_2-Kolom_544x360.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=" "/>
                                                <h2 className="text-3xl font-semibold">Smart Key Button - Front Door(Style & Prime)</h2>
                                                </div>
                                            </div>
                                        </div>

                        </ExtoriorCarDetails>
                        <ExtoriorCarDetails heading="Rear" title="" image="/images/cardetails/stargazer/exterior/Accordion-Desktop_1920x580_Belakang.jpg" >
                                        <div className="container  p-16 space-y-6 text-center">
                                            <h2 className="text-3xl font-semibold">H-shape LED Rear Combination Lamp</h2>
                                            <Image src="/images/cardetails/stargazer/exterior/H-shape-LED-Rear-Combination_1kolom_D_1220x600.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className=" w-full"/>



                                            
                                                <div className="space-y-4">
                                                <Image src="/images/cardetails/stargazer/exterior/LED-High-Mount-Stop-Lamps_1kolom_D_1220x600.jpg" alt="hyundai bd car stargazer exterior" width={1200} height={600} className="w-full"/>
                                                <h2 className="text-3xl font-semibold">LED High Mount Stop Lamps with Rear Spoiler</h2>
                                                </div>
                                                
                                            
                                        </div>

                        </ExtoriorCarDetails>
                </section>
        </div>
    );
};

export default ExteriorPage;