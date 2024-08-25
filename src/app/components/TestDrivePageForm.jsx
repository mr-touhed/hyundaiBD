import Image from "next/image";
import { carData } from "../../../public/data/data";
import Button from "./Button";

const TestDrivePageForm = () => {
    const modelList = carData.map(car => car.name.toLowerCase())
    return (
        <div className=' py-16 '>
           
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
                <input type="text" name="name" id="name" className='p-1 border border-[gray]'/>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="Email" className='p-1 border border-[gray]'/>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Mobile">Mobile</label>
                <input type="tel" name="mobile" id="Mobile" className='p-1 border border-[gray]'/>
                </div>

                <div className='grid text-lg'>
                <label htmlFor="Mobile">Model</label>
                        <select name="model" id="Mobile" className='p-1 border border-[gray]' >
                        
                            {
                               modelList.map(car => <option key={car} value={car}>{car.toUpperCase()}</option>)
                            }
                        </select>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="Mobile">State</label>
                        <select name="state" id="State" className='p-1 border border-[gray]'  >
                        
                           <option value="">Dhaka</option>
                        </select>
                </div>
                <div className='grid text-lg'>
                <label htmlFor="city">City</label>
                <select name="city" id="city" className='p-1 border border-[gray]' >
                        
                           <option value="">Mirpur</option>
                        </select>
                </div>

                <div className='grid text-lg'>
                <label htmlFor="city">Dealer</label>
                <select name="dealer" id="Dealer" className='p-1 border border-[gray]' >
                        
                           <option value="">FairTechnology</option>
                        </select>
                </div>
                <div className='grid text-lg'>
                    <label htmlFor="Comments">Comments</label>
                    <textarea name="comments" id="Comments" className='h-44 border border-[gray]'></textarea>
                    <div className='flex items-center text-sm gap-3 mt-2'>
                        <input type="checkbox" name="agree" id="agree" className='w-5 h-5 '/>
                        <label htmlFor="agree">* I accept the terms & conditions</label>
                    </div>
                </div>
                <div className='grid place-content-center'>
                            <button className='w-36 h-9 bg-primary text-[white]'>Submit</button>
                </div>
            </form>


            <section className="bg-[#E4DCD3] py-6 mt-6">
                            <h2 className="text-3xl font-semibold text-center">Do check out!</h2>
                    <div className="container grid md:grid-cols-3 grid-cols-1 items-center">
                        <div>
                            <h2 className="text-4xl font-semibold text-center">The new Hyundai CRETA</h2>
                            <h3 className="text-2xl font-semibold text-center">Undisputed. Ultimate.</h3>
                        </div>
                        <div>
                            <Image alt="car image" src="/images/creta-suvpc.png" width={500} height={500} className=""/>
                        </div>
                        <div className="flex gap-3 md:flex-row flex-col items-center">
                            <Button href="/find-a-car/creta/highlights">Know More</Button>
                            <Button href="/">Book Now</Button>
                            <Button href="/">Test Drive</Button>
                        </div>
                    </div>

            </section>
        </div>
    );
};

export default TestDrivePageForm;