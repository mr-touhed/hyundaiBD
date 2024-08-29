'use client'

import { carData } from "../../../public/data/data";


const OnlineBooking = () => {

   

    return (
        <div className="space-y-4 p-2">
            <div className="border-b border-[#dddbda]">
            <h2 className="text-xl">BOOK A CAR</h2>
            </div>
            <form action="" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-1">
                            <label htmlFor="">Model</label>
                            <select name="" id="" className="border border-[#dddbda] p-2">
                                {
                                    carData.map(car => <option key={car.name}>{car.name}</option>)
                                }
                            </select>
                        </div>


                        <div className="grid grid-cols-1">
                            <label htmlFor="">Fuel Type</label>
                            <select name="" id="" className="border border-[#dddbda] p-2">
                                    <option value=""> Fuel Type</option>
                                    <option value=""> Diesel</option>
                                    <option value=""> Petrol</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                    <label htmlFor="">Variant</label>
                    <input type="text" className="p-2 border border-[#dddbda]"/>
                    </div>

                    <div className="grid grid-cols-1">
                    <label htmlFor="">Exterior Color</label>
                    <input type="text" className="p-2 border border-[#dddbda]"/>
                    </div>

                    <div className="grid grid-cols-1">
                    <label htmlFor="">Interior Color</label>
                    <input type="text" className="p-2 border border-[#dddbda]"/>
                    </div>

                    <div className="grid grid-cols-2 gap-4">


                    <div className="grid grid-cols-1">
                    <label htmlFor="">State</label>
                    <input type="text" className="p-2 border border-[#dddbda]"/>
                    </div>


                    <div className="grid grid-cols-1">
                    <label htmlFor="">City</label>
                    <input type="text" className="p-2 border border-[#dddbda]"/>
                    </div>
                    </div>
            </form>

                     <div className="p-4 bg-primary text-[white] text-lg">
                    <div className="flex justify-between">
                    <h2> Your booking amount is </h2>
                    <span>$0</span>
                    </div>
                     </div>

                     <div className="grid place-content-center">
                        <button className="px-8 py-2 bg-primary text-[white]">
                            Proceed
                        </button>
                     </div>
        </div>
    );
};

export default OnlineBooking;