"use client"
import { useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx";

const SubMenu = ({menuItems}) => {
    
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeMultiSubMenu, setActiveMultiSubMenu] = useState(null);
  
   
  
  useEffect(()=>{
    setActiveSubMenu(null)
    setActiveMultiSubMenu(null)
  },[menuItems])
  
    return (
      <div className="flex gap-6 px-6 text-[#7a7a7a] text-sm">
                <ul className="space-y-5">
                    {
                        menuItems.map(item => 
                        <li onClick={() => {setActiveMultiSubMenu(null) ;setActiveMenu(item.menu); item.sub ? setActiveSubMenu(item.sub): setActiveSubMenu(null)}}  key={item.menu} className={`${activeMenu === item.menu && "text-skylight"} cursor-pointer hover:text-skylight md:w-60 flex justify-between items-center text-sm font-light`}><span>{item.menu}</span> {item.sub && <span><RxCaretRight /></span>}</li>)
                    }
                </ul>
                <ul className="space-y-5">
                    {
                        activeSubMenu && activeSubMenu.map(item => 
                            <li onClick={() => {setActiveMenu(item.menu); item.sub ? setActiveMultiSubMenu(item.sub): setActiveMultiSubMenu(null)}}  key={item.menu} className={`${activeMenu === item.menu && "text-skylight"} cursor-pointer hover:text-skylight md:w-60 flex justify-between items-center text-sm font-light`}><span>{item.menu}</span> {item.sub && <span><RxCaretRight /></span>}</li>)
                    }
                </ul>
                <ul className="space-y-5">
                    {
                        activeMultiSubMenu && activeMultiSubMenu.map(item => 
                            <li  key={item.menu} onClick={()=>setActiveMenu(item.menu)} className={`${activeMenu === item.menu && "text-skylight"} cursor-pointer hover:text-skylight md:w-60 flex justify-between text-sm `}>{item.menu}</li>)
                    }
                </ul>
      </div>
    );
  };

export default SubMenu;