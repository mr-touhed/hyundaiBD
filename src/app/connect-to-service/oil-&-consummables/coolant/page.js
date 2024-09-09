import PageBanner from "@/app/components/PageBanner";


const CoolantPage = () => {
    return (
        <>
            <PageBanner img="/images/pages/oil-banner.jpg"/>

<div className='bg-[#F6F3F2] py-16'>
          <section className='container py-8 space-y-8'>
                  <h1 className='text-3xl font-semibold '>Coolant</h1>
                  
                  <div>
                  <h3 className='text-2xl font-semibold '>Benefits</h3>
                  <ul className='list-inside list-disc'>
                        <li>Increased life of cooling system</li>
                        <li>Helps promote adequate engine heat transfer</li>
                        <li>New coolant reduces internal cooling system corrosion</li>
                      
                  </ul>
                  </div>
          </section>
          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Coolant Petrol</h2>
                      <table className='w-full ' cellPadding={15}>
                              <thead>
                              <tr className='bg-primary text-[white] '>
                              
                              <th  className='p-4 border-r border-[white]'>VEHICLE</th>
                              <th className='p-4 border-r border-[white]'>SPECIFICATION & RECOMMENDED GRADE</th>
                              <th className='p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                              <th className='p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                              
                          
                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>Premix Coolant</td>
                                          <td className='border border-[#E4E1E0]'>5.7 L</td>
                                          <td className='border border-[#E4E1E0]'>301	</td>
                                       
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>ALL NEW CRETA(2020) 1.4 T-GDI</td>
                                          <td className='border border-[#E4E1E0]'>Premix Coolant</td>
                                          <td className='border border-[#E4E1E0]'>6.1 L ~ 6.4 L</td>
                                          <td className='border border-[#E4E1E0]'>	301</td>
                                       
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>ALL NEW CRETA(2020) 1.5 MPI</td>
                                          <td className='border border-[#E4E1E0]'>Premix Coolant</td>
                                          <td className='border border-[#E4E1E0]'>6.1 L ~ 6.4 L</td>
                                          <td className='border border-[#E4E1E0]'>	301</td>
                                       
                                      </tr>
                                      
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          

          <section className='container py-8 space-y-8 overflow-x-scroll md:overflow-x-hidden'>
                      <h2 className='text-xl font-semibold '>Coolant Diesel</h2>
                      <table className='w-full ' cellPadding={15}>
                              <thead>
                              <tr className='bg-primary text-[white] '>
                              
                              <th  className='p-4 border-r border-[white]'>VEHICLE</th>
                              <th className='p-4 border-r border-[white]'>SPECIFICATION & RECOMMENDED GRADE</th>
                              <th className='p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                              <th className='p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                              
                          
                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.4 L / 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>Premix Coolant</td>
                                          <td className='border border-[#E4E1E0]'>	7.2 L</td>
                                          <td className='border border-[#E4E1E0]'>301	</td>
                                       
                                      </tr>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.6 L A/T</td>
                                          <td className='border border-[#E4E1E0]'>Premix Coolant</td>
                                          <td className='border border-[#E4E1E0]'>	7.0 L</td>
                                          <td className='border border-[#E4E1E0]'>301	</td>
                                       
                                      </tr>
                                      
                                      
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          <section className="container space-y-8">
                        <p>* Vendor is Bangladeshi Oil Servo Coolant / SCCI Golden Cruiser/Shell</p>
                        <p><b>Disclaimer:</b> These are indicative prices. For details kindly contact your dealer.</p>

          </section>
         
</div> 
        </>
    );
};

export default CoolantPage;