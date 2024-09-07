import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Palisade" image="/images/cardetails/palisade/banner.jpg">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="palisade"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;