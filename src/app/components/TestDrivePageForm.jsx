"use client"
import Image from "next/image";
import { carData } from "../../../public/data/data";
import Button from "./Button";
import { useEffect, useState } from "react";
import { getCityList } from "../utils/locations";
import { submitCustomerForm } from "../utils/formValidator";
import { ShowAlert } from "../utils/alert";

const TestDrivePageForm = ({districtList,car}) => {
    const modelList = carData.map(car => car.name.toLowerCase());
    const [selectState,setSelectState] = useState('Dhaka');
    const [cityList,SetcityList] = useState([])
    const [formData,setFormData] = useState({dealer:"FairTechnology", service_type:'', name:"",email:"",mobile:"",model:car, state:"",city:"",comments:"", type:"pending"})
    const [loading,setLoading] = useState(false)

    useEffect(()=>{

            const getList = async () =>{
                try {
                    const list = await getCityList(selectState);
                    SetcityList(list)
                } catch (error) {
                    console.log(error);
                }
            }

            getList()

            setFormData(prev => ({...prev,state: selectState}))

    },[selectState])
       

    const handel_form_value = (e) =>{
        setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const handel_form_submit = async (e) =>{
        e.preventDefault();

            try {
                setLoading(true)
                const result = await submitCustomerForm(formData);
                if(result.status){
                    ShowAlert(result.status,result.message)
                    setLoading(false)
                    setFormData({dealer:"FairTechnology", service_type:'', name:"",email:"",mobile:"",model:car, state:"",city:"",comments:"",type:"pending"})
                }else{
                    ShowAlert(result.status,result.message)
                    setLoading(false)
                }
            } catch (error) {
                ShowAlert(false,error.message)
                setLoading(false)
            }
        
    }

    return (
        <div className=' py-16 bg-[#F6F3F2]'>
           
            <form className="max-w-[700px] mx-auto space-y-2  p-2" onSubmit={handel_form_submit}>
                <div className=' flex gap-4 bg-[white] justify-center text-base font-light p-2 rounded-lg' >
                    
                    <select required onChange={(e)=>handel_form_value(e)} name="service_type" id="" className="text-base border bg-primary text-[white] p-1 rounded-md font-thin" value={formData.service_type}>
                        <option disabled value="">Select Service Type</option>
                        <option value="Test Drive">Test Drive</option>
                        <option value="Query">Query</option>
                    </select>
                </div>
                <div className='grid text-md'>
                <label htmlFor="name" className="text-sm">Name</label>
                <input onChange={(e)=>handel_form_value(e)} value={formData.name} type="text" name="name" id="name" className='p-1 border border-[gray] rounded-md'/>
                </div>
                <div className='grid text-md'>
                <label htmlFor="email" className="text-sm">Email</label>
                <input onChange={(e)=>handel_form_value(e)} value={formData.email} type="email" name="email" id="email" className='p-1 border border-[gray] rounded-md'/>
                </div>
                <div className='grid text-md'>
                <label htmlFor="mobile" className="text-sm">Mobile</label>
                <input onChange={(e)=>handel_form_value(e)} value={formData.mobile} type="tel" name="mobile" id="mobile" className='p-1 border border-[gray] rounded-md'/>
                </div>

                <div className='grid text-md'>
                <label htmlFor="model" className="text-sm">Model</label>
                        <select onChange={(e)=>handel_form_value(e)} value={formData.model} name="model" id="model" className='p-1 border border-[gray] rounded-md' disabled={car}>
                        
                            {
                               modelList.map(car => <option key={car} value={car}>{car.toUpperCase()}</option>)
                            }
                        </select>
                </div>
                <div className='grid text-md'>
                <label htmlFor="state" className="text-sm">State</label>
                        <select required  name="state" id="state" className='p-1 border border-[gray] rounded-md'  onChange={(e) => setSelectState(e.target.value)} value={formData.state}>
                        <option disabled value="">Select</option>
                        {
                            districtList.map(state => <option key={state.coordinates} value={state.division}>{state.division}</option>)
                        }
                           
                        </select>
                </div>
                <div className='grid text-md'>
                <label htmlFor="city" className="text-sm">City</label>
                <select required onChange={(e)=>handel_form_value(e)} name="city" id="city" value={formData.city} className='p-1 border border-[gray] rounded-md' disabled={!cityList} >
                        <option disabled value="">Select</option>
                        {
                            cityList?.map(city => <option key={city.coordinates} value={city.district}>{city.district}</option>)
                        }
                           
                        </select>
                </div>

                <div className='grid text-md'>
                <label htmlFor="city" className="text-sm">Dealer</label>
                <select name="dealer" id="Dealer" className='p-1 border border-[gray] rounded-md' disabled>
                        
                           <option value="FairTechnology">FairTechnology</option>
                        </select>
                </div>
                <div className='grid text-md'>
                    <label htmlFor="comments" className="text-sm">Comments</label>
                    <textarea required onChange={(e)=>handel_form_value(e)} value={formData.comments} name="comments" id="comments" className='h-44 border border-[gray] rounded-md'></textarea>
                    {/* <div className='flex items-center text-sm gap-3 mt-2'>
                        <input type="checkbox" name="agree" id="agree" className='w-5 h-5 '/>
                        <label htmlFor="agree" className="text-sm">* I accept the terms & conditions</label>
                    </div> */}
                </div>
                <div className='grid place-content-center'>
                            <button type="submit" disabled={loading} className='w-36 h-9 bg-primary disabled:bg-[#323262] text-[white]'>{loading ? "Loading..." : "Submit" } </button>
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
                            <Button href="/bookACar">Book Now</Button>
                            <Button href="/click-to-buy/test-drive">Test Drive</Button>
                        </div>
                    </div>

            </section>
        </div>
    );
};

export default TestDrivePageForm;