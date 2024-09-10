import PageBanner from '@/app/components/PageBanner';


const ThrottlebodyPage = () => {
    return (
        <>
            <PageBanner img="/images/pages/beautification-banner.jpg"/>

            <div className='bg-[#F6F3F2] py-8'>
                <section className='container space-y-8'>
                    <h1 className='text-3xl font-semibold text-center'>Throttle Body Cleaning</h1>
                    <div className='max-w-full md:overflow-hidden overflow-x-scroll'>
                    <table className='w-full text-center bg-[white]' cellPadding={15}>
                        <tr className='bg-primary text-[white]'>
                            <th className='border-r border-[white]'>VENDOR</th>
                            <th className='border-r border-[white]'>PRODUCT</th>
                            <th className='border-r border-[white] w-[250px]'>TOTAL QUANTITY</th>
                            <th className='border-r border-[white] w-[350px]'>PRICE (TK)*</th>
                            <th className='border-r border-[white]'>BENEFITS</th>
                        </tr>
                        <tbody >
                                <tr>
                                    <td className='border border-[#EEEDF2] p-10'>Wynns</td>
                                    <td className='border border-[#EEEDF2] p-10'>Air Intake Cleaner (Petrol)</td>
                                    <td className='border border-[#EEEDF2] p-10'>As per procedure</td>
                                    <td className='border border-[#EEEDF2] p-10'>334</td>
                                    <td className='border border-[#EEEDF2] p-10'>Better Fuel Economy, Removes dirt</td>
                                </tr>
                                <tr>
                                    <td className='border border-[#EEEDF2] p-10'>Elvi Bardahl</td>
                                    <td className='border border-[#EEEDF2] p-10'>Throttle Body Cleaning</td>
                                    <td className='border border-[#EEEDF2] p-10'>As per procedure	</td>
                                    <td className='border border-[#EEEDF2] p-10'>276</td>
                                    <td className='border border-[#EEEDF2] p-10'>Better Fuel Economy, Removes dirt</td>
                                </tr>
                                <tr>
                                    <td className='border border-[#EEEDF2] p-10'>3M, Horizon, Wuerth</td>
                                    <td className='border border-[#EEEDF2] p-10'>Throttle Body Cleaning	</td>
                                    <td className='border border-[#EEEDF2] p-10'>As per procedure</td>
                                    <td className='border border-[#EEEDF2] p-10'>358</td>
                                    <td className='border border-[#EEEDF2] p-10'>Better Fuel Economy, Removes dirt</td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                        <p><b>Disclaimer :</b> These are indicative prices. For details kindly contact your dealer.</p>
                        <p>*GST will be extra</p>
                </section>

            </div>
        </>
    );
};

export default ThrottlebodyPage;