import PageBanner from "@/app/components/PageBanner";


const ManualOilPage = () => {
    return (
        <>
           <PageBanner img="/images/pages/oil-banner.jpg"/>

<div className='bg-[#F6F3F2] py-16'>
          <section className='container py-8 space-y-8'>
                  <h1 className='text-3xl font-semibold '>Manual Transmission Oil</h1>
                  
                  <div>
                  <h3 className='text-2xl font-semibold '>Benefits</h3>
                  <ul className='list-inside list-disc'>
                      <li>Increased life of transmission components</li>
                      <li>Less sludge and varnish build up</li>
                      <li>Decreases gear noise</li>
                      <li>Less likely to pop out of gear</li>
                      
                  </ul>
                  </div>
          </section>
          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Manual Transmission Oil Petrol</h2>
                      <table className='w-full md:text-base text-xs ' cellPadding={15}>
                              <thead>
                              <tr className='bg-primary text-[white] '>
                              
                              <th  className='md:p-4 border-r border-[white]'>MODEL</th>
                              <th className='md:p-4 border-r border-[white]'>SPECIFICATION & GRADE</th>
                              <th className='md:p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                              <th className='md:p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                              
                          
                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>API GL 4 - SAE 75W85</td>
                                          <td className='border border-[#E4E1E0]'>Creta 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>390</td>
                                       
                                      </tr>
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          

          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Manual Transmission Oil Diesel</h2>
                      <table className='w-full md:text-base text-xs' cellPadding={15}>
                              <thead>
                              <tr className='bg-primary text-[white] '>
                              
                              <th  className='p-6 border-r border-[white]'>MODEL</th>
                              <th className='p-6 border-r border-[white]'>SPECIFICATION & GRADE</th>
                              <th className='p-6 border-r border-[white]'>TOTAL QUANTITY</th>
                              <th className='p-6 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                              
                          
                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.4 / 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>API GL 4 - SAE 75W85</td>
                                          <td className='border border-[#E4E1E0]'>1.7 L - 1.8 L</td>
                                          <td className='border border-[#E4E1E0]'>390</td>
                                       
                                      </tr>
                                      
                                     
                                     
                              </tbody>
                      </table>

                      <p>* Vendor is Indian Oil Servo / Shell</p>
                      <p><b>Disclaimer:</b> These are indicative prices. For details kindly contact your dealer.</p>
          </section>
          
         
</div> 
        </>
    );
};

export default ManualOilPage;