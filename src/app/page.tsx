"use client";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import HeroSection from "@/Components/HeroSection";
import Marque from "@/Components/Marque";
import ExcellenceSection from "@/Components/ExcellenceSection";
import AboutSection from "@/Components/AboutSection";
import ServicesSection from "@/Components/ServicesSection";
import Contactbook from "@/Components/Contactbook";
import WhyUs from "@/Components/WhyUs";
import ProcessSection from "@/Components/ProcessSection";
import TecnologysSection from "@/Components/TecnologysSection";
import OurTeam from "@/Components/OurTeam";
import InderstreSection from "@/Components/InderstreSection";
import FaqSection from "@/Components/FaqSection";
import TalkToExpertSection from "@/Components/TalkToExpertSection";
import Footer from "@/Components/layout/Footer";
import '@/app/globals.css'

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
