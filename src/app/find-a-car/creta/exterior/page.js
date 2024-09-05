

import Experience360 from "@/app/components/Experience360";
import ExtoriorCarDetails from "@/app/components/ExtoriorCarDetails";
import Image from "next/image";






const ExteriorPage = () => {
    const images = [
        '/images/cardetails/creta/exterior/360/su2id-midnight_0.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_1.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_2.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_3.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_4.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_5.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_6.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_7.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_8.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_9.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_11.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_12.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_13.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_14.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_15.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_16.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_17.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_18.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_19.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_20.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_21.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_22.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_23.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_24.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_25.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_26.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_27.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_28.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_29.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_30.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_31.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_32.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_33.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_34.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_35.png',
        '/images/cardetails/creta/exterior/360/su2id-midnight_36.png',
        
        // Add more images if you have more
      ];
      


    return (
        <>
             
              <Experience360 images={images}/>

            <section>

                <ExtoriorCarDetails heading="Front"  image="/images/cardetails/creta/exterior/depan-akordeon.jpg">
                            <div className="container p-16 space-y-8">
                                    

                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                                            <div>
                                            <Image src="/images/cardetails/creta/exterior/2-kolom-Parametric-Jewel-Pattern-Grille-&-Hidden-type-LED-DRL.jpg" alt="image" width={1300} height={700}  />
                                                    <h2 className="text-3xl ">Parametric Jewel Pattern Grille & Hidden-type LED DRL</h2>
                                            </div>
                                            <div>
                                            <Image src="/images/cardetails/creta/exterior/2-kolom-LED-Headlamp-.jpg" alt="image" width={1300} height={700}  />
                                            <h2 className="text-3xl ">LED Headlamp</h2>
                                            </div>

                                    </div>
                            </div>
                </ExtoriorCarDetails>

                <ExtoriorCarDetails heading="Side"  image="/images/cardetails/creta/exterior/samping-akordeon.jpg">
                
                            <div className="container py-8">
                            <Image src="/images/cardetails/creta/exterior/1-kolom-17-inch.jpg" alt="image" width={1300} height={700}  />
                            <h2 className="text-3xl ">17-inch Diamond Cut Alloy Wheels</h2>
                            </div>
                </ExtoriorCarDetails>

                <ExtoriorCarDetails heading="Back"  image="/images/cardetails/creta/exterior/belakang-akordeon.jpg">
                
                            <div className="container py-8">
                            
                            <Image src="/images/cardetails/creta/exterior/1-kolom-LED-Rear-Combination-Lamp-.jpg" alt="image" width={1300} height={700}  className="max-w-[90%] mx-auto"/>
                            <h2 className="text-3xl text-center">LED Rear Combination Lamp</h2>
                                            

                            </div>
                </ExtoriorCarDetails>
            </section>
            
        </>
    );
};

export default ExteriorPage;