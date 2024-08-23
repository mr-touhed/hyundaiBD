import CarDetailsTemplete from "@/app/components/CarDetailsTemplete";


const template = ({children}) => {
    return (
        <main className="relative">
            <CarDetailsTemplete carName="Palisade" image="/images/cardetails/tucson/banner.jpg">
                    <section className="mt-14">
                        {children}
                    </section>
            </CarDetailsTemplete>
            
        </main>
    );
};

export default template;