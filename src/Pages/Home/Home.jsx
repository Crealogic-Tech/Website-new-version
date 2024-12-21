import React from "react";

import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Divider from "../../Components/Divider/Divider";
// import Toggle from "../../Components/Toggle/Toggle";
// import HomeLeftHorizontalDivider from "../../Components/Divider/HeroLeftHorizontalDivider";
// import HomeRightHorizontalDivider from "../../Components/Divider/HeroRightHorizontalDivider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
    </>
  );
};

export default Home;
