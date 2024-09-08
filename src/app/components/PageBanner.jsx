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
                    <ul className="flex container py-6 gap-2 font-light">
                        <li className="underline ">
                            <Link href="/">Home</Link>
                        </li>
                        {
                            PathList.map((path,i)=> <><li key={path} className={`${PathList.length-1 === i ? "underline text-primary font-semibold" : "underline"} `}>
                            {path}
                            
                        </li>
                        {PathList.length-1 > i ? <li>&gt;</li> : ""}
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