import Image from "next/image";
import Link from "next/link";


const NewsCard = ({news}) => {
    const {title,details,image} = news
    return (<div className="max-w-96 space-y-4">
        <Image src={image} alt="s" width={400} height={400} className="w-full  object-contain object-center"/>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{details.slice(0,150)} <Link href="/" className="uppercase text-primary text-sm font-bold">...show details</Link></p>
    </div>)
};

export default NewsCard;