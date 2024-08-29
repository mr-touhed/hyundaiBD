"use client"

import { carData } from '../../../public/data/data';

const TestDrive = ({path}) => {
  
    const modelList = carData.map(car => car.name.toLowerCase())
    const carModel = path?.split("/")[2]
    
    return (
        <div className='bg-[#E4DCD3] py-16 '>
            <h2 className='font-semibold text-center text-3xl'>Request a Test drive</h2>
            <form className="container space-y-2" >
                <div className='text-lg'>
                    <label htmlFor="gender">Salutation</label>
                    <div className='flex  gap-16 text-md'>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="gender" id="gender" value="Mr" />
                            <label htmlFor="gender">Mr</label>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="gender" id="gender" value="Mrs" />
                            <label htmlFor="gender">Mrs</label>
                            </div>
                    </div>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="gender">Name</label>
                <input type="text" name="name" id="name" className='p-1'/>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="Email" className='p-1'/>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Mobile">Mobile</label>
                <input type="tel" name="mobile" id="Mobile" className='p-1'/>
                </div>

                <div className='grid text-lg'>
                <label htmlFor="Mobile">Model</label>
                        <select name="model" id="Mobile" className='p-1' value={carModel} disabled>
                        
                            {
                               modelList.map(car => <option key={car} value={car}>{car.toUpperCase()}</option>)
                            }
                        </select>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Mobile">State</label>
                        <select name="state" id="State" className='p-1' value={carModel} disabled>
                        
                           <option value="">Dhaka</option>
                        </select>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="city">City</label>
                <select name="city" id="city" className='p-1' value={carModel} disabled>
                        
                           <option value="">Mirpur</option>
                        </select>
                </div>

                <div className='grid text-lg'>
                <label htmlFor="city">Dealer</label>
                <select name="dealer" id="Dealer" className='p-1' value={carModel} disabled>
                        
                           <option value="">FairTechnology</option>
                        </select>
                </div>
                <div className='grid text-lg'>
                    <label htmlFor="Comments">Comments</label>
                    <textarea name="comments" id="Comments" className='h-44'></textarea>
                    <div className='flex items-center text-sm gap-3 mt-2'>
                        <input type="checkbox" name="agree" id="agree" className='w-5 h-5'/>
                        <label htmlFor="agree">* I accept the terms & conditions</label>
                    </div>
                </div>
                <div className='grid place-content-center'>
                            <button className='w-36 h-9 bg-primary text-[white]'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TestDrive;