import PageBanner from "@/app/components/PageBanner";
import CollapesDetails from "./_components/CollapesDetails";


const WarrantyPolicypage = () => {
    return (
        <div className="my-16">
            <PageBanner img="/images/pages/warranty-policy-banner.jpg"/>
                <section className="container space-y-16 py-8">
                            <h1 className="text-3xl font-semibold">Warranty Policy</h1>
                            <p>Hyundai Motor Bangladesh Limited herein after called &quot;HMIL&quot; warrants that each current and new Hyundai vehicle sold shall be free from any defects in material and workmanship, under normal use and maintenance, subject to the following terms and conditions.</p>
                </section>

                <section className="container">
               
                        <CollapesDetails/>
                </section>          
        </div>
    );
};

export default WarrantyPolicypage;