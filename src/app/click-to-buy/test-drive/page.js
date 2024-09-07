
import PageBanner from "@/app/components/PageBanner";
import TestDrivePageForm from "@/app/components/TestDrivePageForm";
import { getDistrictList } from "@/app/utils/locations";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


const TestDrivepage = async  ({searchParams}) => {
    const {c} = searchParams
    const districtList = await getDistrictList()
    return (
        <div>
            <PageBanner path={['click-to-buy','Test Drive']} img={`/images/test-drive-banner.jpg`}/>
            <section>
                    <Suspense fallback={"Loading....."}>
                    <TestDrivePageForm districtList={districtList} car={c}/>
                    </Suspense>
            </section>
            <section className="">
            <h2 className='font-semibold text-center text-3xl py-8'>Explore more</h2>
            <div className="bg-[#F6F3F2] py-16">
            <ul className="flex md:flex-row flex-col md:items-baseline items-center space-y-8  justify-between container " >
                        <li >
                                <Link href="/click-to-buy/find-a-dealer"><Image src={`/images/Find-a-Dealer.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
                                <h4 className="text-xl font-semibold">Find a Dealer & Website</h4></Link>
                        </li>
                        <li >
                        <Link href="/bookACar"><Image src={`/images/Clicktobuy.jpg`} alt={` image banner`} width={1200} height={700} className="max-w-[256px] max-h-[170px] object-cover"/>
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