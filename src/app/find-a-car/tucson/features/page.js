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
        </section>
    );
};

export default FeaturesPage;