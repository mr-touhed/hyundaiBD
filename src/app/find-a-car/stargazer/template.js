import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";
import TestDriveButton from "@/app/components/TestDriveButton";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="STARGAZER" image="/images/cardetails/stargazer/banner.jpg">
                    <section className="mt-14">
                        {children}

                        <TestDriveButton car="stargazer"/>
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;