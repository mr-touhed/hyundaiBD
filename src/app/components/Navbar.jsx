"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CarMenu from './menu/CarMenu';
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import SubMenu from './menu/SubMenu';
import { ServiceMenuItems, StoryMenuItems } from '../../../public/data/menuItems';
const Navbar = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [selectMenu,setSelectMenu] = useState('');
    const handelMenu = (e) =>{
       const menuType = e.target.getAttribute("data");
        setSelectMenu(menuType)
        console.log(menuType);
    }
    

    let showMenuElem;

    if(selectMenu === 'find_car'){
        showMenuElem = <CarMenu/>
    }else if (selectMenu === 'service'){
        showMenuElem = <SubMenu menuItems={ServiceMenuItems}/>
    }else if(selectMenu === 'story'){
        showMenuElem = <SubMenu menuItems={StoryMenuItems}/>
    }
    
    return (
        <>
        <header className='relative  border-b-lightDark shadow-lg '>
                <div className='container flex justify-between h-16 items-center'>
                <div>
                        <Image src="/images/ico-logo.png" width={160} height={80} alt="logo"/>
                </div>
                {/* for dextop menu  */}
                <nav className='lg:flex gap-6 hidden text-sm '>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(0)}}  data="find_car" className={`${activeIndex === 0 && "active"} `}>Find a Car</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(1)}}  data="sell your car" className={`${activeIndex === 1 && "active"}`}>Sell your Car</button>
                    <Link href="/">Vehicle Exchange</Link>
                    
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(3)}}  data="service" className={`${activeIndex === 3 && "active"}`}>Connect to Service</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(4)}}  data="story" className={`${activeIndex === 4 && "active"}`}>Hyundai Story</button>
                    
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
                    <section className='container absolute z-20 top-16 left-0 right-0 min-h-44  pt-10 bg-[white] p-16'>
                    <button className='absolute right-8 top-8' onClick={()=> {setSelectMenu('');setActiveIndex(0)}}><TfiClose className='w-6 h-6 text-[#a7a5a5]'/></button>
                        

                    {
                       selectMenu  && showMenuElem
                    }
                </section>
                }
        </header>


        </>
    );
};

export default Navbar;