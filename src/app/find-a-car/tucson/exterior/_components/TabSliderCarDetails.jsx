"use client"

import { useState } from "react";
import ImageSlider from "./ImageSlider";

const TabSliderCarDetails = () => {
    const [activeTab,setActiveTab] = useState(0);
    const tabList = [
        "Front",
        "Side",
        "Rear"
    ]
    const FrontData = [
        {
            title:"Flawless, timeless, captivating design.",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image01.jpg`
        },
        {
            title:"Dark chrome parametric front grille with parametric hidden LED DRLs, LED MFR headlamps & positioning lamps",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image02.jpg`
        },

    ]

    const SideData = [
        {
            title:"Panoramic sunroof",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image04.jpg`
        },
        {
            title:"A supreme performance.",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image05.jpg`
        },
    ]

    const RearData = [
        {
            title:"Exquisite in every way.",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image03.jpg`
        },
        {
            title:"Connecting LED tail lamps",
            img:`/images/cardetails/tucson/exterior/tucson-suv-exterior-top-2-image06.jpg`
        },
    ]
    return (
        <div>
            <div className="grid md:grid-cols-3 text-center  bg-[white]">
                {
                    tabList.map((btn,i)=> <button key={i} onClick={()=> setActiveTab(i)}  className={`p-6 hover:bg-dark hover:text-[white] font-bold text-sm ${activeTab === i ? "bg-dark text-[white]":""}`}>{btn}</button>)
                }
                
            </div>
            <div>

                <ImageSlider data={activeTab ===0? FrontData : activeTab ===1? SideData : RearData}/>
            </div>


        </div>
    );
};

export default TabSliderCarDetails;