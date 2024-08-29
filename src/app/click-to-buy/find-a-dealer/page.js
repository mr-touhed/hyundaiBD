import LocationMap from '@/app/components/LocationMap';
import Image from 'next/image';
import Link from 'next/link';

const FindDealerpage = () => {
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
                        <li className="underline text-primary font-semibold">Find A Dealer</li>
                    </ul>

                    <section >
                            <Image src={`/images/test-drive-banner.jpg`} alt={` image banner`} width={1200} height={700} className="w-full md:h-[72vh] h-[30vh] object-cover"/>
                    </section>

                    <h2 className='font-semibold text-center text-3xl py-8'>Find Dealer</h2>


                    <LocationMap/>
            </section>


        </div>
    );
};

export default FindDealerpage;