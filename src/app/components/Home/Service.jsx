import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
        <section className='md:h-40 bg-[#F6F3F2] grid place-content-center'>
                <ul className='flex flex-col md:flex-row gap-4 '>
                    <li><Link href="/click-to-buy/test-drive" className='w-72 h-14 bg-lightDark grid place-content-center text-[white] text-sm'>Request a Test Drive</Link></li>
                    <li><Link href="/" className='w-72 h-14 bg-lightDark grid place-content-center text-[white] text-sm'>Download E-Brochure</Link></li>
                <li><Link href="/connect-to-service/book-a-service" className='w-72 h-14 bg-lightDark grid place-content-center text-[white] text-sm'>Services</Link></li>
                <li><Link href="/bookACar" className='w-72 h-14 bg-lightDark grid place-content-center text-[white] text-sm'>Online Booking</Link></li>
                <li><Link href="/" className='w-72 h-14 bg-lightDark grid place-content-center text-[white] text-sm'>Prices</Link></li>
                </ul>
        </section>
    );
};

export default Service;