import PageBanner from '@/app/components/PageBanner';


const page = () => {
    return (
        <>
           <PageBanner img="/images/pages/ex-warranty-banner.jpg"/>
           <div className='container space-y-16 py-8'>
                    <section className='space-y-4'>
                            <h1 className='text-3xl font-semibold '>Extended Warranty</h1>
                            <p>Hyundai Motor Bangladesh Limited (hereinafter called “HMIL”) warrants that under the Extended Warranty Scheme, HMIL undertakes to carry out the necessary remedial work necessitated by any mechanical and / or electrical breakdown, under normal use and maintenance, subject to the following terms and conditions.</p>
                    </section>
                    <section className='space-y-4'>
                            <h1 className='text-3xl font-semibold '>Note</h1>
                            
                            <ul className='list-inside list-disc'>
                                <li>This Extended Warranty is transferable to subsequent owner for the remaining Warranty Period.</li>
                                <li>This Extended Warranty scheme has no surrender value, no refund of warranty premium is available and it cannot be transferred to another vehicle.</li>
                                <li>Extended Warranty not applicable on Taxi/Fleet and Test Driver vehicles.</li>
                           
                            </ul>
                    </section>
                    <section className='space-y-4'>
                            <h1 className='text-3xl font-semibold '>Warranty Criteria and Prices</h1>
                            
                            <ul className='list-inside list-disc'>
                               <li>To view Extended Warranty Prices for Slab 1(Slab 1=&gt; Within 90 Days from Date of Delivery/Sale) Please  <a className='text-[blue]' href="">click here</a></li>
                               <li>To view Extended Warranty Prices for Slab 2(Slab 2=&gt; After 90 Days & before expiry of Basic/Extended Warranty) Please <a className='text-[blue]' href="">click here</a></li>
                               <li>To view Extended Warranty Terms and Conditions, please <a className='text-[blue]' href="">click here</a></li>
                           
                            </ul>
                    </section>
                    <section className='space-y-4'>
                            <h1 className='text-3xl font-semibold '>Extended Warranty Period</h1>
                            
                            <ul className='list-inside list-disc'>
                                <li>The term of the Extended Warranty shall commence from the date of expiry of the original warranty period mentioned in the Owner’s Manual of the new vehicle and would be in its continuity as per any one of the following options applicable to the vehicle model selected by the Owner.</li>
                            </ul>
                    </section>
           </div>
        </>
    );
};

export default page;