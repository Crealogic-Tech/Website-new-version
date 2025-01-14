"use client";
import AboutSection from "./pages/AboutSection";
import ExcellenceSection from "./pages/ExcellenceSection";
import HeroSection from "./pages/HeroSection";
import Marque from "./pages/Marque";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import ServicesSection from "./pages/ServicesSection";
import Contactbook from "./pages/Contactbook";
import WhyUs from "./pages/WhyUs";
import ProcessSection from "./pages/ProcessSection";
import TecnologysSection from "./pages/TecnologysSection";
import InderstreSection from "./pages/InderstreSection";
import OurTeam from "./pages/OurTeam";
import Footer from "./Components/layout/Footer";
import TalkToExpertSection from "./pages/TalkToExpertSection";
import FaqSection from "./pages/FaqSection";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, SplitText);

export default function Home() {
  useEffect(() => {
  
    const smoother = ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 5.5,
      effects: true,
    });

  
    return () => smoother.kill();
  }, []);
  return (
    <div className="wrapper ">
      <div className=" h-full">
        <HeroSection />
        <Marque />
        <ExcellenceSection />
        <AboutSection />
        <ServicesSection />
        <Contactbook />
        <WhyUs />
        <ProcessSection />
        <TecnologysSection />
        <OurTeam />
        {/* <Projects /> */}
        <InderstreSection />
        <FaqSection />
        <TalkToExpertSection />
        <Footer />
      </div>
    </div>
  );
}
