"use client"
import { useState } from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
const Accordion = () => {
    
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'Hyundai Experience Center, Tejgaon',
            number:"+88 09613-505080" ,
            data: `246, Rangs Babylonia, Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka 1208.`, 
            isOpen: false
        }, 
        { 
            key: 2, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Tejgaon', 
            number:'+88 09613-505080279',
            data: `Tejgaon I/A, Dhaka-1208,Bangladesh`, 
            isOpen: false
        }, 
        { 
            key: 3, 
            title: 'Hyundai 1S Center (Sales), Tejgaon', 
            number:"+88 09613-505080",
            data: `191/A, Haque Tower, Bir Uttam Mir Shawkat Sarak,Tejgaon, Dhaka 1208`, 
            isOpen: false
        }, 
        { 
            key: 4, 
            title: 'Hyundai 1S Center (Sales) Uttara, Rabindra Sarani', 
            number:"+88 09613-505080",
            data: `Plot # 41, Sector # 03, Road # 15 (Rabindra Sarani), Uttara R/A.`, 
            isOpen: false
        }, 
        { 
            key: 5, 
            title: 'Hyundai 1S Center (Sales), Dhanmondi', 
            number:"+88 09613-505080",
            data: `Hakim Heritage, 15/A, New-16, Road-6, Dhanmondi, Mirpur Road, Dhaka`, 
            isOpen: false
        }, 
        { 
            key: 6, 
            title: 'Hyundai 1S Center (Sales), Kakrail, Dhaka', 
            number:"+88 09613-505080",
            data: `House -77, Kakrail Circle, Ramna, Dhaka-1000`, 
            isOpen: false
        }, 
        { 
            key: 7, 
            title: 'Hyundai 1S Center (Sales), Progoti Sarani, Dhaka', 
            number:"+88 09613-505080",
            data: `House-49/1, Shahid Abdul Aziz Sarok, Howlader Tower, Pragati Sharani, Baridhara, Dhaka -1229`, 
            isOpen: false
        }, 
        { 
            key: 8, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Chattogram', 
            number:"+8809613-505080",
            data: `156, SKS Project, Shersha Bangla Bazar, Hyrrican Factory, Bayezid Link Road, Chattogram`, 
            isOpen: false
        }, 
        { 
            key: 9, 
            title: 'Hyundai 1S Center(Sales), Chattogram, Kazir Dewri', 
            number:"+88 09613-505080",
            data: `281, Chatteswari Road, Kazir Dewri, Chattogram.`, 
            isOpen: false
        }, 
        { 
            key: 10, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Bogura', 
            number:"+8809613-505080",
            data: `6123, Nishindara, Matidhali, Bogura.`, 
            isOpen: false
        }, 
        { 
            key: 11, 
            title: 'Hyundai 2S Center (Service & Spares), Diabari ,Uttara', 
            number:"+88 09613-505080",
            data: `R#2, Sector#15, Diya Bari, Zero Point, Uttara, Dhaka`, 
            isOpen: false
        }, 
    ]);


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

export default Accordion;




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