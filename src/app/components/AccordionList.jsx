"use client"
import { useState } from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { LocationData } from "../../../public/data/data";
const AccordionList = () => {
    
    const [accordions, setAccordion] = useState(LocationData);


    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
        console.log(accordionkey);
        setAccordion(updatedAccordions); 
    }; 


    return ( 
        <div className="grid  grid-cols-1 items-start gap-1 max-h-[500px] overflow-y-scroll">
        
        {accordions.map((accordion) => ( 
                    <AccordionPage 
                        key={accordion.key} 
                        title={accordion.title}
                        number={accordion.number}
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))}
        </div>
    ); 
};

export default AccordionList;




function AccordionPage (props){
    return (
        <div className="border border-[#dcdada] rounded-md mb-1 shadow-sm"> 
        <button 
            className="w-full p-4 text-left bg-gray-200  md:text-sm font-medium
                       hover:bg-gray-300 transition duration-300"
            onClick={props.toggleAccordion} 
        > 
            {props.title} 
            <span className={`float-right transform ${props.isOpen ?  
                             'rotate-180' : 'rotate-0'}  
                             transition-transform duration-300`}> 
                &#9660; 
            </span> 
        </button> 
        {props.isOpen && ( 
            <div className="p-4 bg-[white] grid md:grid-cols-2 grid-cols-1  items-center gap-8 "> 
                    <div className="text-md  font-medium flex flex-col items-center gap-4"><BsFillTelephoneInboundFill className="w-8 h-8"/>  <span>{props.number}</span> </div>
                    <div className="text-md text-center  font-medium flex flex-col items-center gap-4"><FaMapLocationDot className="w-8 h-8"/>  <span>{props.data}</span> </div>
                    
            </div> 
        )} 
    </div>
    )
}