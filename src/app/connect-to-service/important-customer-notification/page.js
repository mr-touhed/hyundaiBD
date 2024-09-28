import PageBanner from "@/app/components/PageBanner";


const page = () => {
    return (
        <div className="mb-16">
           <PageBanner img="/images/pages/pms-banner.jpg"/>
           <section className="container space-y-8">
            <h1 className="text-3xl font-semibold ">Recall Campaign
            </h1>
            <p>As a responsible organization, keeping in mind environment and customers safety, Hyundai Motor India Limited has announced to proactively undertake Recall Campaigns. Recall campaigns are undertaken globally to inspect and rectify faults or errors, if any, that may be potential safety defects and/or reduce inconvenience to the customer. In the interest of customers, Hyundai Motor has decided to voluntarily run the Recall campaigns for the affected customers.</p>
            <p>In compliance with guidelines issued by Ministry of Road Transport & Highways, Government of Bangladesh (MoRTH), affected vehicle customers will also be notified of the recall by Hyundai Motor Bangladesh Ltd and its Authorised Dealers.</p>

           </section>
           <section className="bg-[#F6F3F2]">
                <div className="container space-y-8">
                        <div>
                        <h2 className="text-2xl font-semibold">What is a VIN?</h2>
                        <p>A unique 17-character serial number used to identify individual motor vehicles.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Where do I find my VIN?</h3>
                            <div className="space-y-2">
                                <ul className="list-inside list-disc text-xl font-bold">
                                    <li className="font-bold">Inside your vehicle:</li>
                                </ul>
                                <p>Floor under the Front right seat</p>
                                <p>Certification label on driver’s (or front passenger’s) side centre pillar</p>
                            </div>
                            <div className="space-y-2">
                                <ul className="list-inside list-disc text-xl font-bold">
                                    <li className="font-bold">Car related documents:</li>
                                </ul>
                                <p>Car Registration Certificate</p>
                                <p>Car Insurance Policy Document</p>
                            </div>
                        </div>
                </div>

           </section>
        </div>
    );
};

export default page;