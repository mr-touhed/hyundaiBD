import PageBanner from "@/app/components/PageBanner";
import ServiceBookingForm from "@/app/components/ServiceBookingForm";


const BookSerVicepage = () => {
    return (
        <div>
                <PageBanner  img="/images/connect-to-service/servicebooking_pc.jpg"/>
                <section className="container">
                        <div className="p-16">
                        <h2 className="text-3xl font-semibold text-center">Book a Service</h2>
                        <p className="text-center font-sm">You can book your car service appointment by filling up the form given below.</p>
                        </div>
                        <ServiceBookingForm/>
                </section>
        </div>
    );
};

export default BookSerVicepage;