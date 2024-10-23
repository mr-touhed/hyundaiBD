import PageBanner from "@/app/components/PageBanner";
import ServiceBookingForm from "@/app/components/ServiceBookingForm";


const BookSerVicepage = () => {
    return (
        <div>
                <PageBanner  img="/images/connect-to-service/servicebooking_pc.jpg"/>
                <section className="container">
                        <div className="md:p-16 p-4 mb-6">
                        <h2 className="text-3xl font-semibold  text-center">Book a Service</h2>
                        <p className="md:text-center text-justify font-sm">You can book your car service appointment by filling up the form given below.</p>
                        </div>
                        <ServiceBookingForm/>
                </section>
        </div>
    );
};

export default BookSerVicepage;