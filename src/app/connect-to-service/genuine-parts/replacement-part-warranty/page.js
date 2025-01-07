import PageBanner from "@/app/components/PageBanner";
import WaittingPage from "@/app/components/WaittingPage";


const PlacePartsPage = () => {
    return (
        <div>
            <div className="relative">
           <PageBanner img="/images/pages/parts.jpg"/>
                <div className="space-y-3 absolute top-[30%] left-[5%]">
                    <h3 className="text-4xl font-bold">Replacement Parts Warranty</h3>
                    <p className="text-lg">The Perfect Opportunity to Tailor your Car&#39;s Parts Warranty</p>
                    <p className="text-sm bg-[#ffff0071] text-center">6 months (except maintenance parts)
*Terms and conditions applied
</p>
                </div>
           </div>
            <WaittingPage/>
        </div>
    );
};

export default PlacePartsPage;