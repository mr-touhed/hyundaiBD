import CollapsTable from "./_components/CollapsTable";



const FeaturesPage = () => {
    return (
        <section className="container">
            
                        <div className=" overflow-x-auto">
                        <table className="w-full border border-[#F6F3F2] text-left text-sm" cellPadding={10} cellSpacing={2} >
                                <thead className="border border-[#F6F3F2] bg-primary  text-[white]">
                                        <tr className="border border-[#F6F3F2]">
                                        <th colSpan={2}>ENGINE AND TRIM PLAN</th>
                                        <th>Platinum</th>
                                        <th>Signature</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr className="border border-[#F6F3F2]" >
                                            <td rowSpan={2}>R 2.0 Diesel</td>
                                            <td rowSpan={2}>8 speed automatic transmission</td>
                                            <td>●</td>
                                            <td>●</td>
                                        </tr>
                                        <tr className="border border-[#F6F3F2]">
                                           
                                            <td>-</td>
                                            <td>400</td>
                                        </tr>
                                        <tr className="border border-[#F6F3F2]">
                                            <td >Nu 2.0 Petrol</td>
                                            <td >6 speed automatic transmission</td>
                                            <td>●</td>
                                            <td>●</td>
                                        </tr>
                                </tbody>
                        </table>
                        </div>


                        <div>

                            <CollapsTable/>
                        </div>


                        <div className="space-y-10 py-16 text-base font-semibold">
                                <div>
                                <h3 className="font-bold">S# : 4WD only</h3>
                                <p>**Leatherette</p>
                                </div>

                                <div>
                                    <ul className="list-disc list-inside">
                                        <li>Hyundai Motor India recommends you to avoid using back covers for mobiles while charging your phone on the wireless charger.</li>
                                        <li>Alexa Amazon Echo device is not a standard car/ accessory & customer needs to purchase from third party. Actual Echo device may differ from the</li>
                                    </ul>
                                    <p>one shown. Hyundai Bluelink Amazon skill only works in India and can be interacted in English & Hindi. Alexa Skill functions only in select Hyundai car(s) and depends on your device compatibility, software and availability of network and device internet.</p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-semibold">Disclaimer</h2>
                                    <ul className="list-disc list-inside">
                                        <li>*Smart mode is applicable only for Diesel trims.</li>
                                        <li>Some of the equipments illustrated or described in the leaflet may not be supplied as standard equipment and may be available at extra cost.</li>
                                        <li>Functionality of Bluelink depends on adequate power supply and uninterrupted network connectivity to infotainment system. The Bluelink system is designed in such a way that it makes vehicle theft difficult if its circuit and battery connection is uninterrupted</li>
                                        <li>Hyundai Motor India reserves the right to change specifications and equipment without prior notice.</li>
                                        <li>The colour plates shown may vary slightly from the actual colours due to the limitations of the web image process.</li>
                                        <li>Please consult your dealer for full information and availability on colours and trim.</li>
                                    </ul>
                                </div>
                        </div>
        </section>
    );
};

export default FeaturesPage;