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
import { ServiceMenuItems, StoryMenuItems } from '../../../public/data/data';
const Navbar = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [selectMenu,setSelectMenu] = useState('');
    const handelMenu = (e) =>{
       const menuType = e.target.getAttribute("data");
        setSelectMenu(menuType)
        console.log(menuType);
    }
    
    const handel_close = () =>{
        setSelectMenu('');setActiveIndex(0)
    }
    let showMenuElem;

    if(selectMenu === 'find_car'){
        showMenuElem = <CarMenu handel_close={handel_close}/>
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
                        <Link href="/"><Image src="/images/ico-logo.png" width={1000} height={500} alt="logo" className='max-w-40 h-auto'/></Link>
                </div>
                {/* for dextop menu  */}
                <nav className='lg:flex gap-6 hidden text-xs uppercase'>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(0)}}  data="find_car" className={`${activeIndex === 0 && "active"} uppercase`}>Find a Car</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(1)}}  data="sell your car" className={`${activeIndex === 1 && "active"} uppercase`}>Sell your Car</button>
                    <Link href="/">Vehicle Exchange</Link>
                    
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(3)}}  data="service" className={`${activeIndex === 3 && "active"} uppercase`}>Connect to Service</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(4)}}  data="story" className={`${activeIndex === 4 && "active"} uppercase`}>Hyundai Story</button>
                    
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
                    <button className='absolute right-8 top-8' onClick={handel_close}><TfiClose className='w-6 h-6 text-[#a7a5a5]'/></button>
                        

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