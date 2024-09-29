"use client"

import NewsCard from "@/app/components/NewsCard";

import { useState } from "react";

const BanglaNewsComponents = ({data}) => {
    const [newsData,setNewsData] = useState(data);



    return (
        <div className="space-y-16 pb-16" >
            <div className="p-4 bg-[#F6F3F2] flex md:flex-row flex-col justify-center md:gap-8 gap-4">
                        <span className="bg-[white] px-6 py-3">Bangladesh News</span>
                        <input type="text" className="md:w-[500px] p-2"/>
                        <button className="bg-primary px-6 py-3 text-[white]">Search</button>
            </div>


            <section className="container grid md:grid-cols-3 gap-8">
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
                            <NewsCard/>
            </section>
        </div>
    );
};

export default BanglaNewsComponents;

