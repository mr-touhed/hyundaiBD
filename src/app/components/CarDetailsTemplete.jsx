"use client"
import ButtomMenu from "@/app/components/ButtomMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TestDrive from "./TestDrive";


const CarDetailsTemplete = ({carName,image,children}) => {
    const path = usePathname()
 
    const currentPage = path?.split("/")[3];
    const carModel = path?.split("/")[2]
    const menu = [
        
        {
            name:"Highlights",
            path:`highlights`
        },
        {
            name:"Exterior",
            path:`exterior`
        },
        {
            name:"Intorior",
            path:`intorior`
        },
        {
            name:"Performance",
            path:`performance`
        },
        {
            name:"Safety",
            path:`safety`
        },
        {
            name:"Convenience",
            path:`convenience`
        },
        {
            name:"Specification",
            path:`specification`
        },
        {
            name:"Features",
            path:`features`
        },

    ]

    return (
        <div>
            <section className="bg-[#EEEDF2]">
                    <ul className="flex container py-6 gap-2 font-light">
                        <li className="underline ">
                            <Link href="/">Home</Link>
                        </li>
                        <li>&gt;</li>
                        <li className="underline">{carName}</li>
                        <li>&gt;</li>
                        <li className="underline text-primary font-semibold">{currentPage}</li>
                    </ul>

                    <section >
                            <Image src={image} alt={`${carName}'s image banner`} width={1200} height={700} className="w-full md:h-[72vh] h-[30vh] object-cover"/>
                    </section>
            </section>

            
            <section className="sticky top-0 bg-[white] shadow-md z-50">
            <ButtomMenu />
                <div className="h-16 container ">
                        <ul className="flex  items-center h-full gap-12 md:overflow-hidden overflow-scroll">
                            <li className="font-semibold">{carName}</li>
                            {
                                menu.map(link => <li key={link.name} ><Link className={`font-semibold ${link.path == currentPage && "underline text-primary"}`} href={link?.path || "/"} >{link.name}</Link></li>)
                            }
                            <li className="font-semibold text-nowrap">e-brochure</li>
                        </ul>
                </div>
            </section>
            
            {children}
            <TestDrive path={path} carModel={carModel}/> 
        </div>
    );
};

export default CarDetailsTemplete;