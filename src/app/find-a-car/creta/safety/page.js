import Image from "next/image";


const SafetyPage = () => {
    return (
        <div className="container space-y-16 pb-16">
            
                    <section className="space-y-6">
                            <h1 className="text-3xl font-semibold "><span className="font-bold">Hyundai</span> SmartSense</h1>
                            <Image src="/images/cardetails/creta/safety/1-kolom-hyundai-smart-sense.png" alt="hyundai bd Safety image" width={1200} height={600} />
                    </section>
                    <section className="max-w-[750px] mx-auto text-center space-y-10">
                            <h2 className="text-3xl font-semibold ">Forward Collision-avoidance Assist (FCA)*</h2>
                            <p>This feature warns the driver when the system detects a risk of collision from the front, such as with a pedestrian or with a vehicle that suddenly slows down or stops. If the risk of the crash continues to increase after a warning, the system will automatically assist by applying emergency braking.</p>
                    </section>
                    <section className="grid md:grid-cols-2 gap-8 ">
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/2-kolom-lane-following-assist.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Lane Following Assist (LFA)*</h3>
                                <p>Lane Following Assist (LFA)*</p>
                            </div>
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/2-kolom-lane-keeping-assist.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Lane Keeping Assist (LKA)*</h3>
                                <p>The front view camera detects lane markings (by the roadside) to monitor the vehicle's position in the starting lane. The system will warn the driver if the car leaves the road without using the turn signal and will automatically help steer the steering wheel to prevent the vehicle from diverting from the proper lane.</p>
                            </div>
                    </section>
                    <section className="grid md:grid-cols-2 gap-8 ">
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/2-kolom-hill-start.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Hill-start Assist Control (HAC)</h3>
                                <p>When starting from a stop on an incline, the HAC prevents the accidental rollback after the brake pedal is released.</p>
                            </div>
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/2-kolom-blind-spot.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Blind-spot Collision-avoidance Assist (BCA - From parallel parking)*</h3>
                                <p>BCA monitors your blind spots while driving. If another vehicle is detected in the vicinity of your car, the LED on the rearview mirror will light up giving a warning. If there is a risk of collision with the vehicle on the side at low speed (0 - 3km/h), such as when exiting the parallel parking position, the system will function automatically to assist emergency braking.</p>
                            </div>
                    </section>

                    <section className="grid md:grid-cols-3 gap-8 ">
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/3-kolom-rear-cross-traffic.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Rear Cross-traffic Collision-avoidance Assist (RCCA)**</h3>
                                <p>The RCCA warns if a vehicle in the rear lane is approaching while reversing and applies emergency braking if necessary.</p>
                            </div>
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/3-kolom-rear-view-monitor.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">Rear View Monitor (RVM)***</h3>
                                <p>It is safer when reversing or parking. The rear camera will monitor the back area of the car.</p>
                            </div>
                            <div className="space-y-3">
                            <Image src="/images/cardetails/creta/safety/3-kolom-6-airbag.png" alt="hyundai bd Safety image" width={1200} height={600} />
                                <h3 className="text-2xl font-semibold">6-airbag system (Driver, Passenger, Side & Curtain)**</h3>
                                
                            </div>
                    </section>
                    <p>Features serve as support systems. Drivers must stay focused and be careful while driving.</p>
                    <div>
                        <p>*Only available on Prime trim.</p>
                        <p>**Only available on Style and Prime trims.</p>
                        <p>*** Only available on Trend, Style, and Active trims.</p>
                    </div>
        </div>
    );
};

export default SafetyPage;