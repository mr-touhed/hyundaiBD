import PageBanner from '@/app/components/PageBanner';



const PMSPage = () => {
    return (
        <div className='space-y-16 '>
            <PageBanner img="/images/Pages/pms-banner.jpg"/>
                <section className='container py-8 space-y-4 md:overflow-hidden overflow-x-scroll relative'>
                            <h2 className='text-3xl font-semibold text-center'>Petrol</h2>

                            <table className='w-full sticky top-0 left-0 ' cellPadding={20} border={1}>
                                <thead className='bg-primary text-[white]'>
                                    <td className='border-r'>Models</td>
                                    <td className='border-r'>Air Filter</td>
                                    <td className='border-r'>Fuel Filter</td>
                                    <td className='border-r'>AC Filter</td>
                                    <td className='border-r'>Engine Oil & Filter</td>
                                    <td className='border-r'>Coolant</td>
                                    <td className='border-r'>Spark Plug</td>
                                    <td >Brake oil</td>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>Grandi 10 Nios</td>
                                            <td className='border border-[#F2F2F2]'>30K Km/3Yr</td>
                                            <td className='border border-[#F2F2F2]'>60K Km/6Yr</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>Replace first @ every 100K Km/5Yr; then @ every 40K km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>60K Km</td>
                                            <td className='border border-[#F2F2F2]'>45K Km/ 3 Yr</td>
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>Creta</td>
                                            <td className='border border-[#F2F2F2]'>30K Km/3Yr- G1.5 L MPI Engine
                                            20K Km/2Yr- G1.5 Turbo Engine</td>
                                            <td className='border border-[#F2F2F2]'>60K Km/6Yr</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>Replace first @ every 100K Km/5 Yr ; then @ every 40K km/2 Yr</td>
                                            <td className='border border-[#F2F2F2]'>160K Km - G1.5 L MPI Engine
                                            70K Km - G1.5 Turbo Engine</td>
                                            <td className='border border-[#F2F2F2]'>45K Km/3 Yr</td>
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>Tucson</td>
                                            <td className='border border-[#F2F2F2]'>30K Km/3Yr</td>
                                            <td className='border border-[#F2F2F2]'>60K Km/6Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>Replace first @ every 100K Km/5Yr ; then @ every 40K km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>160K Km</td>
                                            <td className='border border-[#F2F2F2]'>45K Km/ 3 Yr</td>
                                        </tr>
                                       
                                       
                                       
                                       
                                        
                                        
                                </tbody>
                            </table>

                </section>
                <section className='container py-8 space-y-4 md:overflow-hidden overflow-x-scroll'>
                            <h2 className='text-3xl font-semibold text-center'>Diesel</h2>

                            <table className='w-full' cellPadding={20} border={1}>
                                <thead className='bg-primary text-[white]'>
                                    <th className='border-r'>Models</th>
                                    <th className='border-r'>Air Filter</th>
                                    <th className='border-r'>Fuel Filter</th>
                                    <th className='border-r'>AC Filter</th>
                                    <th className='border-r'>Engine Oil & Filter</th>
                                    <th className='border-r'>Coolant</th>
                                    <th className='border-r'>Spark Plug</th>
                                    <th >Brake oil</th>
                                </thead>
                                <tbody>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>Creta</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>Replace first @ every 100K Km/5Yr ; then @ every 30K km/2 Yr</td>
                                            <td className='border border-[#F2F2F2]'>45K Km/ 3 Yr</td>
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>Tucson</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>20K Km/2Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>10K Km/1Yr</td>
                                            <td className='border border-[#F2F2F2]'>Replace first @ every 100K Km/5Yr ; then @ every 30K km/2 Yr</td>
                                            <td className='border border-[#F2F2F2]'>45K Km/ 3 Yr</td>
                                        </tr>
                                </tbody>
                            </table>

                </section>
               
        </div>
    );
};

export default PMSPage;