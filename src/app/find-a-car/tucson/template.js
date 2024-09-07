import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Tucson" image="/images/cardetails/tucson/banner.jpg">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="tucson"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;