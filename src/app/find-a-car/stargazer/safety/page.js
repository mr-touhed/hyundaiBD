import Image from "next/image";


const SafetyPage = () => {
    return (
        <div className="container pb-16">
                <section className="space-y-8">
                        <h2 className="text-3xl font-semibold text-center">Hyundai SmartSense</h2>


                        <section className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_FCA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Forward Collision-avoidance Assist (FCA)*</h3>
                                    <p>This feature alerts the driver if the system detects a risk of collision from the front, such as with pedestrians or a vehicle that suddenly slows down or stops. If the collision risk continues to rise after receiving a warning, the system will automatically apply emergency braking.</p>
                                </div>
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_LFA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Lane Following Assist (LFA)*</h3>
                                    <p>The front camera detects lane markers and assists in keeping vehicles safe in the middle of the lane.</p>
                                </div>
                        </section>
                        <section className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_HBA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">High Beam Assist (HBA)*</h3>
                                    <p>When it detects a vehicle coming from the opposite direction during the night, the HBA switches the high beams to low beams. When the vehicle has passed the car, the condition of your lights will automatically switch to high beam.</p>
                                </div>
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_LKA_2kolom_.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Lane Keeping Assist (LKA)*</h3>
                                    <p>The front view camera detects a lane (on the roadside) to monitor the vehicle's starting lane position. The system will alert the driver if the vehicle deviates from its route without using the turn signal and automatically steer the steering wheel to keep the vehicle in its lane.</p>
                                </div>
                        </section>
                        <section className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_BCA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Blind-spot Collision-avoidance Assist (BCA - From parallel parking)*</h3>
                                    <p>BCA monitors your blind spots while driving. Suppose another vehicle is detected in the vicinity of your vehicle. In that case, the LED on the rearview mirror will illuminate, alerting you. Suppose there is a risk of colliding with a vehicle on the side at a low speed (0 - 3km/h), such as when exiting a parallel parking position. In that case, the system will function automatically to assist with emergency braking.</p>
                                </div>
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_RCCA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Rear Cross-traffic Collision-avoidance Assist (RCCA)*</h3>
                                    <p>If a vehicle in the rear lane approaches while reversing, the RCCA warns the driver and applies emergency braking if necessary.</p>
                                </div>
                        </section>
                        <section className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/KS_RHD_REARVIEW_CAMERA_2kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">Rear View Monitor (RVM)*</h3>
                                    <p>The rear camera monitors the vehicle&#39;s area making reversing and parking safer.</p>
                                    
                                    <div className="mt-16">
                                        <p>*Features function as a support system only. Drivers must stay focused and careful while driving.</p>
                                        <p>*Vehicle specifications are subject to change any time.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <Image src="/images/cardetails/stargazer/safety/Airbag-2-Kolom_544x360.jpg" alt="hyundai-bd stargazer safety" width={1200} height={600} />
                                    <h3 className="text-2xl font-semibold">6-Airbag system (Driver, Passenger, Side & Curtain)*</h3>
                                </div>
                        </section>
                </section>
        </div>
    );
};

export default SafetyPage;