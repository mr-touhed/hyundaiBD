import ButtomMenu from "./components/ButtomMenu";
import ChatBotApp from "./components/ChatBot/ChatBotApp";
import Blogs from "./components/Home/Blogs";
import CarDetails from "./components/Home/CarDetails";
import DealerAndBooking from "./components/Home/DealerAndBooking";
import HeroSlider from "./components/Home/HeroSlider";
import News from "./components/Home/News";
import Service from "./components/Home/Service";
import ShowCase from "./components/Home/ShowCase";
import SocialBlog from "./components/Home/SocialBlog";
import LocationMap from "./components/LocationMap";


const Home = () => {
  return (
    <>
      <HeroSlider/>
      <CarDetails/>
      <Service/>
      <LocationMap/>
      
      <Blogs/>
      {/* <ShowCase/> */}
      <SocialBlog/>
      <News/>
     
      <ButtomMenu className="sticky bottom-0 z-20"/>
      <ChatBotApp/>
    </>
  );
};

export default Home;