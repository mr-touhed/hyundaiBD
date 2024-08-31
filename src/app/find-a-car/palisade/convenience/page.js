import Image from 'next/image';
import React from 'react';

const ConveniencePage = () => {
    return (
       <section className='container space-y-8 py-16'>
                <div className='text-center'>
                <h1 className='text-3xl font-semibold '>Empower you to live comfortably.</h1>
                <p>New PALISADE special features create your family trip safer and more comfortable.</p>

                    <Image src="/images/cardetails/palisade/convenience/04-Mewah-Berkelas-New-Hyundai-PALISADE-Signature.jpg" alt=""  width={1300} height={700} className=''/>
                </div>
                <div className='grid md:grid-cols-3 gap-8'>
                        <div>
                        <Image src="/images/cardetails/palisade/convenience/Kenyamanan-Large-luggage-space_1-Kolom_1120x600_PC.jpg" alt=""  width={1300} height={700} className=''/>
                        <h2 className='text-2xl font-semibold'>Smart Power Tailgate with
                        Adjustable Opening</h2>
                        </div>

                        <div>
                        <Image src="/images/cardetails/palisade/convenience/Kenyamanan-Reverse-Guide-Lamp_3-Kolom_319x212.jpg" alt=""  width={1300} height={700} className=''/>
                        <h2 className='text-2xl font-semibold'>Reverse Guide Lamp</h2>
                        </div>

                        <div>
                        <Image src="/images/cardetails/palisade/convenience/Kenyamanan-Surround-View-Monitor_3-Kolom_319x212.jpg" alt=""  width={1300} height={700} className=''/>
                        <h2 className='text-2xl font-semibold'>Surround View Monitor</h2>
                        </div>
                </div>

                <div className='space-y-8'>
                            <div className='text-center'>
                            <h2 className='text-3xl font-semibold '>Empower you to live comfortably.</h2>
                            <p>New PALISADE flexible cabin space arrangement and special features provide premium comfort.</p>
                            </div>
                <Image src="/images/cardetails/palisade/convenience/Kenyamanan-Captain-Seat_1-Kolom_1120x600_PC.jpg" alt=""  width={1300} height={700} className=''/>



                    <div className='grid md:grid-cols-2 gap-8'>

                        <div className='space-y-4'>
                        <Image src="/images/cardetails/palisade/convenience/Heated-Seated_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
                        <h2 className='text-xl font-semibold '>Empower you to live comfortably.</h2>
                        </div>


                        <div className='space-y-4'>
                        <Image src="/images/cardetails/palisade/convenience/One-Touch-Walk-in-System_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
                        <h2 className='text-xl font-semibold '>One Touch Walk in System</h2>
                        </div>
                    </div>



                    <div className='space-y-16 pt-16'>
                    <div className='grid md:grid-cols-2 gap-8'>

<div className='space-y-4'>
<Image src="/images/cardetails/palisade/convenience/USB-Port_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
<h2 className='text-xl font-semibold '>USB Port</h2>
</div>


<div className='space-y-4'>
<Image src="/images/cardetails/palisade/convenience/Rear-automatic-climate-control_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
<h2 className='text-xl font-semibold '>Rear automatic climate control</h2>
</div>
</div>



<div className='grid md:grid-cols-2 gap-8'>

<div className='space-y-4'>
<Image src="/images/cardetails/palisade/convenience/Puddle-lamp_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
<h2 className='text-xl font-semibold '>Puddle lamp</h2>
</div>


<div className='space-y-4'>
<Image src="/images/cardetails/palisade/convenience/Power-window-with-anti-pinch_2-Kolom_544x360.jpg" alt=""  width={1300} height={700} className=''/>
<h2 className='text-xl font-semibold '>Power window with anti pinch</h2>
</div>
</div>
                    </div>

                </div>
       </section>
    );
};

export default ConveniencePage;