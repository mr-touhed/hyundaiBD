"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CarMenu from './menu/CarMenu';
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [selectMenu,setSelectMenu] = useState('');
    const handelMenu = (e) =>{
       const menuType = e.target.getAttribute("data");
        setSelectMenu(menuType)
    }
    return (
        <>
        <header className='relative  border-b-lightDark shadow-lg '>
                <div className='container flex justify-between h-16 items-center'>
                <div>
                        <Image src="/images/ico-logo.png" width={160} height={80} alt="logo"/>
                </div>
                {/* for dextop menu  */}
                <nav className='lg:flex gap-6 hidden text-sm'>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(0)}}  data="find_car" className={`${activeIndex === 0 && "active"} `}>Find a Car</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(1)}}  data="sell your car" className={`${activeIndex === 1 && "active"}`}>Sell your Car</button>
                    <Link href="/">Vehicle Exchange</Link>
                    <Link href="/">Connect to Service</Link>
                    <Link href="/">Hyundai Story</Link>
                    <Link href="/">News</Link>
                    <Link href="/">Contact Us</Link>
                </nav>
                <div>
                    <ul className='flex gap-6 '>
                        <li>
                        <FaRegUser />
                        </li>
                        <li>
                        <IoLocationOutline />
                        </li>
                        <li>
                        <IoShareSocialOutline />
                        </li>
                    </ul>
                    
                </div>
                
                </div>


                {
                    selectMenu && 
                    <section className='container absolute top-10 left-0 right-0 min-h-44 z-10 pt-10 bg-[white] p-16'>
                    <button className='absolute right-8 top-8' onClick={()=> setSelectMenu('')}><IoCloseSharp className='w-8 h-8'/></button>
                        

                    {
                       selectMenu === "find_car"  && <CarMenu/>
                    }
                </section>
                }
        </header>


        </>
    );
};

export default Navbar;