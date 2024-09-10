import PageBanner from '@/app/components/PageBanner';


const PostWarrantyPage = () => {
    return (
        <>
            <PageBanner img="/images/pages/post-warranty-banner.jpg"/>
            <div className="space-y-8 py-10">
                <section className="container space-y-8">
                            <h1 className="text-3xl font-semibold ">Road Side Assistance Retail Programme (Post Warranty Vehicle)</h1>
                            <p>Hyundai Roadside Assistance Retail Programme is extension of existing Roadside Assistance Programme. Hyundai 24X7 Roadside Assistance Programme is designed to enhance the Customer&rsquo;s ownership experience and ensure that customers get immediate and hassle free service in an event of breakdown. The retail programme is applicable to Post warranty vehicles. The programme can be purchased from Hyundai authorised workshop for vehicle ageing less than 7 years from the vehicle sale date.</p>
                </section>
                
               
                <section className="container space-y-8">
                <h1 className="text-3xl font-semibold ">Key Benefits of the Programme</h1>
                    <ul className="list-inside list-disc space-y-1">
                        <li>National Coverage: 24 X 7 assistance across Bangladesh.</li>
                        <li>Break Down/Accident: Roadside repair or vehicle recovery in case of breakdown / road traffic accident to nearest Hyundai workshop.</li>
                        <li>Tyre Related: Tyre punctures-replacement of punctured tyre with a spare tyre.</li>
                        <li>Battery Related: Dead battery-jump start.</li>
                        <li>Key Related: Locked keys, lost keys or broken/damaged vehicle keys.</li>
                        <li>Fuel Related: Out of fuel, incorrect fuel or contaminated fuel.</li>
                        <li>Emergency Fuel Support upto 5 Litres.</li>
                        <li>Taxi Coordination: Taxi coordination in case of any vehicle breakdown/accidental. Cost to be borne by the Customer.</li>
                        
                        
                    </ul>

                            <table className='w-full' cellPadding={15}>
                                    <thead className='bg-[#E4DCD3]'>
                                        <tr>
                                            <th className='font-bold'>Retail RSA coverage</th>
                                            <th className='font-bold'>Package Cost (TK)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border border-[#E4DCD3]'>1 Year</td>
                                            <td className='border border-[#E4DCD3]'>1360/-</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-[#E4DCD3]'>2 Year</td>
                                            <td className='border border-[#E4DCD3]'>2136/-</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-[#E4DCD3]'>3 Year</td>
                                            <td className='border border-[#E4DCD3]'>2805/-</td>
                                        </tr>
                                    </tbody>
                            </table>
                            
                            
                            <p>Roadside Assistance certificate & Owner Booklet need to be collected from the Dealer while purchasing Retail policy. The benefits of the programme will be activated within 48 Hours from the purchase of the policy. For more details, please contact your nearest Hyundai Workshop.</p>
                </section>


            </div>
        </>
    );
};

export default PostWarrantyPage;


