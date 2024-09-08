"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx";

const SubMenu = ({menuItems,handel_close}) => {
    
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  
   
  
  useEffect(()=>{
    setActiveSubMenu(null)
   
  },[menuItems])
  
    return (
      <div className="flex gap-6 px-6 text-[#7a7a7a] text-sm">
                <ul className="space-y-5">
                    {
                        menuItems.map(item => 
                          item.link ? <li key={item.menu}><Link onClick={handel_close} href={item.link}>{item.menu}</Link></li> : 
                          <li onClick={() => {setActiveMenu(item.menu); item.sub ? setActiveSubMenu(item.sub): setActiveSubMenu(null)}}  key={item.menu} className={`${activeMenu === item.menu && "text-skylight"} cursor-pointer hover:text-skylight md:w-60 flex justify-between items-center text-sm font-light`}><span>{item.menu}</span> {item.sub && <span><RxCaretRight /></span>}</li>
                        )
                    }
                </ul>
                <ul className="space-y-5">
                    {
                        activeSubMenu && activeSubMenu.map(item => 
                          item.link ? <li key={item.menu}><Link onClick={handel_close} href={item.link}>{item.menu}</Link></li> : 
                          <li onClick={() => {setActiveMenu(item.menu); item.sub ? setActiveSubMenu(item.sub): setActiveSubMenu(null)}}  key={item.menu} className={`${activeMenu === item.menu && "text-skylight"} cursor-pointer hover:text-skylight md:w-60 flex justify-between items-center text-sm font-light`}><span>{item.menu}</span> {item.sub && <span><RxCaretRight /></span>}</li>
                        )
                    }
                </ul>
               
      </div>
    );
  };

export default SubMenu;