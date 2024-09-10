import PageBanner from '@/app/components/PageBanner';


const page = () => {
    return (
        <>
            <PageBanner img="/images/pages/corporate.jpg"/>
            <div className='container space-y-16 mb-16'>
                    <section className='space-y-6'>
                            <h2 className='text-3xl font-semibold '>HMI Ethics Charter & Code of Conduct
                            </h2>
                            <p>Hyundai Motor India Limited firmly believes in ethical business practices. It is our Company policy to be lawful, highly-principled and socially responsible in all our activities. The Ethics Charter and Code of Conduct (“Code”) appended, summarises the values, principles and business practices that guide our business conduct.</p>

                            <a className='mx-auto max-w-[250px] block px-8 py-2 bg-primary text-[white]' target='_blank' href="https://www.hyundai.com/content/dam/hyundai/in/en/data/Proposed-homepage/Hyundai-Ethics-Booklet.pdf">HMI Ethics Charter & Code of Conduct</a>
                    </section>
                    <section className='space-y-6'>
                            <h2 className='text-3xl font-semibold '>Whistle Blower Policy</h2>
                            <p>The purpose of Hyundai Motor Bangladesh Ltd.&#39;s (HMIL’s) &#34;Whistle Blower Policy&#34; is to define and establish the position of HMIL on the framework for reporting instances of unethical/improper conduct and taking suitable steps to investigate and to the maximum extent possible, preventing recurrence of such unethical/improper conduct.</p>

                            <a className='mx-auto max-w-[250px] block px-8 py-2 bg-primary text-[white]' target='_blank' href="https://www.hyundai.com/content/dam/hyundai/in/en/data/hyundai-story/corporate-governance/WhistleBlowerPolicyHMILv1.pdf">Whistle Blower Policy</a>
                    </section>
                    <section className='space-y-6'>
                            
                            <p>Hyundai Motor India Ltd. is committed to transparency and fairness for all its stakeholders. Click on the below link to register any grievances relating to unethical/improper conduct</p>

                            <a className='mx-auto max-w-[250px] block px-8 py-2 bg-primary text-[white]' target='_blank' href="">Whistle Blower Portal</a>
                            <a className='mx-auto max-w-[250px] block px-8 py-2 bg-primary text-[white]' target='_blank' href="">Statutory Disclosures</a>
                    </section>

            </div>
        </>
    );
};

export default page;