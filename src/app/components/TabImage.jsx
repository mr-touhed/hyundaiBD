"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const TabImage = ({TabData,page}) => {
    
    const [showImage,setShowImage] = useState(TabData[0]);
    
   const handelChange = (name) =>{
        const show = TabData.find(data => data.tab === name)
        setShowImage(show);
        console.log(showImage.tab , name, showImage);
   }
   
   console.log();
    return (
        <div className="container my-4"> 
            <ul className={`grid ${page}`}>
                {
   
                    TabData.map(data => <li onClick={()=> handelChange(data.tab)} key={data.tab} className={`${showImage.tab === data.tab ? "bg-[#444444] text-[white]" : ''} font-semibold  h-16 text-md hover:text-[white] cursor-pointer hover:bg-[#444444] grid place-content-center`}>{data.tab}</li>)
                }
            </ul>
            <div >
            <Image src={showImage.img} alt="" width={1200} height={600} className="w-full mb-16 h-auto"/>
                <div className="max-w-[800px] mx-auto">
                <h2 className=" text-4xl font-bold">{showImage.tab}</h2>
                <p>{showImage.details}</p>
                </div>
                
            </div>
        </div>
    );
};

export default TabImage;