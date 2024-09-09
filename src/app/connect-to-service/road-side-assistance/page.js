import PageBanner from '@/app/components/PageBanner';
import WaittingPage from '@/app/components/WaittingPage';
import React from 'react';

const page = () => {
    return (
        <>
        
        <div>
        <PageBanner img="/images/Pages/connect-to-service/road-side-assistance/banner.jpg"/>
            <section className='container space-y-6 py-16'>
                    <h1 className='text-3xl font-semibold'>Road Side Assistance Programme (With in Warranty)</h1>
                    <p>Hyundai Road Side Assistance Programme is a 24x7 emergency support provided in the event of any mechanical or electrical breakdown and or traffic accident of a vehicle. It is an initiative to increase the HMIL&rsquo;s focus on its customers. The Road Side Assistance Program was launched with the aim of providing emergency road side assistance services round the clock to ensure a pleasurable and uninterrupted journey virtually anywhere in India</p>
                    
                    <p>The program is designed to enhance the customer ownership experience and ensure that customers get immediate and hassle free service in the event of any car breakdown</p>

                    <p><b>The scheme will be available as a complimentary service for vehicles with in basic warranty period.</b>The 24×7 Road Side Assistance program covers services such as: wheel change, fuel delivery up to 5 litres, taxi co-ordination, opening the vehicle in the event of a key lock-out, rectifying electrical problems related to the battery and fuse, on-spot repairs for complaints that can be attended to on site and car towing to the nearest workshop in cases of an accident or breakdown.</p>
            </section>
            <section className='bg-[#F6F3F2] py-16 text-center'>
                            <h3 className='text-3xl font-semibold'>Our Road Side Assistance Number is : 1800 102 4645 (toll free)</h3>
            </section>
            <section className='space-y-8 container py-16'>
                    <h3 className='text-3xl font-semibold'>Benefits of Road Side Assistance</h3>

                    <ul className='list-inside list-disc'>
                        <li><b>Break Down/Accident :</b>Roadside repair or vehicle recovery in case of breakdown/road traffic accident.</li>
                        <li><b>Tire Related : </b>Tire punctures-replacement of punctured tire with the spare tire.</li>
                        <li><b>Battery Related :</b>Dead battery-jump start.</li>
                        <li><b>Key Related :</b>Locked keys, lost keys or broken vehicle keys.</li>
                        <li><b>Fuel Related :</b>Out of fuel, incorrect fuel or contaminated fuel.</li>
                    </ul>

            </section>

            <section className='space-y-8 container py-16'>
                    <h3 className='text-3xl font-semibold'>Terms & Conditions</h3>

                    <ul className='list-inside list-disc'>
                        <li>The service is applicable for the basic warranty period of the vehicle.</li>
                        <li>National Coverage: 24 X 7 assistance across India.</li>
                        <li>The service is applicable for a condition in which the vehicle has been immobile.</li>
                        <li>Cost of parts replacement is not included, unless covered under Hyundai Warranty.</li>
                        <li>Cost of repairs made to your vehicle is not included, unless it is covered under Hyundai Warranty.</li>
                        
                    </ul>
                        <p>** : Road traffic accident covered for vehicles sold after 1st March 2014</p>
            </section>
        </div>
        </>
        
    );
};

export default page;