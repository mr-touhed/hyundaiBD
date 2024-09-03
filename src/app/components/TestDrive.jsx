"use client"

import { useEffect, useState } from 'react';
import { carData } from '../../../public/data/data';
import { getCityList, getDistrictList } from '../utils/locations';

const TestDrive = ({path}) => {

    const [formData,setFormData] = useState({})
    const [divisionName,setDivisionName] = useState('Dhaka')
    const [districtName,setDistrictName] = useState('')
    const [divisionList,setDivisionList] = useState([]);
    const [districtList,setDistrictList] = useState([]);
    const [loading1,setLoading1] = useState(true)
    const [loading2,setLoading2] = useState(true)
    const modelList = carData.map(car => car.name.toLowerCase())
    const carModel = path?.split("/")[2]
    
    useEffect(()=>{
        const getDivitionData = async () =>{
           const list = await  getDistrictList();
           setLoading1(false)
           setDivisionList(list);
        }
        getDivitionData()
    },[])


    useEffect(()=>{
        const getDistrictData = async () =>{
            
           const list = await  getCityList(divisionName);
           setLoading2(false)
           setDistrictList(list)
           
        }
        getDistrictData()
    },[divisionName])

    return (
        <section className='bg-[#F6F3F2] py-16'>
            
        <div className='bg-[white] p-4 container mx-auto rounded-md shadow-lg'>
            <h2 className='font-light  text-center text-4xl  '>~Request a Test drive~</h2>
            <form className="p-8 space-y-4" >
                
                <div className='grid text-sm'>
                <label htmlFor="gender">Full Name</label>
                <input type="text" name="name" id="name" className='p-1 border rounded-md border-[#dfdcdb] outline-none focus:border-[black]'/>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <div className='grid text-sm'>
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="Email" className='p-1 border rounded-md border-[#dfdcdb] outline-none'/>
                </div>
                <div className='grid text-sm'>
                <label htmlFor="Mobile">Mobile</label>
                <input type="tel" name="mobile" id="Mobile" className='p-1 border rounded-md border-[#dfdcdb] outline-none'/>
                </div>
                </div>

                <div className='grid text-sm'>
                <label htmlFor="Mobile">Model</label>
                        <select name="model" id="Mobile" className='p-1 border rounded-md border-[#dfdcdb] outline-none' value={carModel} disabled>
                        
                            {
                               modelList?.map(car => <option key={car} value={car}>{car.toUpperCase()}</option>)
                            }
                        </select>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <div className='grid text-sm'>
                <label htmlFor="Mobile">Division</label>
                        <select name="state" id="State" className='p-1 border rounded-md border-[#dfdcdb] outline-none' value={divisionName} onChange={(e) =>setDivisionName(e.target.value)}>
                                {
                                    loading1 && <option >...</option>
                                }
                                {
                              divisionList &&  divisionList?.map(dist => <option key={dist.coordinates} value={dist.division}>{dist.division}</option>)
                            }
                           
                        </select>
                </div>
                <div className='grid text-sm'>
                <label htmlFor="city">District</label>
                <select name="city" id="city" className='p-1 border rounded-md border-[#dfdcdb] outline-none' value={districtName} onChange={(e)=>setDistrictName(e.target.value)}>
                                {
                                    loading2 && <option >...</option>
                                }
                        {
                            districtList.map(dist => <option key={dist.coordinates} value={dist.district}>{dist.district}</option>)
                        }
                           
                        </select>
                </div>
                </div>

                <div className='grid text-sm'>
                <label htmlFor="city">Dealer</label>
                <select name="dealer" id="Dealer" className='p-1 border rounded-md border-[#dfdcdb] outline-none' value={carModel} disabled>
                        
                           <option value="FairTechnology">FairTechnology</option>
                        </select>
                </div>
                <div className='grid text-sm'>
                    <label htmlFor="Comments">Comments</label>
                    <textarea name="comments" id="Comments" className='h-32 border rounded-md border-[#dfdcdb] outline-none'></textarea>
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
        </section>
    );
};

export default TestDrive;