import Image from "next/image";
import Link from "next/link";


const NewsCard = () => {
    return (<div className="max-w-96 space-y-4">
        <Image src="/images/Creta_news.jpg" alt="s" width={400} height={400} className="w-full  object-contain object-center"/>
        <h2 className="text-xl font-semibold">হুন্দাই এক্সচেঞ্জ প্রোগ্রামে এভিয়েশন পার্টনার হলো এয়ার এ্যাস্ট্রা</h2>
        <p>ফেয়ার টেকনোলজি লিমিটেডের হুন্দাই এক্সচেঞ্জ প্রোগ্রামে এভিয়েশন পার্টনার হিসেবে যুক্ত হলো এয়ার এ্যাস্ট্রা। রাজধানীর বনানীতে ফেয়ার গ্রুপ চেয়ারম্যান’স অফিসে মঙ্গলবার (১৭ অক্টোবর) এ ব্যাপারে সমঝোতা স্বাক্ষর করেন ফেয়ার টেকনোলজির ডিরেক্টর ও সিইও মুতাসসিম দায়ান ও এয়ার এ্যাস্ট্রা’র সিইও ইমরান আসিফ। সমঝোতা স্মারক অনুযায়ী হুন্দাই একচেঞ্জ প্রোগ্রামের আওতায় ব্র্যান্ড নিউ হুন্দাই গাড়ির পঁচিশ ক্রেতাকে ঢাকা-কক্সবাজার-ঢাকা ফ্লাইটের <Link href="/" className="uppercase text-primary text-sm font-bold">...show details</Link></p>
    </div>)
};

export default NewsCard;