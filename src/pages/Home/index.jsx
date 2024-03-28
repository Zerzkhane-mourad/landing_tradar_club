import AbouUs from "@components/shared/AboutUs";
import FormSubscribe from "@components/shared/FormSubscribe";
import HeroSection from "@components/shared/HeroSection";
import MemberShip from "@components/shared/MemberShip";
import News from "@components/shared/News";
import Services from "@components/shared/Services";
import Statistical from "@components/shared/Statistical";



const Home = () => {
  return (

    <>
      <HeroSection />
      <Statistical />
      <Services />
      <AbouUs />
      <MemberShip />
      <News />
      <FormSubscribe/>
    </>
  );
};

export default Home;
