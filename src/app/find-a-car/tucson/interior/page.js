import PanoramaView from "@/app/components/PanoramaView";
import InteriorSlider from "./_components/InteriorSlider";



const IntoriorPage = () => {
    return (
        <section className="my-16">
                <div className="container space-y-10 mb-16">
                                <h1 className="text-3xl font-semibold">Hyundai TUCSON Interior: Exquisite in Every Way</h1>
                                <p>Step into the all-new Hyundai TUCSON and experience sheer luxury. The driver side houses a 26.03 cm (10.25”) floating type digital cluster which builds on the SUVs advanced and modern design characteristics. Hit the right spot in your driving position with 10-way power adjustable ventilated & heated driver seat with memory function. The epitome of comfort, the embodiment of elegance.</p>


                                <PanoramaView/>
                </div>
                <div className="bg-[#F6F3F2] md:p-16">

                            <div className="container">
                                        <InteriorSlider/>
                            </div>
                </div>
        </section>
    );
};

export default IntoriorPage;