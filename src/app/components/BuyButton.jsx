"use client"
import Link from "next/link";
import { useState } from "react";


const BuyButton = ({StopSlider}) => {
    const [showMenu,setShowMenu] = useState(false);
    const [showFrom,setShowFrom] = useState(false)
    return (
       
            
                    <div className="relative w-[68%] text-sm">
                            <button onClick={()=>{ setShowMenu(!showMenu),StopSlider()}}  className=" cursor-pointer  text-[white] lg:text-sm lg:px-12  lg:py-2 p-2   bg-primary shadow-md md:w-[214px] md:h-[50px] w-[150px] flex justify-center items-center text-sm">Buy Your Car
                            
                            </button>
                           
                            {
                                showMenu && <div className="  p-4 shadow-lg w-[290px] bg-[white] text-[black] absolute md:left-[220px] -left-[50px] -top-[150px] md:bottom-0 border flex justify-between">
                                <div>
                                <h3>Ready To Buy</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">Get Question</Link>
                                        </li>
                                        <li onClick={()=> setShowFrom(!showFrom)} className=" cursor-pointer hover:text-primary">
                                            Online Booking
    
                                            
                                        </li>
                                        <li>
                                            Online Finance
                                        </li>
                                    </ul>
                                </div>
                                
                                
                                
                                <div>
                                <h3>Shopping Assist</h3>
                                    <ul>
                                        <li>
                                            <Link href="/click-to-buy/test-drive">Request a Test Drive</Link>
                                        </li>
                                        <li>
                                        <Link href="/">Download E-Brochure</Link>
                                        </li>
                                        <li>
                                        <Link href="/">Spacial Offer</Link>
                                        </li>
                                        <li>
                                        <Link href="/">Prices</Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            }

{
                                                showFrom && <div className="p-4   shadow-lg md:w-[355px] w-full bg-[white] absolute -right-0  max-h-[300px] overflow-y-auto -bottom-[15px] border">
                                                <h2 className="text-xl text-center">Enter Your Details</h2>
                
                                                <form className="space-y-2">
                                                    <div className="grid grid-cols-1 border p-1">
                                                        <label htmlFor="">Your Name</label>
                                                        <input  type="text" name="" id="" className="border-0 border-b"/>
                                                    </div>
                
                                                    <div className="grid grid-cols-1 border p-1">
                                                        <label htmlFor="">Your Email</label>
                                                        <input type="text" name="" id="" className="border-0 border-b"/>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" name="" id="" className="w-4"/>
                                                        <label htmlFor="" className="">
                                                            <h4>Post Online Add</h4>
                                                            <p className="text-xs">If you went to some</p>
                                                        </label>
                                                    </div>
                                                    <p className="text-left text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aut nulla deleniti natus laudantium consequatur?</p>
                                                    <button className="text-[white] lg:text-sm lg:px-12  lg:py-2 p-2 text-base  bg-primary shadow-md md:w-[214px] md:h-[50px] w-[150px] flex justify-center items-center">Submit</button>
                                                </form>
                                        </div>
                                            }

                    </div>
      
    );
};

export default BuyButton;