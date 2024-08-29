"use client"

import Accordion from "@/app/contact-us/_component/Accordion";
import OnlineBooking from "../OnlineBooking";


const DealerAndBooking = () => {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 gap-6 container">
            <div className="py-2 border-b space-y-2 border-[#dddbda]">
                <h2 className="text-xl uppercase">Dealer List </h2>
                <Accordion/>
            </div>
                    
                    <OnlineBooking/>
        </section>
    );
};

export default DealerAndBooking;