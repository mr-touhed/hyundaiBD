"use client"

import { useState } from "react";
import LegalDisclaimer from "./LegalDisclaimer";
import TermsCondition from "./TermsCondition";
import TCOnlineBooking from "./TCOnlineBooking";
import Environment from "./Environment";
import BluelinkPP from "./BluelinkPP";
import PageBanner from "@/app/components/PageBanner";

const DiscliaimerComponent = () => {
    const [activeContent,setActiveContent] = useState('Legal Disclaimer');
    const [loading,setLoading] = useState(false);
    const [contentIndex,setContentIndex] = useState(0)
    const list = [
        'Legal Disclaimer',
        'T&C of the Website',
        'T&C of Online Booking',
        'Environment Compliance Reports',
        'Bluelink privacy policy'
    ]

    const content = [
                            <LegalDisclaimer key={0}/>,
                            <TermsCondition key={1}/>,
                            <TCOnlineBooking key={2}/>,
                            <Environment key={3}/>,
                            <BluelinkPP key={4}/>
    ]
    const handelChangePage = (item,i) =>{
        setLoading(true)
        setTimeout(()=>{
            setActiveContent(item);
            setContentIndex(i)
            setLoading(false)
        },1000)
    }



    return (
        <>
        <div className="relative">
                    <PageBanner img="/images/pages/bg-contentwrap01.jpg"/>
                        <div className="container">
                        <h2 className="absolute left-50 top-[50%] z-10 text-4xl font-bold">{activeContent}</h2>
                        </div>
                    </div>
        <div className='container'>
                    
                <section className="grid md:grid-cols-5 grid-cols-1">
                        {
                          list.map((item,i)=> <button onClick={()=>handelChangePage(item,i)} key={i} className={`${activeContent === item ? "bg-dark text-[white]" : ''}  hover:bg-dark hover:text-[white] px-4 py-2`}>{item}</button>)  
                        }
                </section>

                <section className="my-16 min-h-screen">
                            {loading ? <h4 className="text-xl font-semibold text-lightDark text-center">Loading.....</h4> : content[contentIndex]}
                </section>
        </div>
        </>
    );
};

export default DiscliaimerComponent;