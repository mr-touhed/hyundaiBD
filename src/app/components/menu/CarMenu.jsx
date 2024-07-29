
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const CarMenu = () => {
    const [model,setModel] = useState('Hatchback');
    const [index,setindex] = useState(0);
    const [displayCar,setDisplayCar] = useState([])
    const models = ['Hatchback','Sedan','SUV','Electric','All'];

    useEffect(()=>{

        const carData = [
            {
                models:"Hatchback",
                cars:[
                    {
                        name:"Grand i10 NIOS",
                        img:"/images/venue_thumbnail_pc.png"
                    },
                    {
                         name:"i20",
                        img:"/images/i20pe_PC.png"
                    }

                ]
            },           
            {
                models:"Sedan",
                cars:[
                    {
                         name:"Aura",
                        img:"/images/aura_thumbnail_pc.png"
                    },
                    
                ]
        
            },
            
        ]
    

    if(model){
       if(model !== "All"){
        const cars =  carData.filter(car => car.models === model  );
       setDisplayCar(cars)
       }else{
        setDisplayCar(carData)
       }
    }

    },[model])
    return (
        <div>
            <ul className="bg-[#444444] text-[white] flex max-w-3xl justify-between ">
                {
                    models.map((modl,i)=> <li onClick={()=>{setindex(i); setModel(modl)}} key={i} className={`${i === index ? "bg-[white] text-[black]" : ''}  w-40 text-center py-2 cursor-pointer hover:text-[black] hover:bg-[white]`}>{modl}</li>)
                }
            </ul>

            <section className="flex">
                    {
                      model !== "All" &&  displayCar[0] && displayCar[0]?.cars.map((car,i) => 
                            <div key={i} className="cursor-pointer">
                                <Image  src={car.img} alt={car.name} width={200} height={100}/>
                                <p className="text-center">{car.name}</p>
                            </div>
                        )
                    }
            </section>
            {model === "All" &&
                <section>
                        {
                            displayCar.map((car,i) => <div key={i} className="py-4 ">
                                    <h2 className="text-xl border-b border-b-[#d2d1d1] p-1 font-semibold" >{car.models}</h2>
                                    <div className="grid grid-cols-6">
                                    {
                                       car.cars.map(model => <div key={model.name} className="cursor-pointer"> 
                                        <Image   src={model.img} alt={model.name} width={200} height={100}/>
                                        <p className="text-center">{model.name}</p>
                                        </div>
                                        ) 
                                    }
                                    </div>
                            </div>)
                        }
                </section>
            }
        </div>
    );
};

export default CarMenu;