import ButtomMenu from "@/app/components/ButtomMenu";
import Link from "next/link";


const CarDetailsPage = ({carName,children}) => {
    
    const menu = [
        
        {
            name:"Highlights",
            path:`highlights`
        },
        {
            name:"Exterior",
            path:`exterior`
        },
        {
            name:"Intorior",
            path:`intorior`
        },
        {
            name:"Performance",
            path:`performance`
        },
        {
            name:"Safety",
            path:`safety`
        },
        {
            name:"Convenience",
            path:`convenience`
        },
        {
            name:"Specification",
            path:`specification`
        },
        {
            name:"Features",
            path:`features`
        },

    ]

    return (
        <div>
            <section className="h-screen bg-[#EEEDF2]">
                    <ul className="flex container py-6 gap-2 font-light">
                        <li className="underline ">
                            <Link href="/">Home</Link>
                        </li>
                        <li>&gt;</li>
                        <li className="underline">{carName}</li>
                        <li>&gt;</li>
                        <li className="underline text-primary font-semibold">Page</li>
                    </ul>

                    <section className="container">
                    image
            </section>
            </section>

            
            <section className="sticky top-0 bg-[white] shadow-md">
            <ButtomMenu />
                <div className="h-16 container ">
                        <ul className="flex  items-center h-full gap-16">
                            <li className="font-semibold">{carName}</li>
                            {
                                menu.map(link => <li key={link.name} ><Link className="font-semibold" href={link?.path || "/"} >{link.name}</Link></li>)
                            }
                            <li className="font-semibold text-nowrap">e-brochure</li>
                        </ul>
                </div>
            </section>
            
            <section className="container">
                {children}
            </section>
            
        </div>
    );
};

export default CarDetailsPage;