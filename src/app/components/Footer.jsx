import Image from "next/image";


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
                                <li>Creta</li>
                                <li>Creta Grand</li>
                                <li>Tucson</li>
                                <li>Palisade</li>
                                <li>H 100</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Sell your Car</h2>
                            <ul>
                                <li>Request a Test Drive</li>
                                <li>Special Offers</li>
                                <li>Prices</li>
                                <li>Find a Dealer</li>
                                <li>Online Booking</li>
                                <li>Online Finance</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Connect to Service</h2>
                            <ul>
                                <li>Book a Service</li>
                                <li>Warranty Policy</li>
                                <li>Road Side Assistance</li>
                                <li>Service Package</li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Hyundai Story</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Media center</li>
                                <li>Hyundai Bluelink</li>
                                <li>Dealer Application</li>
                                <li>Career</li>
                                <li>Samarth by Hyundai</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[white]">Contact Us</h2>
                            <ul>
                                <li>Connect with Us</li>
                                <li>Legal Disclaimer</li>
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