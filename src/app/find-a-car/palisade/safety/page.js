import Image from "next/image";


const SafetyPage = () => {
    return (
        <section className="container">
                <div className="space-y-12">
        <h1 className="text-3xl text-center font-semibold">
        Safety
        </h1>
        <p className="text-center max-w-[700px] mx-auto">
        New PALISADE featured with Hyundai Smartsense that has been augmented with new and more
        powerful features to keep you and your loved ones safe.
        </p>

        <p className="text-[gray] max-w-[700px] mx-auto text-sm">
        Features serve as support systems. Drivers must stay focused and be careful while driving.
        </p>

        <Image
          src={
            "/images/cardetails/palisade/safety/palisade-lx2-pe-safety-safety_pc.jpg"
          }
          alt="palisade safety car details"
          width={1300}
          height={700}
          className="w-full  h-screen object-cover"
        />
                {/* column 1  */}
        <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-FCA_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Forward Collision-avoidance Assist (FCA)
            with Junction Turn*
            </h2>
            <p className="text-sm">This feature alerts the driver if the system detects a risk of a frontal collision, such as with pedestrians or a vehicle that suddenly slows or stops.</p>
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan_RCCA_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Rear Cross-traffic Collision-avoidance
            Assist (RCCA)*
            </h2>
            <p className="text-sm">RCCA alerts the driver if a vehicle is approaching the rear lane while reversing and applies emergency braking if necessary.</p>
          </div>
        </div>
 {/* column  2 */}
 <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-BCA_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Blind-spot Collision Warning (BCW)*
            </h2>
            <p className="text-sm">The radar sensor in the rear bumper alerts the driver when an approaching vehicle is in the driver&lsquo;s blind spot.</p>
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-LFA_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Lane Following Assist (LFA)*
            </h2>
            <p className="text-sm">The front camera detects lane markers and assists the driver in keeping the vehicle in the center of the lane.</p>
          </div>
        </div>


               {/* column  3 */}
 <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-SCCwS_G_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Smart Cruise Control with Stop & Go Function
(SCC w/ S&G)*
            </h2>
            <p className="text-sm">Adjusting the vehicle&lsquo;s speed without having to step on the gas pedal, which can automatically adjust the distance between it and the vehicle in front of it. If the vehicle in front comes to a complete stop, the SCC will automatically reduce speed until it comes to a complete stop and then resume speed following the vehicle in front.</p>
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-Airbag-System_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            6 Airbag System*
            </h2>
            
          </div>
        </div>




               {/* column  4 */}
 <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-BVM_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Blind-spot View Monitor (BVM)*
            </h2>
            <p className="text-sm">Displays a blind spot on the cluster screen when the turn signal is turned on to make it easier for drivers to change lanes.</p>
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/safety/Keamanan-SEA_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
            Safe Exit Assist (SEA)
            </h2>
            <p className="text-sm">The sensor automatically locks the rear door when it detects an object approaching from the rear as the door is being opened.</p>
          </div>
        </div>

      </div>
            
        </section>
    );
};

export default SafetyPage;