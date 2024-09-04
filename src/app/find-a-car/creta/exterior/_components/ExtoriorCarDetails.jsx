"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const   ExtoriorCarDetails = ({image,children, heading, title}) => {
    const [showdetails,setShowDetails] = useState(false)
    return (
        <>
           <div className="relative min-h-[30vh] ">
                <Image
                 src={image} alt="car" width={1300} height={700} className="w-full h-[100%] absolute object-cover md:relative md:object-contain "/>
                <div className=" absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center md:gap-8 gap-3 text-center text-[white]">
                    <h2 className="text-2xl font-semibold">{heading}</h2>
                    <p>{title}</p>
                    <button onClick={()=> setShowDetails(!showdetails)} className="text-xl font-bold  bg-[#00aad2] w-[40px] h-[40px] rounded-full block">+</button>
                </div>
                    
                </div> 

            {
                showdetails && <div>

                            {children}

                </div>
            }


        </>
    );
};

export default ExtoriorCarDetails;