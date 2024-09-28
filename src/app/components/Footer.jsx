import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-dark p-16 text-lightDark space-y-6">
                <section className="grid md:grid-cols-4  lg:grid-cols-7  grid-cols-1">
                        <div className="lg:ml-auto px-4 pb-4">
                            <Image src="/images/footer_logo_pc.png" alt="company logo" className="w-16" width={100} height={70}/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Hyundai Cars</h2>
                            <ul>
                                <li><Link href="/find-a-car/creta/highlights">Creta</Link></li>
                                <li><Link href="/find-a-car/creta-grand/highlights">Creta Grand</Link></li>
                                <li><Link href="/find-a-car/tucson/highlights">Tucson</Link></li>
                                <li><Link href="/find-a-car/palisade/highlights">Palisade</Link></li>
                                <li><Link href="/find-a-car/pick-up/highlights">H 100</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Sell your Car</h2>
                            <ul>
                                <li><Link href="/click-to-buy/test-drive">Request a Test Drive</Link> </li>
                                {/* <li>Special Offers</li> */}
                                <li><Link href="/contact-us/prices">Prices</Link></li>
                                <li> <Link href="/click-to-buy/find-a-dealer">Find a Dealer</Link></li>
                                {/* <li><Link href="/bookACar">Online Booking</Link> </li> */}
                                {/* <li>Online Finance</li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Connect to Service</h2>
                            <ul>
                                <li><Link href="/connect-to-service/book-a-service">Book a Service</Link> </li>
                                <li>Warranty Policy</li>
                                {/* <li>Road Side Assistance</li> */}
                                <li>Service Package</li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Hyundai Story</h2>
                            <ul>
                                <li> <Link href="/hyundai-story/about-us"> About Us</Link></li>
                                <li>Media center</li>
                                {/* <li>Hyundai Bluelink</li> */}
                                <li>Dealer Application</li>
                                <li><Link href="/contact-us/career">Career</Link></li>
                                <li>Samarth by Hyundai</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Contact Us</h2>
                            <ul>
                                <li><Link href="/hyundai-story/about-us">Connect with Us</Link></li>
                                <li><Link href="/contact-us/legal-disclaimer">Legal Disclaimer</Link> </li>
                                <li>Sitemap</li>
                                <li>Hyundai Suppliers</li>
                                <li>Hyundai Worldwide</li>
                            </ul>
                        </div>
                        <div>
                            {/* social  */}
                        </div>

                </section>
                <section className="md:flex gap-4">
                        <div>
                        <h2 >ABOUT US</h2>
                        <h3 className="text-2xl font-extrabold"><span className="text-primary">Fair</span>Technology</h3>
                        </div>
                        <div>
                        <h2>A Concern of</h2>
                        <h2 className="text-2xl font-extrabold text-[white]">FAIRGROUP</h2>
                        </div>
                </section>
                <p className="text-center text-xs">Copyright 2024 Hyundai Motor Bangladesh. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;