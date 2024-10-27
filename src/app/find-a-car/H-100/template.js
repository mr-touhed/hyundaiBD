import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="H-100" image="/images/cardetails/pick-up/banner.jpg" file="/e-brochure/H_100.pdf">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="h-100"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;