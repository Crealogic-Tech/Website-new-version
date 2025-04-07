import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HadingTitle from "../../Components/HadingTitle";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // useEffect(() => {
  //   gsap.set(".abouttitleText, .para-about", { perspective: 500 });

  //   const tl = gsap.timeline({
  //     defaults: { ease: "power3.out" },
  //     onComplete: () => setAnimationComplete(true),
  //   });

  //   tl.from(".abouttitleText", {
  //     y: 100,
  //     opacity: 0,
  //     rotationX: -100,
  //     duration: 1.5,
  //     transformOrigin: "0% 50%",
  //     delay: 1.5,
  //   })
  //     .from(".para-about", {
  //       y: 100,
  //       opacity: 0,
  //       rotateX: 80,
  //       transformOrigin: "0% 50%",
  //       duration: 1.5,
  //     }, "-=1");

  // }, []);

  return (
    <section
      id="about"
      className="reveal flex justify-center items-center py-16"
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="max-w-[800px]">
            <HadingTitle
              className="flex justify-center items-center"
              text="About Us"
            />
            <h2 className="blockSubTitle pSubTitle abouttitleText">
              Best Web & Mobile App Development Company
            </h2>
            <p className="mr-0 para-about">
              As a leading software development company in India, we specialize
              in delivering exceptional services, including web development,
              mobile app development, UI/UX design, blockchain development, and
              more. From startups to large corporations globally, our experts
              empower businesses to expand their online presence and achieve new
              milestones using the latest technologies and creative ideas.
            </p>
            <p className="mr-0 pSubTitle para-about">
              We take on complex web and mobile app development projects and
              custom software development for clients worldwide. By leveraging
              advanced front-end technologies like React, Flutter, Angular,
              Vue.js, and robust back-end solutions including PHP, WordPress,
              Laravel, Magento, and Node.js, we ensure high-performance
              enterprise-level solutions at affordable rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
