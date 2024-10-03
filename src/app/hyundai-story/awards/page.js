import PageBanner from "@/app/components/PageBanner";
import { getBlogs } from "@/app/utils/fetchingData";
import AwardsNewsComponent from "./_components/AwardsNewsComponent";



const AwardsNewsPage = async () => {
    const AwardsNewsData = await getBlogs('Award');
   console.log(AwardsNewsData);
    return (
        <div className="space-y-8">
                <div className="relative">
                    <PageBanner img="/images/banner-news.jpg"/>
                    <div className=" absolute left-[10%] top-[50%] z-10">
                        <h1 className="text-3xl font-semibold uppercase text-[white]">Sweet Success Stories</h1>
                    </div>
                </div>
            <AwardsNewsComponent news={AwardsNewsData?.result}/>
        </div>
    );
};

export default AwardsNewsPage;