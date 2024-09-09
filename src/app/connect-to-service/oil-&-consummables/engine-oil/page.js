import PageBanner from '@/app/components/PageBanner';


const EngineOilPage = () => {
    return (
        <>
            <PageBanner img="/images/pages/oil-banner.jpg"/>

<div className='bg-[#F6F3F2] py-16'>
          <section className='container py-8 space-y-8'>
                  <h1 className='text-3xl font-semibold '>Engine Oil</h1>
                  <p>The prime function of engine oil is to lubricate the engine parts, which are in constant friction. It thus reduces friction which tends to increase wear & tear of engine parts.</p>
                  <div>
                  <h3 className='text-2xl font-semibold '>Benefits</h3>
                  <ul className='list-inside list-disc'>
                      <li>Keeps engine clean on inside</li>
                      <li>Keeps engine cool</li>
                      <li>Prevents rusting of engine parts</li>
                      <li>Less sludge build up</li>
                      <li>Improves engine performance and fuel economy</li>
                      <li>Increased life of the engine</li>
                  </ul>
                  </div>
          </section>
          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold text-center'>Interior Surface Sanitization</h2>
                      <table className='w-full ' cellPadding={15}>
                              <tr className='bg-primary text-[white] '>
                              
                                  <th  className='p-6 border-r border-[white]'>
                                  Description</th>
                                  <th className='p-6 border-r border-[white]'>Model</th>
                                  <th className='p-6 border-r border-[white]'>Fuel Type</th>
                                  <th className='p-6 border-r border-[white]'>Engine Oil Spec</th>
                                  <th className='p-6 border-r border-[white]'>Engine Oil Qty</th>
                                  <th className='p-6 border-r border-[white]'>Engine Oil Price(₹/Ltr)</th>
                                  <th className='p-6 border-r border-[white]'>Coolant Oty</th>
                                  <th className='p-6 border-r border-[white]'>Brake Oil QTY</th>
                              
                              </tr>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.5L</td>
                                          <td className='border border-[#E4E1E0]'>Petrol</td>
                                          <td className='border border-[#E4E1E0]'>API SN Plus 0W20</td>
                                          <td className='border border-[#E4E1E0]'>3.8</td>
                                          <td className='border border-[#E4E1E0]'>415</td>
                                          <td className='border border-[#E4E1E0]'>6.76(M)/6.1(IVT)</td>
                                          <td className='border border-[#E4E1E0]'>0.8</td>
                                          
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.5L Turbo</td>
                                          <td className='border border-[#E4E1E0]'>Petrol</td>
                                          <td className='border border-[#E4E1E0]'>ACEA C2 0W30</td>
                                          <td className='border border-[#E4E1E0]'>4.2</td>
                                          <td className='border border-[#E4E1E0]'>430</td>
                                          <td className='border border-[#E4E1E0]'>6.5</td>
                                          <td className='border border-[#E4E1E0]'>0.8</td>
                                          
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.5</td>
                                          <td className='border border-[#E4E1E0]'>Diesel</td>
                                          <td className='border border-[#E4E1E0]'>ACEA C5 0W20</td>
                                          <td className='border border-[#E4E1E0]'>4.8</td>
                                          <td className='border border-[#E4E1E0]'>425</td>
                                          <td className='border border-[#E4E1E0]'>6.9</td>
                                          <td className='border border-[#E4E1E0]'>0.8</td>
                                          
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Tucson 2.0L</td>
                                          <td className='border border-[#E4E1E0]'>Petrol</td>
                                          <td className='border border-[#E4E1E0]'>API SN Plus 0W20</td>
                                          <td className='border border-[#E4E1E0]'>4</td>
                                          <td className='border border-[#E4E1E0]'>415</td>
                                          <td className='border border-[#E4E1E0]'>6.8</td>
                                          <td className='border border-[#E4E1E0]'>0.8</td>
                                          
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Tucson 2.0L</td>
                                          <td className='border border-[#E4E1E0]'>Diesel</td>
                                          <td className='border border-[#E4E1E0]'>ACEA C5 0W20</td>
                                          <td className='border border-[#E4E1E0]'>7.6</td>
                                          <td className='border border-[#E4E1E0]'>425</td>
                                          <td className='border border-[#E4E1E0]'>8.8</td>
                                          <td className='border border-[#E4E1E0]'>0.8</td>
                                          
                                      </tr>
                                     
                              </tbody>
                      </table>
          </section>
          
          
          <section className='container py-8 space-y-8'>
                      <div>
                        <p>Maintenance Schedule: Every 10,000 km or 1 year (whichever comes earlier)</p>
                        <p>*M: Manual Transmission</p>
                        <p>** IVT: Intelligent Variable Transmission</p>
                      </div>
                      <div>
                            <h3 className='text-xl font-semibold'>Other Engine Oils</h3>
                            <ul className='space-y-8 list-inside list-decimal'>
                                <li>Engine Oil: 5W30 ACEA A3/B4- Applicable for models with BS IV Petrol/Diesel Engine
                                Price: ₹399/Ltr (IOCL/Shell)</li>
                                <li>Synthetic Engine Oil# (Optional product): 5W30 ACEA A5/B5- Applicable for models with BS IV Petrol/Diesel Engine
                                IOCL Price ₹900/Ltr and Shell Price ₹934/Ltr</li>
                                <li>Synthetic Engine Oil# (Optional product): OW30 API SP- Applicable for models with BS VI Petrol/Diesel Engine
                                IOCL Price ₹970/Ltr and Shell Price ₹1020/Ltr</li>
                                
                            </ul>
                      </div>
                      <p>#Synthetic Engine oil is an optional product.</p>
                      <p><b>Disclaimer:</b> These are indicative prices. For more details kindly contact your respective dealer.</p>
          </section>
</div>
        </>
    );
};

export default EngineOilPage;