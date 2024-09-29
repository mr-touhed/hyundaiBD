"use client"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const MileStone2023Component = () => {
    return (
        
            <Accordion preExpanded={['2023']}>
            <AccordionItem uuid="2023">
                <AccordionItemHeading className='text-xl font-bold'>
                    <AccordionItemButton>
                            2023
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    
                            <table className='w-full text-center'cellPadding={10}  >
                                    <thead className='bg-[#E4DCD3]'>
                                            <tr>
                                            <th className=' border-r border-[#F4F4F4]'>Year</th>
                                            <th className='border-r border-[#F4F4F4]'>Date</th>
                                            <th>Milestone</th>
                                            </tr>
                                           
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>2023</td>
                                                <td>September 6,2023</td>
                                                <td>Hyundai launches the VENUE N-LINE, India&#39;s first mass market performance oriented SUV</td>
                                            </tr>
                                    </tbody>
                            </table>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="2022" dangerouslySetExpanded={false}>
                <AccordionItemHeading className='text-xl font-bold'>
                    <AccordionItemButton>
                    2022
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
       
    );
};

export default MileStone2023Component;