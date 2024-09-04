import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="STARGAZER" image="/images/cardetails/stargazer/banner.jpg">
                    <section className="mt-14">
                        {children}
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;