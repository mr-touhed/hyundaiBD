"use client"
import Image from "next/image";
import Link from "next/link";

const ButtomMenu = ({className}) => {
    return (
        <section className={className}>
            <div className=" bg-primary p-4 md:text-lg text-sm md:font-semibold text-[white] w-full z-10 ">
                <ul className="flex md:gap-28 gap-4 justify-center">
                    <li>
                         <Link href={'/click-to-buy/find-a-dealer'} className="flex items-center md:flex-row flex-col text-center gap-2">
                        
                        <Image src={`/images/icons/ico-find-a-dealer-pc.png`} alt="icones" width={25} height={25} className="w-4 h-4 md:w-auto md:h-auto"/>
                        <span>Find a Dealer</span>
                        </Link>
                    </li>
                    <li>
                    <Link href={'/click-to-buy/test-drive'} className="flex items-center md:flex-row flex-col text-center gap-2 ">
                        
                        <Image src={`/images/icons/ico-request-a-test-drive-pc.png`} alt="icones" width={25} height={25} className="w-4 h-4 md:w-auto md:h-auto"/>
                        
                        <span>Request a Test Drive</span>
                        </Link>
                    </li>
                    <li>
                    <Link href={'/'} className="flex items-center md:flex-row flex-col text-center gap-2">
                        
                    <Image src={`/images/icons/ico-request-a-quote-pc.png`} alt="icones" width={25} height={25} className="w-4 h-4 md:w-auto md:h-auto"/>
                    
                        <span>Prices</span>
                        </Link>
                    </li>
                    <li>
                    <Link href={'/'} className="flex items-center md:flex-row flex-col text-center gap-2">
                        
                    <Image src={`/images/icons/newctb.png`} alt="icones" width={25} height={25} className="w-4 h-4 md:w-auto md:h-auto"/>
                        <span>Click To Buy</span>
                        </Link>
                    </li>
                </ul>
        </div>
        </section>
    );
};

export default ButtomMenu;