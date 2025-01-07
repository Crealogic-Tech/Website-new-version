"use client";
import React, { useEffect, useState } from "react";
import HadingTitle from "../Components/HadingTitle";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { TweenLite } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

function AboutSection() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useGSAP(() => {
    TweenLite.set(".abouttitleText ", { perspective: 500 });
    TweenLite.set(".para-about ", { perspective: 500 });
    const tl = gsap.timeline({
      ease: Linear.easeInOut,
      onComplete: () => setAnimationComplete(true), 
    });

    tl.from(
      ".abouttitleText",
      1.5,
      {
        y: 100,
        delay: 2,
        opacity: 0,
        perspective: 500,
        rotationX: -100,
        autoAlpha: 0,
        transformOrigin: "0% 50%",
      },
      "uper"
    )
      .from(
        ".para-about",
        1.5,
        {
          y: 100,
          delay: 2,
          rotateX: 80,
          transformOrigin: "0% 50%",
          autoAlpha: 0,
        },
        "uper+=0.3"
      );
  });

  useEffect(() => {
    if (!animationComplete) return; 
  }, [animationComplete]);

  return (
    <section
      id="about"
      data-scroll-index="4"
      className="reveal flex justify-center items-center py-16"
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="max-w-[800px]">
            <HadingTitle
              className="flex justify-center items-center "
              text="About Us"
            />
            <h2 className="blockSubTitle pSubTitle abouttitleText">
              Best Web & Mobile App Development Company
            </h2>
            <p className="mr-0 para-about">
              As a leading software development company in India, we specialize
              in delivering exceptional services, including web development,
              mobile app development, UI/UX design, blockchain development and
              more. From startups and small-to-medium enterprises to large
              corporations globally. Our experts empower businesses to expand
              their online presence and achieve new milestones using the latest
              phenomenal technologies and creative ideas.
            </p>
            <p className="mr-0 pSubTitle para-about">
              We take on complex web and mobile app development projects and
              on-demand custom software development for clients worldwide. By
              leveraging advanced front-end-technologies like React, Flutter,
              Angular, Vue.js, HTML5 and CSS3, and robust back-end solutions
              including PHP, WordPress, Laravel, Codelgniter, Megento, and
              Node.js, we ensure top-tire results. Our clients benefit from
              secure, scalable, high-performance enterprise-level web & mobile
              app development solutions at affordable rates without compromising
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
