
import BeyondWork from './BeyondWork';
import CareerHeader from './CareerHeader';
import CarrerWhoWeAre from './CarrerWhoWeAre';
import CoreValue from './CoreValue';
import Opportunity from './Opportunity';


const CareerComponent = () => {
    return (
        <div className='space-y-8 mb-16'>
            <CareerHeader/>
            <section className='container space-y-6'>
                <h2 className='text-2xl font-semibold'>Overview</h2>
                <p>We’ve cultivated a fully equipped dream team, representing a variety of backgrounds, cultures,experiences, and values. At HMIL, we believe that the unrelenting success run has been made possible by the determined efforts of our people who envision to turn the impossible into new possibilities and worthwhile experiences to share with the world. They are the driving force as we take steps towards the future and go beyond mobility. We strive to continuously encourage our employees, bringing out the best in them.</p>
                <p>Standing firmly equipped, we are constantly responding to the rapidly changing business environment with the aim of offering innovative and comprehensive experiences and solutions that enhance not just mobility, but go beyond that for our customers. We invite applications to be a part of this accelerated quest of transition into a smart mobility solution provider.</p>
                <p>Here at HMIL, our people are our number one priority. If you believe in offering world-class innovative, sustainable as well as tech driven solutions to suit everyone’s needs, then Hyundai is the place for you to grow and nurture yourself in this fast-paced world.

                    </p>

            </section>
            <CoreValue/>
            <Opportunity/>
            <CarrerWhoWeAre/>
            <BeyondWork/>
            <section className='container space-y-6'>
                    <h2 className='text-3xl font-semibold'>Public Notice</h2>
                    <p>It has come to our notice that unscrupulous agencies/imposters/ external agencies posing as employees/representatives/agents of Hyundai Motor India Ltd. (HMIL) has been fraudulently using Hyundai’s trademark, sending emails for job interviews, offering job and issuing fake appointment letter to the potential candidates. Further, these elements asking gullible candidates to pay case or deposit money in specified bank(s) for recruitment service/ employment in HMIL.</p>
                    <p>HMIL cautions the public not to be misled by aforementioned false/fraudulent communication purportedly made by HMIL Hyundai Motor India has set recruitment process and does not ask candidates to deposit or pay any money for employment. Person receiving calls, mails/ correspondence, are requested to lodge complaint with the local police authorities or may bring it to our notice at 044-47100000 or you drop a mail to hiring@hmil.net</p>
            </section>
        </div>
    );
};

export default CareerComponent;