

import Experience360 from "@/app/components/Experience360";
import Image from "next/image";
import ExtoriorCarDetails from "./_components/ExtoriorCarDetails";





const ExteriorPage = () => {
    const images = [
        '/images/cardetails/palisade/exterior/360/id-lx2abys_0.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_1.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_2.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_3.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_4.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_5.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_6.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_7.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_8.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_9.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_10.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_11.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_12.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_13.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_14.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_15.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_16.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_17.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_18.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_19.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_20.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_21.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_22.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_23.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_24.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_25.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_26.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_27.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_29.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_30.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_31.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_32.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_33.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_34.png',
        '/images/cardetails/palisade/exterior/360/id-lx2abys_35.png',
        
        // Add more images if you have more
      ];
      


    return (
        <>
             
              <Experience360 images={images}/>

            <section>

                <ExtoriorCarDetails heading="Front" title="Full LED headlamps / Dark chrome radiator grille" image="/images/cardetails/palisade/exterior/Accordion_Depan-Desktop_1920x580.jpg">
                            <div className="container p-16 space-y-8">
                                    <div>
                                    <h2 className="text-3xl text-center">Even Bolder.</h2>
                                    <Image src="/images/cardetails/palisade/exterior/Exterior_Premium-Parametric-Shield_2-Kolom_1120x600_PC.jpg" alt="image" width={1300} height={700}  />
                                    </div>

                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                            <Image src="/images/cardetails/palisade/exterior/Exterior_LED-DRL_2-Kolom_544x360.jpg" alt="image" width={1300} height={700}  />
                                                    <h2 className="text-3xl ">LED DRL + Full LED Headlamps (Hi/Low)</h2>
                                            </div>
                                            <div>
                                            <Image src="/images/cardetails/palisade/exterior/Exterior_Dark-chrome-grille_2-Kolom_544x360.jpg" alt="image" width={1300} height={700}  />
                                            <h2 className="text-3xl ">Dark chrome grille</h2>
                                            </div>

                                    </div>
                            </div>
                </ExtoriorCarDetails>

                <ExtoriorCarDetails heading="Side" title='20" Alloy Wheel' image="/images/cardetails/palisade/exterior/Accordion_Samping-Desktop_1920x580.jpg">
                
                            <div className="container py-8">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                            <Image src="/images/cardetails/palisade/exterior/Exterior_Outside-mirror_2-Kolom_544x360.jpg" alt="image" width={1300} height={700}  />
                                                    <h2 className="text-3xl ">Outside mirror with LED turn signal</h2>
                                            </div>
                                            <div>
                                            <Image src="/images/cardetails/palisade/exterior/Exterior_20-Inch-Alloy-Wheel_2-Kolom_544x360.jpg" alt="image" width={1300} height={700}  />
                                            <h2 className="text-3xl ">20&ldquo; Alloy Wheel*</h2>
                                            </div>

                                    </div>
                            </div>
                </ExtoriorCarDetails>

                <ExtoriorCarDetails heading="Rear" title='LED rear combination lamps' image="/images/cardetails/palisade/exterior/Accordion_Belakang-Desktop_1920x580.jpg">
                
                            <div className="container py-8">
                            
                                            <div className="space-y-8">
                                            <h2 className="text-3xl text-center">LED rear combination lamp</h2>
                                            <Image src="/images/cardetails/palisade/exterior/Exterior_LED-rear_1-Kolom_1120x600_PC.jpg" alt="image" width={1300} height={700}  className="max-w-[90%] mx-auto"/>
                                                    
                                            </div>
                                            

                            </div>
                </ExtoriorCarDetails>
            </section>
            
        </>
    );
};

export default ExteriorPage;