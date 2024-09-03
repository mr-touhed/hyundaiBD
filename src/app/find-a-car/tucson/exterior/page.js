import Experience360 from "@/app/components/Experience360";
import Image from "next/image";
import TabSliderCarDetails from "./_components/TabSliderCarDetails";

const ExteriorPage = () => {
    const images = [
        '/images/cardetails/tucson/exterior/360/amazon-grey_0.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_1.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_2.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_3.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_4.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_5.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_6.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_7.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_8.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_9.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_10.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_11.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_12.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_13.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_14.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_15.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_16.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_17.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_18.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_19.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_20.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_21.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_22.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_23.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_24.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_25.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_26.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_27.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_28.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_29.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_30.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_31.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_32.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_33.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_34.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_35.png',
        '/images/cardetails/tucson/exterior/360/amazon-grey_36.png',
    ]
    return (
        <section>
                <div className="container space-y-8">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">Hyundai TUCSON Car Exteriors: Next Drives Now</h1>
                                <p>For some, success is not a finishing line but a starting point. The all-new Hyundai TUCSON is their SUV of choice. With looks that redefine elegance and are complimented with state-of-the-art technology that stands apart. Add the unique Hyundai SmartSense features and it is virtually intuition on wheels. Truly, the next gen of SUVs.</p>
                            </div>
                            <Experience360 images={images}/>

                            <Image src={`/images/cardetails/tucson/exterior/Hyundai-tucson-suv-exterior-top-pc-1600x580.jpg`} alt="Hyundai-bd-tucson-suv-exterior" width={1200} height={600} className="w-full"/>
                </div>

                <div className="bg-[#E4DCD3] md:p-16">

                    <div className="container">
                                <TabSliderCarDetails/>
                    </div>
                </div>
        </section>
    );
};

export default ExteriorPage;