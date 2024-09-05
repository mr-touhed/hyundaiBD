"use client"

import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      // Show the button when the user scrolls down
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      // Add scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button
        className={`fixed bottom-0 right-0 bg-[#002C5F] text-[white] rounded-s-full px-4 py-2  mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        BACK TO TOP
        <IoIosArrowRoundUp className="inline-block h-4 w-4" />
</button>
    );
};

export default ScrollTop;