"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import HeroImage from "../assets/images/hero-home-image-1.svg";
import Button from "../Components/layout/Button";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { TweenLite } from "gsap/gsap-core";
import Link from "next/link";
import '@/app/globals.css'

function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("Logical");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useGSAP(() => {
    TweenLite.set(".titleText ", { perspective: 500 });
    TweenLite.set(".para-hero ", { perspective: 500 });
    const tl = gsap.timeline({
      ease: Linear.easeInOut,
      onComplete: () => setAnimationComplete(true),
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

  useEffect(() => {
    if (!animationComplete) return;
  
    const words = ["Logical", "Professional", "Secured", "Creative"];  // Move words here
    const word = words[currentWordIndex];
  
    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, prev.length - 1)
            : word.slice(0, prev.length + 1)
        );
      }, typingSpeed);
  
      return () => clearTimeout(timeout);
    }
  }, [
    displayText,
    isDeleting,
    currentWordIndex,
    typingSpeed,
    animationComplete,
  ]);
  
  useEffect(() => {
    setTypingSpeed(isDeleting ? 50 : 300);
  }, [isDeleting]);

  return (
    <section data-scroll-index="1" className="py-[90px] md:pt-24 lg:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col relative titleText">
            <div className="">
              <h1 className="titleText">
                Your Logical Choice Where Bold Ideas Meet{" "}
                {/* <span className="text-[#c06c84]">
                  {displayText}
                  <span className="blinking-cursor">|</span>
                </span>{" "} */}
                <span className="text-[#c06c84]">Logical </span> Execution
              </h1>
            </div>
            <div>
              <p className="para-hero me-0 md:me-[60px]">
                Crealogic is a dynamic force in Web & Mobile App Development. We
                drive the digital evolution of startups, established brands, and
                small to medium-sized businesses.
              </p>
            </div>
            <div>
              <Link href="/contact">
                <Button className="hero-video w-36" text="Enquire Now" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              alt="banner image"
              className="hero-video w-full h-full"
              loading="eager"
              width="100"
              height="100"
              src="/assets/images/hero-home-image-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
