import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Creta" image="/images/cardetails/creta/banner.jpg">
                    <section className="mt-14">
                        {children}
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;