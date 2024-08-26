import { IoIosClock } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiWebtrees } from "react-icons/si";
import Accordion from "./_component/Accordion";
import LocationMap from "../components/LocationMap";
const ContactUspage = () => {
    return (
        <div className="bg-[#F6F3F2] p-4 space-y-8">
            <div className="container p-16">
            <h1 className="text-3xl font-bold text-center">A Smarter Way to Connect</h1>
            <p className="text-center">Your complete satisfaction is of primary importance to us. should you ever have questions or comments about your Hyundai vehicle, we suggets you follow these steps so your concerns can be addressed as quickly and efficiently as possible.</p>

                
            </div>

            <div className="grid md:grid-cols-3 gap-4 grid-cols-1 place-items-center container border p-4 border-[#fffcfc] shadow-xl rounded-lg">
                <div className="flex gap-2 items-center ">
                <IoIosClock className="w-8 h-8"/>
                    <div>
                    <h2>Opening Hours</h2>
                    <p>9:30 AM – 8:00 PM</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                <RiCustomerService2Fill className="w-8 h-8"/>
                    <div>
                    <h2>	
                    Support Center Email</h2>
                    <p>service@fairtechnology.com.bd</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                <SiWebtrees className="w-8 h-8"/>
                    <div>
                    <h2>Website</h2>
                    <p>https://hyundai-bd.com/</p>
                    </div>
                </div>
            </div>

            <div className="container">
                    
                <LocationMap/>
            </div>
        </div>
    );
};

export default ContactUspage;