import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="TUCSON" image="/images/cardetails/tucson/banner.jpg" file="/e-brochure/Tucson.pdf">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="tucson"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;