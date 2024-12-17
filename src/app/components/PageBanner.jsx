"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PageBanner = ({img}) => {
    const pathName = usePathname();
    const PathList = pathName?.split("/");
    return (
        <section className="bg-[#EEEDF2]">
                    <ul className="flex container py-6 md:gap-2 gap-1 items-center font-light md:text-base text-xs flex-wrap">
                        <li className=" ">
                            <Link href="/">Home</Link>
                        </li>
                        {
                            PathList.map((path,i)=> <><li key={path} className={`${PathList.length-1 === i ? " text-primary font-semibold" : ""} capitalize`}>
                            {path}
                            
                        </li>
                        {PathList.length-1 > i ? <li className='font-bold'>&gt;</li> : ""}
                        </>)
                        }
                        {/* <li>&gt;</li>
                        <li className="underline">{path[0]}</li>
                        <li>&gt;</li>
                        <li className="underline text-primary font-semibold">{path[1]}</li> */}
                    </ul>

                    <section >
                            <Image src={img} alt={` image banner`} width={1200} height={700} className="w-full md:h-[72vh] h-[30vh] object-cover"/>
                    </section>

                    
            </section>
    );
};

export default PageBanner;