"use Client"
import React, { useState } from 'react';
import { FaFacebookF,FaYoutube,FaXTwitter, FaLinkedin,FaInstagram   } from "react-icons/fa6";
import { IoShareSocialOutline } from 'react-icons/io5';
const ShareButton = () => {
    const [showSocial,setShowSocial] = useState(false)
    return (

<>


        <li  onClick={()=> setShowSocial(!showSocial)} className='relative cursor-pointer'>
                        <IoShareSocialOutline />

                        {showSocial && <ul className='flex gap-3 absolute -left-20 z-50 text-lightDark -bottom-6 w-full items-center'>
                <li><FaFacebookF /></li>
                <li><FaYoutube  /></li>
                <li><FaXTwitter   /></li>
                <li><FaLinkedin   /></li>
                <li><FaInstagram   /></li>
            </ul>}
        </li>
       
</>
    );
};

export default ShareButton;