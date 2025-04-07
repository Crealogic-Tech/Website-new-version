"use client";
import React from "react";
import AboutSection from "../pages/AboutSection";
import ExcellenceSection from "../pages/ExcellenceSection";
import HeroSection from "../pages/HeroSection";
import Marque from "../pages/Marque";
import ServicesSection from "../pages/ServicesSection";
import Contactbook from "../pages/Contactbook";
import WhyUs from "../pages/WhyUs";
import ProcessSection from "../pages/ProcessSection";
import TecnologysSection from "../pages/TecnologysSection";
import InderstreSection from "../pages/InderstreSection";
// import OurTeam from "../pages/OurTeam";
// import Footer from "../Components/layout/Footer";
import TalkToExpertSection from "../pages/TalkToExpertSection";
import FaqSection from "../pages/FaqSection";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="h-full">
        <HeroSection />
        <Marque />
        <ExcellenceSection />
        <AboutSection />
        <ServicesSection />
        <Contactbook />
        <WhyUs />
        <ProcessSection />
        <TecnologysSection />
        {/* <OurTeam /> */}
        <InderstreSection />
        <FaqSection />
        <TalkToExpertSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
