"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CarMenu from './menu/CarMenu';
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";
import SubMenu from './menu/SubMenu';
import { ContactUsMenuItems, ServiceMenuItems, StoryMenuItems } from '../../../public/data/data';
import MobileMenu from './menu/MobileMenu';
const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false)
    const [activeIndex,setActiveIndex] = useState(0);
    const [selectMenu,setSelectMenu] = useState('');
    const handelMenu = (e) =>{
       const menuType = e.target.getAttribute("data");
        setSelectMenu(menuType)
        console.log(menuType);
    }
    
    const handel_close = () =>{
        setTimeout(()=>{
            setSelectMenu('');setActiveIndex(0)
        },400)
    }
    const handel_close_mobile_menu = () =>{
        setTimeout(()=>{
            setShowMobileMenu(false)
        },400)
    }
   
    let showMenuElem;

    if(selectMenu === 'find_car'){
        showMenuElem = <CarMenu handel_close={handel_close}/>
    }else if (selectMenu === 'service'){
        showMenuElem = <SubMenu menuItems={ServiceMenuItems} handel_close={handel_close}/>
    }else if(selectMenu === 'story'){
        showMenuElem = <SubMenu menuItems={StoryMenuItems} handel_close={handel_close}/>
    }
    else if(selectMenu === 'contact'){
        showMenuElem = <SubMenu menuItems={ContactUsMenuItems} handel_close={handel_close}/>
    }
 
    return (
        <>
        <header className='relative  border-b-lightDark shadow-lg overflow-x-hidden'>
                <div className='container flex justify-between h-16 items-center'>
                <div>
                        <Link href="/"><Image src="/images/ico-logo.png" width={1000} height={500} alt="logo" className='max-w-40 h-auto'/></Link>
                </div>
                {/* for dextop menu  */}
                <nav className='lg:flex gap-6 hidden text-xs uppercase'>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(0)}}  data="find_car" className={`${activeIndex === 0 && "active"} uppercase`}>Find a Car</button>
                    {/* <button onClick={(e)=> {handelMenu(e), setActiveIndex(1)}}  data="sell your car" className={`${activeIndex === 1 && "active"} uppercase`}>Sell your Car</button> */}
                    {/* <Link href="/">Vehicle Exchange</Link> */}
                    
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(3)}}  data="service" className={`${activeIndex === 3 && "active"} uppercase`}>Connect to Service</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(4)}}  data="story" className={`${activeIndex === 4 && "active"} uppercase`}>Hyundai Story</button>
                    <button onClick={(e)=> {handelMenu(e), setActiveIndex(5)}}  data="contact" className={`${activeIndex === 5 && "active"} uppercase`}>Contact Us</button>
                    
                    
                   
                </nav>
                <div>
                    <ul className='flex gap-6 items-center'>
                        {/* <li>
                        <FaRegUser />
                        </li> */}
                        {/* <li>
                        <IoLocationOutline />
                        </li> */}
                        <li>
                        <IoShareSocialOutline />
                        </li>
                        <li className='md:hidden block'>
                            <button onTouchStart={()=>setShowMobileMenu(true)} ><GiHamburgerMenu /></button>
                        </li>
                    </ul>
                    <div className={`fixed h-screen overflow-scroll top-0 ${showMobileMenu ? 'left-0' : "left-[10000000000px]"} transition-all ease-in duration-100  w-full z-50 bg-[#ffffffc8] backdrop-blur-md min-h-screen`}>
                        <button onTouchStart={()=>setShowMobileMenu(false)} className='w-16 block mt-6 ml-auto'><SlClose className='w-6 h-6'/></button>
                    <MobileMenu contactUsMenuItems={ContactUsMenuItems} serviceMenuItems={ServiceMenuItems} storyMenuItems={StoryMenuItems} handel_close={handel_close_mobile_menu}/>
                    </div>
                </div>
                
                </div>


               
        </header>
        
                    {
                    selectMenu && 
                    <section className='container absolute z-50 top-16 left-0 right-0 min-h-44  pt-10 bg-[white] p-16'>
                    <button className='absolute right-8 top-8' onClick={handel_close}><TfiClose className='w-6 h-6 text-[#a7a5a5]'/></button>
                        

                    {
                       selectMenu  && showMenuElem
                    }
                </section>
                }

        </>
    );
};

export default Navbar;