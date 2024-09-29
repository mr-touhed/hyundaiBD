
import PageBanner from '@/app/components/PageBanner';
import MileStone2023Component from './_components/MileStone2023Component';

const page = () => {
    return (
        <>
            <PageBanner img="/images/pages/Hyundai_Milestone_MainKV_PC_1860x540_moutain_view.jpg"/>
            <section className='container my-8'>
                <h1 className='text-3xl font-semibold text-center mb-16'>Milestones of Hyundai Motor Bangladesh 2023</h1>
            <MileStone2023Component/>
            </section>
        </>
    );
};

export default page;