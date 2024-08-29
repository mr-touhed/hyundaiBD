import OnlineBooking from "../components/OnlineBooking";
import BannerSlider from "./_components/BannerSlider";

const BookCarpage = () => {
    return (
        <div className="">
            <BannerSlider />
         <section className="bg-[#F8F8F8] md:p-8" >
                    <div className="container bg-[white]">
                            <OnlineBooking/>
                    </div>
        </section>   
        </div>
    );
};

export default BookCarpage;