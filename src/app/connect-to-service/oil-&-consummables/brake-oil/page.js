import PageBanner from "@/app/components/PageBanner";

const BrakeOilPage = () => {
    return (
        <>
            <PageBanner img="/images/pages/oil-banner.jpg"/>

<div className='bg-[#F6F3F2] py-16'>
          <section className='container py-8 space-y-8'>
                  <h1 className='text-3xl font-semibold '>Brake Oil</h1>
                  
                  <div>
                  <h3 className='text-2xl font-semibold '>Importance of Brake Oil</h3>
                  <ul className='list-inside list-disc'>
                       <li>Proper Brake pedal feel is restored</li>
                       <li>Increased resistance to rust and corrosion</li>
                       <li>Increased pedal feel when applying the brake</li>
                       <li>Increased driver safety due to properly working brake system</li>
                      
                  </ul>
                  </div>
          </section>
          <section className='container py-8 space-y-8'>
                     
                      <table className='w-full ' cellPadding={15}>
                              <thead>
                              <tr className='bg-primary text-[white] '>
                              
                              <th  className='p-4 border-r border-[white]'>VEHICLE</th>
                              <th className='p-4 border-r border-[white]'>SPECIFICATION &  GRADE</th>
                              <th className='p-4 border-r border-[white]'>TOTAL QUANTITY</th>
                              <th className='p-4 border-r border-[white]'>PRICE (Rs/ Ltr)</th>
                              
                          
                          </tr>
                              </thead>
                              <tbody>
                                      <tr>
                                          <td className='border border-[#E4E1E0]'>Creta 1.4 L / 1.6 L</td>
                                          <td className='border border-[#E4E1E0]'>DOT 3 - FMVSS 116</td>
                                          <td className='border border-[#E4E1E0]'>0.7- 0.8 L</td>
                                          <td className='border border-[#E4E1E0]'>355	</td>
                                       
                                      </tr>
                                      
                                      
                                      
                                     
                                     
                              </tbody>
                      </table>
          </section>
          

          <section className="container space-y-8">
                        <p>*Do not mix DOT 3 and DOT 4 brake/clutch fluids. Vendor is Indian Oil Servo / SCCI Golden cruiser</p>
                        <p><b>Disclaimer:</b> These are indicative prices. For details kindly contact your dealer.</p>

          </section>
         
</div> 
        </>
    );
};

export default BrakeOilPage;