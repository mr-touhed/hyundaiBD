
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { carData } from "../../../../public/data/data";
import Link from "next/link";

const CarMenu = ({handel_close}) => {
    const [model,setModel] = useState('SUV');
    const [index,setindex] = useState(0);
    const [displayCar,setDisplayCar] = useState(carData)
    const models = ['SUV','Pick-up','All'];

    useEffect(()=>{

      
    

    if(model){
       if(model !== "All"){
        const cars =  carData.filter(car => car.model === model  );
       setDisplayCar(cars)
       }else{
        setDisplayCar(carData)
       }
    }

    },[model])

    
    return (
        <div className="">
            <ul className="bg-[#444444] text-[white] flex max-w-3xl  ">
                {
                    models.map((modl,i)=> <li onClick={()=>{setindex(i); setModel(modl)}} key={i} className={`${i === index ? "bg-[white] text-[black]" : ''} text-sm font-semibold w-40 text-center py-2 cursor-pointer hover:text-[black] hover:bg-[white]`}>{modl}</li>)
                }
            </ul>

            {/* <section className="flex p-8">
                    {
                      model !== "All" &&  displayCar && displayCar.map((car,i) => 
                            <Link href={car.path} key={i} className="cursor-pointer" onClick={handel_close}>
                                <Image  src={car.image} alt={car.name} width={200} height={100} className="p-6"/>
                                <p className="text-center text-xs">{car.name}</p>
                            </Link>
                        )
                    }
            </section> */}
            <section className="grid grid-cols-3 gap-8 p-8">
                    {
                      model !== "All" &&  displayCar && displayCar.map((car,i) => 
                            <Link href={car.path} key={i} className="cursor-pointer max-w-[400px]  group" onClick={handel_close}>
                                <Image  src={car.image} alt={car.name} width={1000} height={500} className="p-6 w-full h-auto group-hover:scale-125 transition-transform ease-out"/>
                                <p className="text-center text-xs">{car.name}</p>
                            </Link>
                        )
                    }
            </section>
            {model === "All" &&
                <section>
                        
                         
                         
                         <div>
                                <h2  className="text-lg border-b border-b-[#d2d1d1] p-1 font-semibold max-w-[800px]" >SUV</h2>
                                <div className="grid grid-cols-2 p-2">
                                    
                                    {
                                        displayCar.filter(car => car.model === "SUV")?.map(car=> <Link href={car.path} key={car.name} className="cursor-pointer max-w-[400px]  group" onClick={handel_close}> 
                                            <Image   src={car.image} alt={car.name}  width={1000} height={500} className="p-6 w-full h-auto group-hover:scale-125 transition-transform ease-out"/>
                                            <p className="text-center text-xs">{car.name}</p>
                                            </Link>)
                                    }
                                        
                                    
                                    </div>
                         </div>
                         <div>
                                <h2  className="text-lg border-b border-b-[#d2d1d1] p-1 font-semibold max-w-[800px]" >Pick Up</h2>
                                <div className="grid grid-cols-2">
                                    
                                    {
                                        displayCar.filter(car => car.model.toLowerCase() === "pick-up")?.map(car=> <Link href={car.path} key={car.name} className="cursor-pointer max-w-[400px]  group" onClick={handel_close}> 
                                            <Image   src={car.image} alt={car.name}  width={1000} height={500} className="p-6 w-full h-auto group-hover:scale-125 transition-transform ease-out"/>
                                            <p className="text-center text-xs">{car.name}</p>
                                            </Link>)
                                    }
                                        
                                    
                                    </div>
                         </div>
                          
                        
                </section>
            }
        </div>
    );
};

export default CarMenu;