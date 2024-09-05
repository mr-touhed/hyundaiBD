import Image from 'next/image';
import React from 'react';

const ConveniencePage = () => {
    return (
       <div className='container pb-16 space-y-16'>
               <section className='space-y-8 text-center'>
                        <h2 className='text-3xl font-semibold'>The star is high-end comfort.</h2>
                        <p>Travelling with family just got more fun. Enjoy maximum comfort in the New STARGAZER which is equipped with a Captain Seat and spacious cabin space. Provides extra comfort for activities while in the car</p>
                        <Image src="/images/cardetails/stargazer/convenience/Convenience_1-Kolom_1120x600_PC.jpg" alt="" width={1200} height={600} className='w-full'/>
               </section>
               <section className='space-y-8 text-center'>
                        <h2 className='text-3xl font-semibold'>7-Seater</h2>
                        <p>With a 7-seater option, the New STARGAZER can be an option for those of you who are traveling with a large family. With flexible seat arrangements, your trip will still be comfortable</p>
                        <Image src="/images/cardetails/stargazer/convenience/7-seater-Convinience-1kolom_D_1220x1076.jpg" alt="" width={1200} height={600} className='w-full'/>
               </section>
               <section className='space-y-8 text-center'>
                        <h2 className='text-3xl font-semibold'>6-Seater</h2>
                        <p>The New STARGAZER features a 6-seater option with a Captain Seat in the second row. Combining ample space and comfort, with easy access to the third row of seats.</p>
                        <Image src="/images/cardetails/stargazer/convenience/6-seater-Convinience-1kolom_D_1220x1076.jpg" alt="" width={1200} height={600} className='w-full'/>
               </section>
               <section className='space-y-8 text-center'>
                        <h2 className='text-3xl font-semibold'>A star that gives a lot of space.</h2>
                        <p>There are more than 30 ergonomically designed storage bins located on each side of the New STARGAZER. Starting from the front, center, side, to the back, it provides practicality for you and your family in storing more items on the go.</p>
                        <Image src="/images/cardetails/stargazer/convenience/Luggage_EN_1kolom_D_1220x600.jpg" alt="" width={1200} height={600} className='w-full'/>
               </section>
               <section className='grid md:grid-cols-2 gap-8'>
                        <div className='space-y-8'>
                        <Image src="/images/cardetails/stargazer/convenience/KS_RHD_C_PAD_2kolom_544x360.jpg" alt="" width={1200} height={600} className='w-full'/>
                            <h3 className='text-2xl font-semibold'>Hidden Tray</h3>
                        </div>
                        <div className='space-y-8'>
                        <Image src="/images/cardetails/stargazer/convenience/Convenience-Center-Console-Armrest_2-Kolom_544x360.jpg" alt="" width={1200} height={600} className='w-full'/>
                            <h3 className='text-2xl font-semibold'>Center Console Armrest</h3>
                        </div>
               </section>
               <section className='grid md:grid-cols-2 gap-8'>
                        <div className='space-y-8'>
                        <Image src="/images/cardetails/stargazer/convenience/Convenience-Center-Rear_2-Kolom_544x360.jpg" alt="" width={1200} height={600} className='w-full'/>
                            <h3 className='text-2xl font-semibold'>Center Console Rear Storage with USB Port</h3>
                        </div>
                        <div className='space-y-8'>
                        <Image src="/images/cardetails/stargazer/convenience/Highlight_Seat-Back-Table_2-Kolom_544x360.jpg" alt="" width={1200} height={600} className='w-full'/>
                            <h3 className='text-2xl font-semibold'>Seat Back Table</h3>
                        </div>
               </section>
       </div>
    );
};

export default ConveniencePage;



{/* <Image src="/images/cardetails/stargazer/convenience/" alt="" width={1200} height={600} className='w-full'/> */}