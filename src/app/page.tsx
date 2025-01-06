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
// import Projects from "./pages/Projects";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, SplitText);

export default function Home() {
  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: ".wrapper", // specify wrapper for smooth scroll
      content: ".content", // specify the content to scroll
      smooth: 5.5, // the smoothness of the scroll
      effects: true, // enable effects (e.g. ScrollTrigger)
    });

    // Cleanup on unmount
    return () => smoother.kill();
  }, []);
  return (
    <div className="wrapper ">
      <div className="mt-[2.5em] h-[95.8vh]">
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
