"use client"
import { useEffect, useState } from "react";
import { carData } from "../../../../../public/data/data";
import Button from "@/app/components/Button";
import Link from "next/link";

const PricesComponent = () => {
        const [selectCar,setselectCar] = useState(null);
        const [price,setPrice] = useState(null);
        const [loading,setLoading] = useState(false);
       


    const handelShowPrice = () =>{
        if(selectCar){
            setLoading(true);
        setTimeout(()=>{
           const GetCar =  carData.find(car => car.name === selectCar);
           setPrice(GetCar.price)
            setLoading(false);

        },1000)
        }
    }

    return (
        <div className="container space-y-16 min-h-screen">
            <h1 className="text-3xl font-semibold text-center">Check Ex-showroom price of Hyundai cars</h1>

            <section className=" space-y-4">
                        <h2 className="text-center text-xl font-semibold">Model</h2>
                        <div className="grid max-w-lg mx-auto gap-4">
                    <select onChange={(e)=> setselectCar(e.target.value)} defaultValue={"select"} name="carName" id="carName" className="w-full max-w-lg p-2 border mx-auto rounded-sm ">
                        <option disabled value="select">Select Car</option>
                         {
                            
                            carData.map((car,i)=> <option key={i} value={car.name}>{car.name}</option>)
                        }
                    </select>
                    
                            <button onClick={handelShowPrice} className="text-[white] px-4 py-2  bg-primary">SHOW  PRICE </button>

                           <div>
                           { loading ? <h3 className="text-xl font-bold text-center bg-[#ecebeb] p-4">Loading...</h3>:price ?   <h3 className="text-xl font-bold text-center bg-[#ecebeb] p-4">{price} BDT</h3>: "" }
                           </div>
                    </div>

                    
            </section>
                <section className="flex justify-center gap-16">
                
                        <Link href={`/contact-us/request-test-drive?c=${selectCar}`} className="bg-primary text-[white] px-4 py-2">Request A Test Drive</Link>
                    
                </section>
        </div>
    );
};

export default PricesComponent;