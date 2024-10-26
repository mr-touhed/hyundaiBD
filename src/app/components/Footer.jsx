import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-dark  text-lightDark space-y-6 relative">
                <section className="grid md:grid-cols-4  lg:grid-cols-7  grid-cols-1 p-16">
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
                                <li><Link href="/find-a-car/H-100/highlights">H-100</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Get a Hyundai</h2>
                            <ul>
                                <li><Link href="/click-to-buy/test-drive">Request a Test Drive</Link> </li>
                                {/* <li>Special Offers</li> */}
                                <li><Link href="/contact-us/prices">Prices</Link></li>
                                <li> <Link href="/click-to-buy/find-an-outlet">Outlet</Link></li>
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
                                <li><Link href="/hyundai-story/milestones">Milestones - 2023 onwards</Link></li>
                                {/* <li>Hyundai Bluelink</li> */}
                                <li><Link href="/hyundai-story/global-news">Global News</Link></li>
                                <li><Link href="/hyundai-story/bangladesh-news">Bangladesh News</Link></li>
                                {/* <li><Link href="/hyundai-story/awards">Awards</Link></li> */}
                                {/* <li><Link href="/hyundai-story/corporate-governance">Corporate Governance</Link></li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Contact Us</h2>
                            <ul>
                                <li><Link href="/hyundai-story/about-us">Connect with Us</Link></li>
                                <li><Link href="/contact-us/legal-disclaimer">Legal Disclaimer</Link> </li>
                                <li>Sitemap</li>
                                {/* <li>Hyundai Suppliers</li> */}
                                <li><Link href="https://www.hyundai.com/worldwide/en/newsroom" target="_blank">Hyundai Worldwide</Link></li>
                            </ul>
                        </div>
                        <div>
                            {/* social  */}
                        </div>

                </section>
                <section className=" bg-[white] p-3 h-[80px] relative">
                        <div className="md:flex items-center gap-4 max-w-7xl mx-auto">

                        <div >
                        <h2 >ABOUT US</h2>
                        <Image src="/images/FairGroup_Logo_02.png" alt="logo" width={150} height={70} className="" />
                        </div>
                        <div>
                        <h2>A Concern of</h2>
                        <Image src="/images/FairGroup_Logo_01.png" alt="logo" width={150} height={70} className="" />
                        </div>
                        </div>

                        <p className="text-center text-xs pb-6">Copyright 2024 Hyundai Motor Bangladesh. All Rights Reserved. <span className="absolute right-0 bottom-0 font-bold text-[white] hover:text-[#0000006d]">T-islam</span></p>
                </section>
                
                
        </footer>
    );
};

export default Footer;