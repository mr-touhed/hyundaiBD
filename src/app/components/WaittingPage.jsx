import Image from 'next/image';


const WaittingPage = () => {
    return (
        <div className="container -mt-[50px]">
            <Image  src="/images/wait.jpg" alt="comming soon" width={1200} height={600} className="max-w-[800px] mx-auto h-auto"/>
        </div>
    );
};

export default WaittingPage;