
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const CarMenu = () => {
    const [model,setModel] = useState('SUV');
    const [index,setindex] = useState(0);
    const [displayCar,setDisplayCar] = useState([])
    const models = ['SUV','Pick-up','All'];

    useEffect(()=>{

        const carData = [
            {
                models:"SUV",
                cars:[
                    {
                        name:"PALISADE",
                        img:"/images/thumb/Palisade-thumb.png"
                    },
                    {
                         name:"TUCSON",
                        img:"/images/thumb/tucson_thumbnail_pc.png"
                    },
                    {
                        name:"CRETA GRAND",
                       img:"/images/thumb/Creat_grand-thumb.png"
                   },
                    {
                        name:"CRETA",
                       img:"/images/thumb/creta-thumb.png"
                   },

                ]
            },           
            {
                models:"Pick-up",
                cars:[
                    {
                         name:"H 100",
                        img:"/images/thumb/H-100_thumbnil.png"
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
            <ul className="bg-[#444444] text-[white] flex max-w-3xl  ">
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