import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Creta Grand" image="/images/cardetails/creta-grand/banner.jpg">
                    <section className="mt-14">
                        {children}
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;