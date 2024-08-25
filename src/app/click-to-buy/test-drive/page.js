
import TestDrivePageForm from "@/app/components/TestDrivePageForm";
import Image from "next/image";
import Link from "next/link";


const TestDrivepage = () => {
    return (
        <div>
            <section className="bg-[#EEEDF2]">
                    <ul className="flex container py-6 gap-2 font-light">
                        <li className="underline ">
                            <Link href="/">Home</Link>
                        </li>
                        <li>&gt;</li>
                        <li className="underline">click-to-buy</li>
                        <li>&gt;</li>
                        <li className="underline text-primary font-semibold">Test Drive</li>
                    </ul>

                    <section >
                            <Image src={`/images/test-drive-banner.jpg`} alt={` image banner`} width={1200} height={700} className="w-full md:h-[72vh] h-[30vh] object-cover"/>
                    </section>

                    <h2 className='font-semibold text-center text-3xl py-8'>Request a Test drive</h2>
            </section>
            <section>
                    <TestDrivePageForm/>
            </section>
            <section className="">
            <h2 className='font-semibold text-center text-3xl py-8'>Explore more</h2>
            <div className="bg-[#F6F3F2] py-16">
            <ul className="flex md:flex-row flex-col md:items-baseline items-center space-y-8  justify-between container " >
                        <li >
                                <Link href="/"><Image src={`/images/Find-a-Dealer.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
                                <h4 className="text-xl font-semibold">Find a Dealer & Website</h4></Link>
                        </li>
                        <li >
                        <Link href="/"><Image src={`/images/Clicktobuy.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
                        <h4 className="text-xl font-semibold">Click To Buy</h4></Link>
                        </li>
                        <li >
                        <Link href="/">
                        <Image src={`/images/specialofferpc.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
                            <h4 className="text-xl font-semibold">Spacial Offer</h4>
                        </Link>
                        </li>
                        <li >
                            <Link href="/">
                            <Image src={`/images/emiassurancepc.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
                            <h4 className="text-xl font-semibold">Prices</h4>
                            </Link>
                        </li>
                    </ul>
            </div>
                    
            </section>
        </div>
    );
};

export default TestDrivepage;