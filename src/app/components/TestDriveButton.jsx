

import Link from 'next/link';

const TestDriveButton = ({car}) => {
    return (
        <div className='min-h-40 flex justify-center items-center'>
                        <Link className='px-6 py-2 bg-primary text-[white] shadow-sm rounded-sm shadow-skylight' href={`/click-to-buy/test-drive?c=${car}`} >Request For Test Drive</Link>
        </div>
    );
};

export default TestDriveButton;