import PageBanner from '@/app/components/PageBanner';



const PMSPage = () => {
    return (
        <div className='space-y-16 '>
            <PageBanner img="/images/Pages/pms-banner.jpg"/>
                <section className='container py-8 space-y-4 md:overflow-hidden overflow-x-scroll relative'>
                            <h2 className='text-3xl font-semibold text-center'>Free service information</h2>

                            <table className='w-full sticky top-0 left-0 ' cellPadding={20} border={1}>
                                <thead className='bg-primary text-[white]'>
                                    <td className='border-r'>Service</td>
                                    <td className='border-r'>KM</td>
                                    <td className='border-r'>Months</td>
                                    
                                </thead>
                                <tbody>
                                       
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>1ST service</td>
                                            <td className='border border-[#F2F2F2]'>5000 km</td>
                                            <td className='border border-[#F2F2F2]'>6 months </td>
                                            
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>2nd service </td>
                                            <td className='border border-[#F2F2F2]'>10000 km</td>
                                            <td className='border border-[#F2F2F2]'>12 months </td>
                                            
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>3rd service  </td>
                                            <td className='border border-[#F2F2F2]'>15000 km </td>
                                            <td className='border border-[#F2F2F2]'>18 months </td>
                                            
                                        </tr>
                                        <tr >
                                            <td className='border border-[#F2F2F2]'>4th service   </td>
                                            <td className='border border-[#F2F2F2]'>20000 km  </td>
                                            <td className='border border-[#F2F2F2]'>24 months </td>
                                            
                                        </tr>
                                       
                                       
                                       
                                       
                                        
                                        
                                </tbody>
                            </table>

                </section>
                <section className='container py-8 space-y-4 md:overflow-hidden overflow-x-scroll'>
                            <h2 className='text-xl font-thin text-center'>(Whichever comes earlier) *Terms and conditions applied
</h2>

                            {/* <table className='w-full' cellPadding={20} border={1}>
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
                            </table> */}

                </section>
               
        </div>
    );
};

export default PMSPage;