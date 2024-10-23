"use client"

import AccordionList from "../AccordionList";
import OnlineBooking from "../OnlineBooking";




const DealerAndBooking = () => {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 gap-6 container">
            <div className="py-2 border-b space-y-2 border-[#dddbda]">
                <h2 className="text-xl uppercase">Outlet list </h2>
                <AccordionList/>
            </div>
                    
                    <OnlineBooking/>
        </section>
    );
};

export default DealerAndBooking;