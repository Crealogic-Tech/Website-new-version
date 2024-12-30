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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, SplitText);

export default function Home() {
  
  return (
    <div className="mt-[2.5em] h-[100vh]">
      <HeroSection />
      <Marque />
      <ExcellenceSection />
      <AboutSection />
      <ServicesSection />
      <Contactbook />
    </div>
  );
}
