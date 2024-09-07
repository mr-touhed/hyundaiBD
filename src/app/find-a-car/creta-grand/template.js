import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Creta Grand" image="/images/cardetails/creta-grand/banner.jpg">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="creta grand"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;