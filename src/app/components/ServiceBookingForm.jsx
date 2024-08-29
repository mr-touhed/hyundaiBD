"use client"

const ServiceBookingForm = () => {
    return (
        <form className="space-y-4 md:p-16">
                <div>
                    <label className="font-semibold" htmlFor="">Salutation*</label>
                    <div className="flex gap-16">
                            <span className="flex gap-2">
                            <input type="radio" name="" id="" />
                                Mr
                            </span>
                            <span className="flex gap-2">
                            <input type="radio" name="" id="" />
                                Mrs
                            </span>
                    </div>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Name*</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="Name"/>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Email*</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="Email"/>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Mobile*</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="Mobile"/>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Service Type*</label>
                    <select name="" id="" className="border p-2 border-[#E4DCD3]">
                        <option value="">select</option>
                        <option value="">Paid Service</option>
                        <option value="">Free Service</option>
                        <option value="">Running Repair</option>
                    </select>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">State*</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="State"/>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">City*</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="City"/>
                </div>
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Dealer</label>
                    <select name="" id="" className="border p-2 border-[#E4DCD3]">
                        <option value="">FairTechnology</option>
                      
                    </select>
                </div>

                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Request For</label>
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="" id="" />
                            <span className="font-semibold">None</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="" id="" />
                            <span className="font-semibold">Pickup Only</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="" id="" />
                            <span className="font-semibold">Drop Only</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" name="" id="" />
                            <span className="font-semibold">Pickup and Drop Only</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Service Appointment Time*</label>
                <div className="grid grid-cols-2 gap-8">
                                <select value="" className="border p-2 border-[#E4DCD3]">
                                            <option name="" id="">Hour</option>
                                            <option name="" id="">9</option>
                                            <option name="" id="">10</option>
                                            <option name="" id="">11</option>
                                            <option name="" id="">12</option>
                                            <option name="" id="">13</option>
                                            <option name="" id="">14</option>
                                            <option name="" id="">15</option>
                                            <option name="" id="">16</option>
                                            <option name="" id="">17</option>
                                </select>
                                <select value="" className="border p-2 border-[#E4DCD3]">
                                            <option name="" id="">Minute</option>
                                            <option name="" id="">00</option>
                                            <option name="" id="">30</option>
                                            
                                </select>
                            </div>
                </div>

                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">VIN Number* (eg.MALAA82HR4M123456)</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="VIN Number"/>
                </div>

                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Registration No.</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="Registration No"/>
                </div>
                
                
                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Odometer(Km&lsquo;s).</label>
                <input type="text" className="border p-2 border-[#E4DCD3]" placeholder="Odometer(Km's)"/>
                </div>


                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">Service Requirement</label>
               
                <textarea name="" id="" className="h-24 border p-2 border-[#E4DCD3]" placeholder="Service Requirement"></textarea>
                </div>

                <div className="flex flex-col">
                <label className="font-semibold" htmlFor="" >Additional Requirement (if any)</label>
               
                <textarea name="" id="" className="h-24 border p-2 border-[#E4DCD3]" placeholder="Additional Requirement (if any)"></textarea>
                </div>

                <div>
                    <button className="block  bg-primary px-8 py-2 mx-auto text-[white] ">Submit</button>
                </div>
        </form>
    );
};

export default ServiceBookingForm;