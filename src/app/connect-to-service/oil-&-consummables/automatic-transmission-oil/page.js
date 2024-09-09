import PageBanner from "@/app/components/PageBanner";


const AutomaticOilPage = () => {
    return (
        <>
           <PageBanner img="/images/pages/oil-banner.jpg"/>

<div className='bg-[#F6F3F2] py-16'>
          <section className='container py-8 space-y-8'>
                  <h1 className='text-3xl font-semibold '>Automatic Transmission Oil</h1>
                  
                  <div>
                  <h3 className='text-2xl font-semibold '>Benefits</h3>
                  <ul className='list-inside list-disc'>
                        <li>Increased life of transmission components</li>
                        <li>Less sludge and varnish build up</li>
                        <li>Decreases transmission wear</li>
                        <li>Avoids overheating, improper shifting, transaxle damage</li>
                      
                  </ul>
                  </div>
          </section>
          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Automatic Transmission Oil Petrol</h2>
                      <table className='w-full ' cellPadding={15}>
                              <tr className='bg-primary text-[white] '>
                              
                                  <th  className='p-4 border-r border-[white]'>MODEL</th>
                                  <th className='p-4 border-r border-[white]'>RECOMMENDED GRADE</th>
                                  <th className='p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                                  <th className='p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                                  
                              
                              </tr>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Grand i10</td>
                                          <td className='border border-[#E4E1E0]'>ATF MX4</td>
                                          <td className='border border-[#E4E1E0]'>6.1 L</td>
                                          <td className='border border-[#E4E1E0]'>	2577</td>
                                       
                                      </tr>
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          

          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Automatic Transmission Oil Diesel</h2>
                      <table className='w-full ' cellPadding={15}>
                              <tr className='bg-primary text-[white] '>
                              
                                  <th  className='p-4 border-r border-[white]'>MODEL</th>
                                  <th className='p-4 border-r border-[white]'>RECOMMENDED GRADE</th>
                                  <th className='p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                                  <th className='p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                                  
                              
                              </tr>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>ATF MX4</td>
                                          <td className='border border-[#E4E1E0]'>7.1 L</td>
                                          <td className='border border-[#E4E1E0]'>	2577</td>
                                       
                                      </tr>
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          <section className="container space-y-8">
                        <p>*Indicative Prices for SP-CVTF ₹2134, ATF SP-IV ₹2589, ATF SP-III ₹2454</p>
                        <p><b>Disclaimer:</b> These are indicative prices. For details kindly contact your dealer.</p>

          </section>
         
</div> 
        </>
    );
};

export default AutomaticOilPage;


