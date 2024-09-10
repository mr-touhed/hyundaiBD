import PageBanner from "@/app/components/PageBanner";


const UnderbodycoatingPage = () => {
    return (
        <div >
            <PageBanner img="/images/pages/beautification-banner.jpg"/>
                <div className="bg-[#F6F3F2] py-8">
                <section className="container space-y-8 ">
                    <h1 className="text-3xl font-semibold text-center">Underbody Coating</h1>
                    <p>In Bangladesh road conditions, a cars underbody is most prone to corrosion. Underbody coating provides long term protection from corrosion to car’s underbody. It also protects parts like internal body panels, frame rails and other inner cavities that are not physically accessible but are prone to corrosion.</p>
                    <div className="space-y-8">
                        <h5 className="font-bold">Benefits</h5>
                        <ul className="list-inside list-disc space-y-8">
                            <li><b> Minimizes Sound:</b>It minimizes the sound from underneath the car resulting a noiseless, smooth driving experience.</li>
                            <li><b>Heat Insulation: </b>It insulates the interior of the car from extreme temperatures from beneath the vehicle providing a comfortable cabin experience.</li>
                            <li><b>Anti-chipping property:</b> If any stone hits the coating it does not get chipped away hence protects the underbody from exposure to water.</li>
                        </ul>
                    </div>
            </section>
                </div>

                <div className="py-8">
                        <section className="container md:overflow-hidden overflow-x-scroll">
                                    <table className="w-full text-center" cellPadding={15}>
                                        <tr className="bg-[#E4DCD3] ">
                                            <th className="font-bold">VENDOR</th>
                                            <th className="font-bold">VEHICLE</th>
                                            <th className="font-bold">Price (TK)*</th>
                                        </tr>
                                        <tbody>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">Horizon, Wuerth</td>
                                                <td className="border border-[#E4DCD3]">EON, Santro, All New Santro, i10,Grand i10, Grand i10 NiOS, Aura ,Getz, i20, Elite i20, , Xcent, i20 Active,Exter</td>
                                                <td className="border border-[#E4DCD3]">1899</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">Horizon, Wuerth</td>
                                                <td className="border border-[#E4DCD3]">Accent , Venue ,Verna, Creta, Elantra, Sonata, Kona Electric, Tucson, Terracan, Santa Fe</td>
                                                <td className="border border-[#E4DCD3]">1999</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">Elvi Bardahl</td>
                                                <td className="border border-[#E4DCD3]">EON, Santro, All New Santro, i10,Grand i10, Grand i10 NiOS, Aura ,Getz, i20, Elite i20, , Xcent, i20 Active, Exter</td>
                                                <td className="border border-[#E4DCD3]">1499</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">Elvi Bardahl</td>
                                                <td className="border border-[#E4DCD3]">Accent , Venue ,Verna, Creta, Elantra, Sonata, Kona Electric, Tucson, Terracan, Santa Fe</td>
                                                <td className="border border-[#E4DCD3]">1799</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">3M</td>
                                                <td className="border border-[#E4DCD3]">EON, Santro, All New Santro, i10,Grand i10, Grand i10 NiOS, Aura ,Getz, i20, Elite i20, , Xcent, i20 Active, Exter</td>
                                                <td className="border border-[#E4DCD3]">1699</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#E4DCD3]">3M</td>
                                                <td className="border border-[#E4DCD3]">Accent , Venue ,Verna, Creta, Elantra, Sonata, Kona Electric, Tucson, Terracan, Santa Fe</td>
                                                <td className="border border-[#E4DCD3]">2099</td>
                                            </tr>
                                        </tbody>
                                    </table>
                        </section>
                </div>

                <div className="py-8 bg-[#F6F3F2]">
                    <section className="container text-lg">
                                <p><b>Disclaimer :</b> These are indicative prices. For details kindly contact your dealer.</p>
                                <p>*GST will be extra</p>
                    </section>
                </div>
        </div>
    );
};

export default UnderbodycoatingPage;