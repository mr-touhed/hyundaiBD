"use client"

import Image from 'next/image';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const SpacificationPage = () => {
    return (
        <div className='py-16'>
            <table className="w-full border">
                    <tbody>
                            <tr className="border bg-[#E4DCD3]">
                                <td className=" p-3  w-[285px] border border-[white]">Category</td>
                                <td className="p-3 bg-[white] border border-[#E4DCD3]">SUV</td>
                            </tr>
                            <tr className="bg-[#E4DCD3]">
                                <td className=" p-3  w-[285px] border border-[white]">Product Label</td>
                                <td className="p-3 bg-[white] border border-[#E4DCD3]">R 2.0 l Diesel 8-Speed Automatic</td>
                            </tr>
                            <tr className="bg-[#E4DCD3] ">
                                <td className=" p-3 w-[285px] border border-[white]">TUCSON</td>
                                <td className="p-3 bg-[white] border border-[#E4DCD3]">5</td>
                            </tr>
                    </tbody>
            </table>


            <div className="mt-16">
            <Accordion preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Performance
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                        <Image  src={`/images/cardetails/tucson/specification/Engine.png`} alt="" width={900} height={100} className='w-auto h-auto'/>
                                        <Image  src={`/images/cardetails/tucson/specification/transmission.png`} alt="" width={950} height={100} className='w-auto h-auto'/>
                                        <Image  src={`/images/cardetails/tucson/specification/brake.png`} alt="" width={950} height={100} className='w-auto h-auto'/>

                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Dimension
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                        <Image  src={`/images/cardetails/tucson/specification/Dimention_tab.png`} alt="" width={900} height={100} className='w-auto h-auto'/>
                                        

                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Wheels
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                        <Image  src={`/images/cardetails/tucson/specification/wheels.png`} alt="wheels.png" width={900} height={100} className='w-auto h-auto'/>
                                        

                            </AccordionItemPanel>
                        </AccordionItem>
            </Accordion>
            </div>
        </div>
    );
};

export default SpacificationPage;