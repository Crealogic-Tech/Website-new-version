"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroImage from "../assets/images/hero-home-image-1.webp";
import Button from "../Components/layout/Button";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { TweenLite } from "gsap/gsap-core";

function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false); // Track GSAP animation completion
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("Logical"); // Start with "Logical"
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ['Logical', 'Professional', 'Secured', 'Creative'];

  // GSAP Animation
  useGSAP(() => {
    TweenLite.set(".titleText ", { perspective: 500 });
    TweenLite.set(".para-hero ", { perspective: 500 });
    const tl = gsap.timeline({
      ease: Linear.easeInOut,
      onComplete: () => setAnimationComplete(true), // Set animationComplete to true when GSAP finishes
    });

    tl.from(
      ".titleText",
      1.2,
      {
        y: 100,
        delay: 0.3,
        opacity: 0,
        perspective: 200,
        rotationX: -100,
        autoAlpha: 0,
        transformOrigin: "0% 50%",
      },
      "uper"
    )
      .from(
        ".hero-video",
        1.2,
        {
          y: 100,
          delay: 0.3,
          opacity: 0,
          perspective: 200,
          scale: 0,
          transformOrigin: "top center",
        },
        "uper+=0.2"
      )
      .from(
        ".para-hero",
        1.2,
        {
          y: 100,
          delay: 0.3,
          rotateX: 80,
          transformOrigin: "0% 50%",
          autoAlpha: 0,
        },
        "uper+=0.3"
      );
  });

  // Typewriter Effect
  useEffect(() => {
    if (!animationComplete) return; // Start typewriter only after GSAP animation completes

    const word = words[currentWordIndex];

    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          (prev) =>
            isDeleting
              ? prev.slice(0, prev.length - 1) // Remove characters
              : word.slice(0, prev.length + 1) // Add characters
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [
    displayText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    animationComplete,
  ]);

  useEffect(() => {
    setTypingSpeed(isDeleting ? 50 : 300); // Adjust speed when deleting vs typing
  }, [isDeleting]);

  return (
    <section data-scroll-index="1" className="py-[90px] md:pt-24 lg:pt-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8" >
          <div className="flex flex-col relative titleText">
            <div className="">
              <h1 className="titleText">
                Your Logical Choice Where Bold Ideas Meet{" "}
                <span className="text-[#c06c84]">
                  {displayText}
                  <span className="blinking-cursor">|</span>
                </span>{" "}
                Execution
              </h1>
            </div>
            <div>
              <p className="para-hero">
                Crealogic is a dynamic force in Web and Mobile App Development.
                We drive the digital evolution of startups, established brands,
                and small to medium-sized businesses.
              </p>
            </div>
            <div>
              <Button className="hero-video w-36" text="Enquire Now" />
            </div>
          </div>
          <div>
            <Image alt="" className="hero-video" src={HeroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
