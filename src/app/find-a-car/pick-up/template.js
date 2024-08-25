import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="H-100" image="/images/cardetails/pick-up/banner.jpg">
                    <section className="mt-14">
                        {children}
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;