import PageBanner from "@/app/components/PageBanner";


const GenuinePartPage = () => {
    return (
        <>
           <div className="relative">
           <PageBanner img="/images/pages/parts.jpg"/>
                <div className="space-y-3 absolute top-[30%] left-[5%]">
                    <h3 className="text-6xl font-bold">Genuine Parts</h3>
                    <p className="text-lg">The Perfect Opportunity to Tailor your Car</p>
                </div>
           </div>

           <div className="container space-y-16 mb-16">
                        <section className="max-w-[80%] mx-auto space-y-16">
                                <h2 className="text-3xl font-semibold text-center">Hyundai Genuine Parts</h2>
                                <div className="relative  flex justify-center md:flex-row flex-col ">
                                        <div className="bg-[#e2d6ca97] w-[260px] md:-mr-10 text-center p-10 h-[260px] rounded-full grid place-content-center font-bold text-lg text-[#545350]">Guaranteed to
                                        <br/>Fit</div>
                                        <div className="bg-[#e2d6ca97] w-[260px] p-10 text-center h-[260px] rounded-full grid place-content-center font-bold text-lg text-[#545350]">Guaranteed to
                                        Perform</div>
                                        <div className="bg-[#e2d6ca97] w-[260px] md:-ml-10 text-center p-10 h-[260px] rounded-full grid place-content-center font-bold text-lg text-[#545350]">Guaranteed
                                        Genuine</div>
                                </div>
                                <p>Hyundai Genuine Parts are designed and engineered specifically for delivering performance and longevity of your Hyundai cars, all Hyundai Genuine Parts are made to the standards.
                                Hyundai Genuine Parts are tested under various simulated extreme conditions to ensure Quality, Reliability and Durability. Over the years, significant investments in R&D have been made to study the design, material selection and internal construction of Hyundai Genuine Parts. They are also backed by a 6 month/10,000km warranty.</p>
                        </section>
                        <section className="space-y-6">
                                    <h2 className="text-3xl font-semibold">Hyundai Mobis</h2>
                                    <p>Hyundai MOBIS is an exclusive and official partner of Hyundai Motors in Bangladesh as well as globally. Hyundai Mobis is leading the trend of change and strives to become a leading company in automotive future technology.
                                    </p>
                                    <p>We promise to realize the ultimate value that Hyundai Mobis pursues as &lsquo;Safety and Happiness of our customers&lsquo; by steadily advancing into the global market as well as providing fast and accurate as parts .</p>
                        </section>
                        <section className="space-y-6">
                                    <h2 className="text-3xl font-semibold">Don’t settle for second</h2>
                                    <p>The Automotive Parts Market is full of cheap alternatives. As inexpensive as possible, fitting non-Genuine or refurbished Parts to your Hyundai will affect the warranty of your vehicle. Those Parts are not manufactured under such stringent standards as Hyundai Genuine Parts.</p>
                                    <p>Fitting such Parts will not only hamper the quality of your car, but will also affect other parts and cause more problems, leading to more repairs, or worse, an accident.So your family’s safety and peace of mind, always insist on Hyundai Genuine Parts.</p>
                                    <p>For peace of mind, always insist on Hyundai Genuine Parts</p>
                        </section>

           </div>
           
        </>
    );
};

export default GenuinePartPage;