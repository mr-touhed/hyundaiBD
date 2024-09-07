"use client"


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const CollapsTable = () => {
    return (
        <>
            <Accordion preExpanded={['a']} >
            <AccordionItem uuid="a" >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    EXTERIOR
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2} >Dark chrome parametric front grille</td>
                                                    <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={4} className='border-r border-[#DDDDDD]'>Signature lighting</td>
                                                    <td>Parametric hidden LED DRLs & positioning lamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                    <td>LED MFR headlamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className=' border-x-0 border border-[#DDDDDD]'>
                                                   
                                                    <td>LED MFR headlamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                    <td>LED MFR headlamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>


                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Skid plates (Front and Rear)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Bumper chrome moulding (Front & Rear)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Roof rails</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Rear spoiler with LED high mount stop lamp</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Door frame molding - Satin finish</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>R18 (D= 462mm) Diamond cut alloy wheels</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Rear fog lamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Shark fin antenna</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>
                {/* INTERIOR TABLE  */}


                <AccordionItem uuid="b">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    INTERIOR
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                


                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Premium black and light grey dual tone interiors</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>64 colour ambient lighting</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Glossy black center fascia</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Integrated silver accents on crashpad & doors</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Premium inserts on crashpad</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>26.03 cm (10.25&rdquo;) floating type digital cluster</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Leather* upholstery</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={3}>Leather* pack</td>
                                                     <td className='border-l border-[#DDDDDD]'>Steering wheel</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Transmission knob</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Door & console armrest</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Door scuff plates - deluxe</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>


            {/* COMFORT & CONVENIENCE TABLE  */}


            <AccordionItem uuid="c">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    COMFORT & CONVENIENCE
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                


                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Voice enabled smart panoramic sunroof</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Electric parking brake</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={3}>Air conditioning</td>
                                                     <td className='border-l border-[#DDDDDD]'>Dual zone FATC with auto defogger</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Rear AC vent</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Multi air mode</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>






                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>10-way power adjustable driver seat with lumbar support</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>8-way power adjustable passenger seat</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Passenger seat walk-in device</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Hands free smart power tail gate with height adjustment</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Driver power seat memory function</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Front ventilated & heated seats</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Wireless phone charger</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Auto dimming IRVM</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Smart key with push button start</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Remote engine start with smart key</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Outside mirrors - Electrically adjustable & foldable</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Door pocket lighting</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Luggage screen</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Automatic headlamps</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Cruise control</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>60:40 split folding rear seat</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>2nd row seat with reclining function</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>2nd row seat folding - Boot lever</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Tilt and telescopic steering</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Front console armrest with storage</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Rear centre armrest with cup holders</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Extendable sunvisor with vanity mirror illumination</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Front and rear power windows</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Front power windows auto up/down & safety</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Height adjustable front and rear seat headrests</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>LED map lamp</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Concealed rear wiper with washer</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Motor driven power steering</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Front & rear USB charger</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Luggage net and hook</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Luggage lamp and power outlet</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>


             {/* INFOTAINMENT & CONNECTIVITY TABLE  */}



             <AccordionItem uuid="d">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    INFOTAINMENT & CONNECTIVITY
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                


                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>26.03 cm (10.25&rdquo;) HD audio video navigation system</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Steering mounted audio, bluetooth controls</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Hyundai Bluelink connected car technology</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Over-the-air update (infotainment system & map)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Bluelink integrated smartwatch app</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={2}>Smartphone connectivity</td>
                                                     <td className='border-l border-[#DDDDDD]'>Apple CarPlay</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                    <td className='border-l border-[#DDDDDD]'>Android Auto</td>
                                                    <td className='border-l border-[#DDDDDD]'>S</td>
                                                    <td className='border-l border-[#DDDDDD]'>S</td>
                                               </tr>
                                               



                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={5}>Bose premium sound & speaker system</td>
                                                     <td className='border-l border-[#DDDDDD]'>Front & rear door speakers</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Front central speaker</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Front tweeters</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Sub-woofer</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    
                                                     <td className='border-l border-[#DDDDDD]'>Amplifier</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>






                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Voice recognition</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Bluetooth</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>USB connectivity</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                              
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>


            {/* Safety Technology & Safety  TABLE*/}
            <AccordionItem uuid="e">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Safety Technology & Safety
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                


                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td rowSpan={19}>2nd row</td>
                                                     <td className='border-l border-[#DDDDDD]'>Forward collision warning (FCW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Forward collision - avoidance assist - Car (FCA-Car)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Forward collision - avoidance assist - Pedestrian (FCA-Ped)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Forward collision - avoidance assist - Cycle (FCA-Cyl)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Forward collision - avoidance assist - Junction turning (FCA-JT)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Blind-spot collision warning (BCW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Blind-spot collision - avoidance assist (BCA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Lane keeping assist (LKA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Lane departure warning (LDW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Driver attention warning (DAW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Blind-spot view monitor (BVM)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Safe exit warning (SEW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Smart cruise control with stop & go (SCC w/ S&G)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Lane following assist (LFA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>High beam assist (HBA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Leading vehicle departure alert (LVDA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Rear cross - traffic collision warning (RCCW)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Rear cross - traffic collision - avoidance assist (RCCA)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td className='border-l border-[#DDDDDD]'>Surround view monitor (SVM)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>ABS with EBD</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Electronic stability control (ESC)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td rowSpan={2} className='border-l border-[#DDDDDD]'>6 airbags</td>
                                                     <td className='border-l border-[#DDDDDD]'>Driver & passenger</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                  
                                                     <td className='border-l border-[#DDDDDD]'>Driver & passenger</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>

                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Vehicle stability management (VSM)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Hill-start assist control (HAC)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Downhill brake control (DBC)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Tyre pressure monitoring system (TPMS) [Highline]</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Rain sensing wipers</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Electronic shift lock system</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Child seat anchor - ISOFIX</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Rear parking sensors</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Front parking sensors</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Rear camera with dynamic guidelines</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Seatbelt reminder (all seats)</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Front seat belt pretensioners</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Engine immobilizer</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Height adjustable front seat belts</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Dual horn</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                   
                                                     <td colSpan={2} className='border-l border-[#DDDDDD]'>Speed sensing auto door lock</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                             






                                                
                                              
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>

                    
                    {/* Feature Table  */}


                    <AccordionItem  uuid="f">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    EXTERIOR
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='p-0 overflow-x-auto'>
                                    <table className='w-full text-left text-sm ' border={1} cellPadding={14} >
                                            <thead className='bg-primary text-[white]'>
                                                <tr className='border-x-0 border-[#DDDDDD]'>
                                                    <th colSpan={2}>Feature</th>
                                                    <th >Platinum</th>
                                                    <th>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Drive mode select - Eco, Normal, Sport, *Smart</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                     <td className='border-l border-[#DDDDDD]'>S</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>4WD lock mode</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S#</td>
                                                </tr>
                                                <tr className='border-x-0 border border-[#DDDDDD]'>
                                                    <td colSpan={2}>Multi terrain modes (Snow, Mud, Sand)</td>
                                                     <td className='border-l border-[#DDDDDD]'>-</td>
                                                     <td className='border-l border-[#DDDDDD]'>S#</td>
                                                </tr>
                                            </tbody>
                                    </table>
                </AccordionItemPanel>
            </AccordionItem>
               
            </Accordion>
        </>
    );
};

export default CollapsTable;