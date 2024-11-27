"use client"

import React, { useState } from 'react';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';
import { LocationData } from '../../../public/data/data';

const LocationMap = () => {
    const [location,setLocation] = useState('!1m18!1m12!1m3!1d3651.3573773240623!2d90.4050817!3d23.770284999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c707f8384d61%3A0xb0a1ddf6aefcf93a!2sHyundai%20Experience%20Center%20%7C%20FairTechnology!5e0!3m2!1sen!2sbd!4v1732727468926!5m2!1sen!2sbd')
    const [accordions, setAccordion] = useState(LocationData);


    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
      
        setAccordion(updatedAccordions); 
    }; 

        const SelectLocation = (accordionkey) =>{
            const findLoaction = accordions.find(location => location.key === accordionkey);
            setLocation(findLoaction.pb)
            console.log(findLoaction);
        }
    return (
        <div className='py-16 bg-[#F6F5F5]'>
        <div className='mb-6 space-y-3'>
                <h2 className='text-3xl font-semibold text-center'>Hyundai Outlets Locate your nearest </h2>
                <h4 className='text-2xl font-light text-center'>Outlet and plan your visit.</h4>
        </div>
        <section className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                 <div className="max-h-[60vh] overflow-y-scroll  no-scrollbar ">
                
        {accordions.map((accordion) => ( 
                    <AccordionPage 
                    SelectLocation={()=>SelectLocation(accordion.key)}
                        key={accordion.key} 
                        title={accordion.title}
                        number={accordion.number}
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))}
        </div>


        <div>
        <iframe src={`https://www.google.com/maps/embed?pb=${location}`} width="600" height="450" className='w-full  md:h-full h-screen border-0 ' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       
        
        </div>
        </section>

        </div>
    );
};

export default LocationMap;






function AccordionPage (props){
    return (
        <div className="border border-[#dcdada] rounded-md mb-1 shadow-md"> 
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
                    <div  onClick={props.SelectLocation} className="text-md text-center cursor-pointer  font-medium flex flex-col items-center gap-4"><FaMapLocationDot className="w-8 h-8"/>  <span>{props.data}</span> </div>
                    
            </div> 
        )} 
    </div>
    )
}