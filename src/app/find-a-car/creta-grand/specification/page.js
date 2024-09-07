


const Specification = () => {
    return (
        <div className="container space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-2xl text-center font-bold">Performance</h2>

                    <table className="w-full" cellPadding="10px" >
                        <thead>
                        <th className="bg-primary p-3 text-[white] font-semibold" colSpan={2}>Engine</th>
                        </thead>
                        <tbody>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Engine Type</td>
                                <td>4 Cylinders, 16 Valves, HLA</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Displacement (cc)</td>
                                <td>1,999</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Max Speed (kph)</td>
                                <td>159 / 6,500</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Max Power (ps/rpm)</td>
                                <td>19.5 / 4,500</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </section>
                    <section className="space-y-6">
                        <h2 className="text-2xl text-center font-bold">Dimension</h2>

                    <table className="w-full" cellPadding="10px" >
                        <thead>
                        <th className="bg-primary p-3 text-[white] font-semibold" colSpan={2}>Exterior</th>
                        </thead>
                        <tbody>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Overall Length (mm)</td>
                                <td>4,500</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Overall Width (mm)</td>
                                <td>	1,790</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Overall Height (mm)</td>
                                <td>1,670 (1,675)</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">WheelBase (mm)</td>
                                <td>2,760</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Front Wheel Thread (mm)</td>
                                <td>1,595.5</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Rear Wheel Thread (mm)</td>
                                <td>	1,564.3</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </section>
                    <section className="space-y-6">
                        <h2 className="text-2xl text-center font-bold">Wheels</h2>

                    <table className="w-full" cellPadding="10px" >
                        <thead>
                        <th className="bg-primary p-3 text-[white] font-semibold" colSpan={2}>Exterior</th>
                        </thead>
                        <tbody>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Front Tires</td>
                                <td>215/60R17, 215/55R18</td>
                            </tr>
                            <tr className="border border-[#E4DCD3] ">
                                <td className="w-[500px] bg-[#F6F3F2]">Rear Tires</td>
                                <td>215/60R17, 215/55R18</td>
                            </tr>
                           
                        </tbody>
                    </table>
                    </section>
        </div>
    );
};

export default Specification;