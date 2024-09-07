import Image from "next/image";



const IntoriorPage = () => {
    return (
        <div className="space-y-16">
                <section className="bg-[#E4DCD3] py-16">
                            <div className="container space-y-8 text-center">
                                        <h1 className="text-3xl font-semibold ">Pure delight.</h1>
                                        <p>CRETA GRAND delivers on its promise with a grand-sized cabin that is not only bigger but smarter. You’ll discover thoughtful design touches and
experience pure joy in every detail. From the innovative mechanisms that simplify seat adjustment to the abundance of cabin space, CRETA GRAND is
designed to make a grand impression. The two-tone interior color scheme and perforated leather seats (optional) create a luxurious atmosphere.</p>
<Image src="/images/cardetails/creta-grand/interior/PS7i_LWB_GEN_LHD_INTERIOR_MAIN.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
                            </div>
                </section>
                <section className="container text-center space-y-8">
                        <h2 className="text-3xl font-bold">The ultimate flexibility & comfort.</h2>
                        <section className="grid md:grid-cols-3 gap-4">
                                <div className="space-y-4">
                                <Image src="/images/cardetails/creta-grand/interior/PS7i_GEN_LHD_INTERIOR_10.25_TFT-LCD_CLUSTER.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
                                <h4 className="text-2xl  font-semibold">10.25″ TFT LCD cluster</h4>
                                </div>
                                <div className="space-y-4">
                                <Image src="/images/cardetails/creta-grand/interior/PS7i_GEN_LHD_INTERIOR_8INCH_TOUCHSCREEN.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
                                <h4 className="text-2xl  font-semibold">8″ touchscreen</h4>
                                </div>
                                <div className="space-y-4">
                                <Image src="/images/cardetails/creta-grand/interior/PS7i_GEN_LHD_INTERIOR_2ND_ROW_WIRELESS_PHONE_CHARGER.jpg" alt="hyundai bd creta-grand interior images" width={1200} height={600} className="w-full"/>
                                <h4 className="text-2xl  font-semibold">2nd row wireless phone charge</h4>
                                </div>
                        </section>
                </section>
        </div>
    );
};

export default IntoriorPage;