
'use client'
import React from "react";
import HadingTitle from "../Components/HadingTitle";
import gsap from 'gsap';
import { ScrollTrigger  } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function AboutSection() {
  // useEffect(() => {
  //   // Ensure the SplitText plugin works correctly
  //   const aeroText = new SplitText(".blockSubTitle", { type: "chars, words" });

  //   // Create a GSAP timeline
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".about",
  //       start: "top center",
  //     },
  //   });

  //   gsap.set(".blocksSubTitle, .blockSubTitle, .pSubTitle", { perspective: 500 });

  //   tl.from(".blocksSubTitle", {
  //     y: 100,
  //     opacity: 0,
  //     rotationX: -100,
  //     ease: Back.easeInOut,
  //     duration: 1.5,
  //     transformOrigin: "0% 50%",
  //   })
  //     .from(
  //       aeroText.words,
  //       {
  //         y: 150,
  //         opacity: 0,
  //         rotationX: -100,
  //         ease: Back.easeInOut,
  //         duration: 1.5,
  //         transformOrigin: "0% 50%",
  //       },
  //       "-=1.3"
  //     )
  //     .from(
  //       ".pSubTitle",
  //       {
  //         y: 100,
  //         opacity: 0,
  //         rotationX: -100,
  //         ease: Back.easeInOut,
  //         duration: 1.5,
  //         transformOrigin: "0% 50%",
  //       },
  //       "-=1.3"
  //     )

  //   // Cleanup function
  //   return () => {
  //     const trigger = ScrollTrigger.getById("about-section");
  //     if (trigger) {
  //       trigger.kill();
  //     }
  //   };
    
  // }, []);

  return (
    <section data-scroll-index="4" className=" flex justify-center items-center py-16">
      <div className="container">
        <div className="flex  justify-center items-center">
          <div className="max-w-[800px]">
            <HadingTitle className="flex justify-center items-center" text="About Us" />
            <h2 className="blockSubTitle pSubTitle">Best Web & Mobile App Development Company</h2>
            <p className="mr-0">
              As a leading software development company in India, we specialize
              in delivering exceptional services, including web development,
              mobile app development, UI/UX design, blockchain development and
              more. From startups and small-to-medium enterprises to large
              corporations globally. Our experts empower businesses to expand
              their online presence and achieve new milestones using the latest
              phenomenal technologies and creative ideas.
            </p>
            <p className="mr-0 pSubTitle">
              We take on complex web and mobile app development projects and
              on-demand custom software development for clients worldwide. By
              leveraging advanced front-end-technologies like React, Flutter,
              Angular, Vue.js, HTML5 and CSS3, and robust back-end solutions
              including PHP, WordPress, Laravel, Codelgniter, Megento, and
              Node.js, we ensure top-tire results. Our clients benet from
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
