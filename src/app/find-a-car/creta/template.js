import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";



const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="CRETA" image="/images/cardetails/creta/banner.jpg" file="/e-brochure/CRETA.pdf">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="creta"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;