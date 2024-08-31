import Image from "next/image";

const PerformancePage = () => {
  return (
    <section>
      <div className="container space-y-8">
        <h1 className="text-3xl text-center font-semibold">
          Empower your journey.
        </h1>
        <p className="text-center max-w-[700px] mx-auto">
          The 2.2L turbo diesel engine in the New PALISADE provides a powerful,
          smooth, and fuel-efficient driving experience. An eight-speed
          automatic transmission, Motor-Driven Power Steering, and all-wheel
          drive with Multi-Terrain Control make a performance-packed and
          enjoyable ride on any terrain.
        </p>

        <p className="text-[gray] max-w-[700px] mx-auto text-sm">
          *Maximum power and torque when using EU4 fuel. 194 Maximum power
          PS/3,800 rpm, 425 Maximum torque Nm/1,750 - 2,750 rpm* when using Bio
          Diesel fuel.
        </p>

        <Image
          src={
            "/images/cardetails/palisade/interior/Hyundai palisade-spesifikasi-.jpg"
          }
          alt="palisade Interior car details"
          width={1300}
          height={700}
          className="w-full  h-screen object-cover"
        />

        <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/interior/8-Speed-Shift-by-Wire-Automatic-Transmission_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
              8-Speed Shift-by-Wire Automatic Transmission
            </h2>
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/interior/Electronic-All-Wheel-Drive-System_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-semibold ">
              Electronic All-Wheel Drive System
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F3F2] md:py-16 space-y-8">

              <h2 className="text-3xl font-bold text-center">Drive Mode/Multi terrain Mode</h2>

          <Image
              src={
                "/images/cardetails/palisade/interior/Drive-mode-terrain-mode_1-Kolom_1120x600_PC.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-[70%] mx-auto object-cover"
            />


            <p className="text-center max-w-[700px] mx-auto">New PALISADE has four driving modes (Comfort, Eco, Sport, and Smart) and three terrain type modes based on the terrain conditions. Drivers can select from various driving modes based on their personal preferences and road conditions.</p>
            <p className="text-[gray] max-w-[700px] mx-auto text-sm">
            The image may differ from the actual product.
        </p>


        <div className="container grid md:grid-cols-2 gap-6 mt-6">
          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/interior/Drive-Mode_3_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            
          </div>

          <div className="py-4">
            <Image
              src={
                "/images/cardetails/palisade/interior/Drive-Mode_2_2-Kolom_544x360.jpg"
              }
              alt="palisade Interior car details"
              width={1300}
              height={700}
              className="w-full object-cover"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePage;
