import LocationMap from "@/app/components/LocationMap";
import PageBanner from "@/app/components/PageBanner";
import { IoIosClock } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiWebtrees } from "react-icons/si";

const ContactUspage = () => {
    return (
       <>
       
       
       <div className="bg-[#F6F3F2] p-4 space-y-8">
            <div className="container p-16 space-y-16">
                <section>
                <h1 className="text-3xl font-bold text-center">A Smarter Way to Connect</h1>
                <p className="text-center">Your complete satisfaction is of primary importance to us. If you need any  assistance or support, please get in touch with us  and we will be happy to help you</p>
                </section>

                <section className="grid md:grid-cols-2 gap-16">

                        <div className="md:p-8 bg-[white] rounded-md flex flex-col items-center text-center gap-4">
                            <h3 className="text-3xl font-bold">Enquiry</h3>
                            <p>For any queries related to Product, Price, Company, Dealership, Warranty, Service, Finance, Insurance and vehicle support. Please submit your queries on the links given below. Our representative will contact you shortly.</p>
                                <div className="flex gap-6">
                                    <button className="px-8 py-2 text-xs bg-primary text-[white]">Sales Enquiry</button>
                                    <button className="px-8 py-2 text-xs bg-primary text-[white]" >Service Enquiry</button>
                                </div>
                        </div>
                        <div className="md:p-8  bg-[white] rounded-md flex flex-col items-center text-center gap-4">
                            <h3 className="text-3xl font-bold">Feedback</h3>
                            <p>Express your grievances and feedback to executive team regarding our products and service. Your message will be promptly handled under the direct supervision of our executive management.
If for any reason, you are not able to register your enquiry/ feedback. Please write to us on following email ids : crsales@hmil.net, crservice@hmil.net</p>
<div className="flex gap-6">
                                    <button className="px-8 py-2 text-xs bg-primary text-[white]">Sales Feedback</button>
                                    <button className="px-8 py-2 text-xs bg-primary text-[white]" >Service Feedback</button>
                                </div>
                        </div>
                </section>
            </div>

            <div className="grid md:grid-cols-3 gap-4 grid-cols-1 md:place-items-center container border p-4 border-[#fffcfc] shadow-xl rounded-lg">
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
       </>
    );
};

export default ContactUspage;