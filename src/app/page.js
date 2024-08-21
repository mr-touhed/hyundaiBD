import ButtomMenu from "./components/ButtomMenu";
import Blogs from "./components/Home/Blogs";
import CarDetails from "./components/Home/CarDetails";
import HeroSlider from "./components/Home/HeroSlider";
import News from "./components/Home/News";
import ShowCase from "./components/Home/ShowCase";
import SocialBlog from "./components/Home/SocialBlog";


const Home = () => {
  return (
    <>
      <HeroSlider/>
      <CarDetails/>
      <Blogs/>
      <ShowCase/>
      <SocialBlog/>
      <News/>
      <ButtomMenu className="sticky bottom-0 z-20"/>
    </>
  );
};

export default Home;