"use client"

import React, { useState } from 'react';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';

const LocationMap = () => {
    const [location,setLocation] = useState('!1m18!1m12!1m3!1d3651.350119234229!2d90.40259947479258!3d23.770543588003733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76cf742decf%3A0x67c5cb97d570959b!2sRangs%20Properties%20Ltd%2C%20Rangs%20Babylonia!5e0!3m2!1sen!2sbd!4v1724682851258!5m2!1sen!2sbd')
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'Hyundai Experience Center, Tejgaon',
            number:"+88 09613-505080" ,
            data: `246, Rangs Babylonia, Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka 1208.`,
            pb:"!1m18!1m12!1m3!1d3651.350119234229!2d90.40259947479258!3d23.770543588003733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76cf742decf%3A0x67c5cb97d570959b!2sRangs%20Properties%20Ltd%2C%20Rangs%20Babylonia!5e0!3m2!1sen!2sbd!4v1724682851258!5m2!1sen!2sbd",
            isOpen: true
        }, 
        { 
            key: 2, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Tejgaon', 
            number:'+88 09613-505080279',
            data: `Tejgaon I/A, Dhaka-1208,Bangladesh`,
            pb:"!1m18!1m12!1m3!1d14606.238152901415!2d90.3935926363009!3d23.763081436034533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c779207a542f%3A0x1ce6569fbc354e7!2sHyundai%20Motors%20Bangladesh%20Limited!5e0!3m2!1sen!2sbd!4v1724682991379!5m2!1sen!2sbd",
            isOpen: false
        }, 
        { 
            key: 3, 
            title: 'Hyundai 1S Center (Sales), Tejgaon', 
            number:"+88 09613-505080",
            data: `191/A, Haque Tower, Bir Uttam Mir Shawkat Sarak,Tejgaon, Dhaka 1208`,
            pb:"!1m18!1m12!1m3!1d14606.233821062906!2d90.39359263219767!3d23.76312003042518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c782f8b80cdf%3A0x119fa4871f3a3142!2sHyundai%201S%20Center%20Showroom%2C%20Bir%20Uttam%20Mir%20Shawkat%20Sarak%2CTejgaon%20%7C%20FairTechnology!5e0!3m2!1sen!2sbd!4v1724683052044!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 4, 
            title: 'Hyundai 1S Center (Sales) Uttara, Rabindra Sarani', 
            number:"+88 09613-505080",
            data: `Plot # 41, Sector # 03, Road # 15 (Rabindra Sarani), Uttara R/A.`,
            pb:"!1m18!1m12!1m3!1d912.1573963699105!2d90.3958917291731!3d23.86728367888194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5ec32532fc9%3A0x73eb0d6ba61501df!2sHyundai%201S%20Center%20Uttara%20Rabindra%20Sarani%20%7C%20FairTechnology!5e0!3m2!1sen!2sbd!4v1724685003362!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 5, 
            title: 'Hyundai 1S Center (Sales), Dhanmondi', 
            number:"+88 09613-505080",
            data: `Hakim Heritage, 15/A, New-16, Road-6, Dhanmondi, Mirpur Road, Dhaka`,
            pb:"!!1m18!1m12!1m3!1d3652.09843989391!2d90.38001137479178!3d23.74386878902805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90e25c8f5d3%3A0xac2544592c1a1e22!2sHyundai%201S%20Showroom%2C%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1724685340471!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 6, 
            title: 'Hyundai 1S Center (Sales), Kakrail, Dhaka', 
            number:"+88 09613-505080",
            data: `House -77, Kakrail Circle, Ramna, Dhaka-1000`,
            pb:"!1m18!1m12!1m3!1d3652.09843989391!2d90.38001137479178!3d23.74386878902805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90e25c8f5d3%3A0xac2544592c1a1e22!2sHyundai%201S%20Showroom%2C%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1724685340471!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 7, 
            title: 'Hyundai 1S Center (Sales), Progoti Sarani, Dhaka', 
            number:"+88 09613-505080",
            data: `House-49/1, Shahid Abdul Aziz Sarok, Howlader Tower, Pragati Sharani, Baridhara, Dhaka -1229`,
            pb:"!1m18!1m12!1m3!1d3650.2369117959356!2d90.41666837809099!3d23.810173131399875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ad5315097d%3A0x934e6c0806bc8691!2sHowlader%20Tower%2C%20Ka%2049%2F1%2C%20Pragati%20Avenue%2C%20Dhaka%201229!5e0!3m2!1sen!2sbd!4v1724685459138!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 8, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Chattogram', 
            number:"+8809613-505080",
            data: `156, SKS Project, Shersha Bangla Bazar, Hyrrican Factory, Bayezid Link Road, Chattogram`,
            pb:"!1m18!1m12!1m3!1d3689.1733360262638!2d91.80702587475177!3d22.384822039827505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd971a2aa83eb%3A0xb9f17e9199dd191f!2sHyundai%203S%20Center%20Chattogram%20%2C%20Shersha%2C%20Baizid%20%7C%20FairTechnology!5e0!3m2!1sen!2sbd!4v1724685627420!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 9, 
            title: 'Hyundai 1S Center(Sales), Chattogram, Kazir Dewri', 
            number:"+88 09613-505080",
            data: `281, Chatteswari Road, Kazir Dewri, Chattogram.`,
            pb:"!1m18!1m12!1m3!1d30085.124681090347!2d91.79634837850611!3d22.367372697619988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9680bfe77e3%3A0x73b9362fb653364b!2sHyundai%20Bangladesh%20(Chattogram%20Zone)!5e0!3m2!1sen!2sbd!4v1724685913570!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 10, 
            title: 'Hyundai 3S Center (Sales, Service & Spares), Bogura', 
            number:"+8809613-505080",
            data: `6123, Nishindara, Matidhali, Bogura.`,
            pb:"!1m18!1m12!1m3!1d3619.3403885431912!2d89.35957967482742!3d24.886368394221428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc557611f2dbfb%3A0xa4c4cd87ea18cc29!2sMatidali%2C%20Nishindara!5e0!3m2!1sen!2sbd!4v1724686235959!5m2!1sen!2sbd", 
            isOpen: false
        }, 
        { 
            key: 11, 
            title: 'Hyundai 2S Center (Service & Spares), Diabari ,Uttara', 
            number:"+88 09613-505080",
            data: `R#2, Sector#15, Diya Bari, Zero Point, Uttara, Dhaka`,
            pb:"!1m18!1m12!1m3!1d3648.4105407556476!2d90.3643988747958!3d23.875056683980294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3c26bf618dd%3A0xfca0687a33431c0d!2sHyundai%202S%20Service%20Center%20Diabari%2CUttara%20%7C%20FairTechnology!5e0!3m2!1sen!2sbd!4v1724686278132!5m2!1sen!2sbd", 
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
      
        setAccordion(updatedAccordions); 
    }; 

        const SelectLocation = (accordionkey) =>{
            const findLoaction = accordions.find(location => location.key === accordionkey);
            setLocation(findLoaction.pb)
            console.log(findLoaction);
        }
    return (
        <div className='py-16 bg-[#F6F5F5]'>
        <div className='mb-6 space-y-6'>
                <h2 className='text-3xl font-semibold text-center'>Find a Dealer & Location</h2>
                <h4 className='text-2xl font-light text-center'>Locate your nearest dealership and visit.</h4>
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