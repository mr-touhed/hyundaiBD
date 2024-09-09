"use client"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const CollapesDetails = () => {
    return (
        <>
          <Accordion preExpanded={['a']} >

<AccordionItem uuid="a">
<AccordionItemHeading >
    <AccordionItemButton >
            <h3 className='text-xl font-semibold'>Warranty Period</h3>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
        <div className="bg-[#F6F3F2] p-4 space-y-8">
                <p>The term of the warranty shall commence from the date of delivery of the new vehicle to the first purchaser. Warranty on each model shall be applicable as per the below table.</p>
                <p>Warranty period specified below is dependent on whichever occurs earlier.
                The below mentioned warranty information is valid from January 2022 onwards.</p>


                <table className="w-full " cellPadding={10} >
                    <thead className="bg-[#E4DCD3]">
                            
                            <tr>
                            <th className='border-r border-[white]'>Model</th>
                            <th>Warranty Period*</th>
                            </tr>
                            
                    </thead>
                    <tbody>
                            <tr>
                                <td className="border border-[#E4DCD3]">Creta</td>
                                <td className="border border-[#E4DCD3]">3 years / Unlimited Kms</td>
                            </tr>
                            <tr>
                                <td className="border border-[#E4DCD3]">Tucson</td>
                                <td className="border border-[#E4DCD3]">3 years / Unlimited Kms</td>
                            </tr>
                            <tr>
                                <td className="border border-[#E4DCD3]">STARGAZER</td>
                                <td className="border border-[#E4DCD3]">3 years / Unlimited Kms</td>
                            </tr>
                            <tr>
                                <td className="border border-[#E4DCD3]">Palisade</td>
                                <td className="border border-[#E4DCD3]">3 years / Unlimited Kms</td>
                            </tr>
                            <tr>
                                <td className="border border-[#E4DCD3]">Creta Grand</td>
                                <td className="border border-[#E4DCD3]">3 years / Unlimited Kms</td>
                            </tr>
                    </tbody>
                </table>

        </div>
            

</AccordionItemPanel>
</AccordionItem>
<AccordionItem uuid="b">
<AccordionItemHeading>
    <AccordionItemButton>
    <h3 className='text-xl font-semibold'>What is covered</h3>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
        <div className="bg-[#F6F3F2] p-4">
                <p>Except as provided under What is not Covered hereof, our Authorized Dealers shall either repair or replace, any Hyundai genuine part that is acknowledged by HMIL to be defective in material or workmanship within the warranty period stipulated above, at no cost to the owner of the Hyundai vehicle for parts or labor. Such defective parts which have been replaced will become the property of HMIL.</p>



        </div>
            

</AccordionItemPanel>
</AccordionItem>

<AccordionItem uuid="c">
<AccordionItemHeading>
    <AccordionItemButton>
    <h3 className='text-xl font-semibold'>What is not covered</h3>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
        <div className="bg-[#F6F3F2] p-4 space-y-6">
                
                <ul className="list-disc list-inside">
                    <li><b>This warranty shall not apply to :</b></li>
                    <li>Normal maintenance services other than the three free services, including without limitation, cleaning and polishing, minor adjustments, engine tuning, oil/fluid changes, filters replenishment, fastener retightening, wheel balancing, wheel alignment and tyre rotation etc.</li>
                    <li>Replacement of parts as a result of normal wear and tear such as spark plugs, belts, brake pads and linings, clutch disc/facing, filters, wiper blades, bulbs, fuses, etc.</li>
                    <li><b>Damage or failure resulting from</b></li>
                    <li>Negligence of proper maintenance as required in this Owner&rsquo;s Manual and Service Booklet.</li>
                    <li>Misuse, abuse, accident, theft, flooding or fire.</li>
                    <li>Use of improper or insufficient fuel, fluids or lubricants.</li>
                    <li>Use of parts other than Hyundai Genuine Parts.</li>
                    <li>Any device and/or accessories not supplied by HMIL.</li>
                    <li>Modifications, alterations, tampering or improper repair.</li>
                    <li>Parts used in applications of which they were not designed or not approved by HMIL.</li>
                    <li>Slight irregularities not recognized as affecting quality or function of the vehicle or parts, such as slight noise or vibrations, or items considered characteristic of the vehicle.</li>
                    <li>Airborne &quot;fallout&quot;, Industrial fall out, acid rain, hail and wind storms, or other Acts of God.</li>
                    <li>Paint scratches, dents or similar paint or body damage.</li>
                    <li>Action of road elements (sand, gravel, dust or road debris) which results in stone chipping of paint or glass.</li>
                    <li>Incidental or consequential damages, including without limitation, loss of time, inconvenience, loss of use of vehicle or commercial loss.</li>
                    
                </ul>

            <p>Batteries, Audio Systems, Tyres and Tubes originally equipped on Hyundai vehicles are warranted directly by the respective manufacturers and not by HMIL.</p>
            <p>This warranty is the entire warranty given by HMIL and no dealer or its or his agent or employee is authorized to extend or enlarge this warranty and no dealer or its or his agent or employee is authorized to make any oral warranty on HMIL’s behalf.</p>
            <p>HMIL reserves the right to make any change in design or make any improvement on the vehicle at any time without any obligation to make the same change on vehicles previously sold.</p>
            <p>Warranty service shall be provided only by HMIL&lsquo;s authorized dealers and Dealer Service Branch.</p>
            <p>HMIL’s decision is final and binding on the Owner of the vehicle in all warranty matters. HMIL reserves the right for the final decision on all warranty matters.</p>
        </div>
            

</AccordionItemPanel>
</AccordionItem>

<AccordionItem uuid="d">
<AccordionItemHeading >
    <AccordionItemButton>
    <h3 className='text-xl font-semibold'>Owner&#39;s Responsibilities</h3>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
        <div className="bg-[#F6F3F2] p-4 space-y-6">
                
                <ul className="list-disc list-inside">
                    <li>Proper use, maintenance and care of vehicle in accordance with the instructions contained in the Owner’s Manual and Service Booklet. If the vehicle is subject to severe usage conditions, such as operation in extremely dusty, rough, more repeated short distance driving or heavy city traffic during hot weather, maintenance of vehicle should be done more frequently as mentioned in Owner’s Manual and Service Booklet.</li>
                    <li>In order to maintain the validity of this Basic Warranty, the vehicle must be serviced by Hyundai Authorized Dealer or Service Centre in accordance to the Owner’s Manual and Service Booklet.</li>
                    <li>Retention of maintenance service records. It may be necessary for the customer to show that the required maintenance has been performed, as specified in -Owner’s Manual and Service Booklet.</li>
                    <li>Delivery of the vehicle along with Owner&#39;s Manual and Service Booklet during regular service business hours to any authorized Hyundai Dealer to obtain warranty service.</li>
                    <li>All disputes arising out of this Basic Warranty will be subject to the jurisdiction of Courts in Chennai only.</li>
                  </ul>
        </div>
            

</AccordionItemPanel>
</AccordionItem>
</Accordion>   
        </>
    );
};

export default CollapesDetails;