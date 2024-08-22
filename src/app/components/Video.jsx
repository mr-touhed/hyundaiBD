"use client"

import Image from "next/image";
import { useState } from "react";

const Video = ({thumbnail,videoId}) => {

    

    const [showIframe, setShowIframe] = useState(false);

    const handleClick = () => {
        setShowIframe(true);
    };

    return (
        <div id='youtube' className="block w-full text-center overflow-hidden relative max-h-[420px]">
            <div className="absolute left-0 bottom-0 top-0 right-0 z-20 bg-[rgba(0,0,0,.6)]"></div>
            <div className="relative w-[100%] h-[100%] z-10 overflow-hidden">
                <picture>
                    <video style={{ display: "none" }}>
                        <source media="(min-width: 768px) and (max-width:1024px)" srcSet= {thumbnail} alt="nios" />
                        <source media="(max-width: 767px)" srcSet= {thumbnail} alt="nios" />
                    </video>
                    <Image src={thumbnail} alt="nios" width={1000} height={420} className="w-full h-auto"/>
                </picture>
            </div>
            <button
                type="button"
                className="z-40 w-16 h-16 absolute md:top-[45%] md:left-[45%] top-[35%] left-[40%] bg-[url('/images/play.png')] bg-no-repeat overflow-hidden -indent-52"
                aria-label="play"
                tabIndex="-1"
                onClick={handleClick} // Set the click handler
            >
                
            </button>
            <div className={`absolute top-0 left-0 right-0 bottom-0 ${showIframe ? 'z-50' : "z-0"}`}>
                {showIframe && (
                    <div id="iferm" className="absolute top-0 left-0 right-0 bottom-0 z-0">
                        {/* Load the YouTube iframe when `showIframe` is true */}
                        <iframe className="w-full h-[420px]" width="853" height="480" src={`https://www.youtube.com/embed/${videoId}`} title="The all new PALISADE full size family SUV | Now in Bangladesh | Fair Technology | Fair Group" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Video;
