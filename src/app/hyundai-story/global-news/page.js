import PageBanner from '@/app/components/PageBanner';


import GlobalNewsComponent from './_components/GlobalNewsComponent';
// import { backendData } from '../../../../public/data/data';
import { getBlogs } from '@/app/utils/fetchingData';



const GlobalNewsPage = async () => {
    const globalNewsData = await getBlogs('Global News');
   
    return (
        <div className="space-y-8">
                <div className="relative">
                    <PageBanner img="/images/banner-news.jpg"/>
                    <div className=" absolute left-[10%] top-[50%] z-10">
                        <h1 className="text-3xl font-semibold uppercase text-[white]">Global News</h1>
                    </div>
                </div>
            <GlobalNewsComponent news={globalNewsData?.result}/>
        </div>
    );
};

export default GlobalNewsPage;