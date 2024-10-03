import PageBanner from "@/app/components/PageBanner";
import { backendData } from "../../../../public/data/data";
import BanglaNewsComponents from "./_components/BanglaNewsComponents";
import { getBlogs } from "@/app/utils/fetchingData";



const BanglaNewsPage = async () => {
    const BanglaNewsData = await getBlogs('BD News');
    console.log(BanglaNewsData);
    return (
        <div className="space-y-8">
                <div className="relative">
                    <PageBanner img="/images/banner-news.jpg"/>
                    <div className=" absolute left-[10%] top-[50%] z-10">
                        <h1 className="text-3xl font-semibold uppercase text-[white]">Bangladeshi News</h1>
                    </div>
                </div>
            <BanglaNewsComponents news={BanglaNewsData?.result}/>
        </div>
    );
};

export default BanglaNewsPage;