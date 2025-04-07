import React, { useEffect, useState } from "react";
import HeroImage from "../../assets/images/hero-home-image-1.svg";
import Button from "../../Components/buttons/Button";
import gsap, { Linear } from "gsap";
import { useGSAP } from "@gsap/react";
import { TweenLite } from "gsap/gsap-core";

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("Logical");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useGSAP(() => {
    TweenLite.set(".titleText", { perspective: 500 });
    TweenLite.set(".para-hero", { perspective: 500 });

    const tl = gsap.timeline({
      ease: Linear.easeInOut,
      onComplete: () => setAnimationComplete(true),
    });

    tl.from(
      ".titleText",
      { y: 100, delay: 0.3, opacity: 0, rotationX: -100, transformOrigin: "0% 50%", duration: 1.2 },
      "uper"
    )
      .from(
        ".hero-video",
        { y: 100, delay: 0.3, opacity: 0, scale: 0, transformOrigin: "top center", duration: 1.2 },
        "uper+=0.2"
      )
      .from(
        ".para-hero",
        { y: 100, delay: 0.3, rotateX: 80, transformOrigin: "0% 50%", autoAlpha: 0, duration: 1.2 },
        "uper+=0.3"
      );
  });

  useEffect(() => {
    if (!animationComplete) return;

    const words = ["Logical", "Professional", "Secured", "Creative"];
    const word = words[currentWordIndex];

    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, currentWordIndex, typingSpeed, animationComplete]);

  useEffect(() => {
    setTypingSpeed(isDeleting ? 50 : 300);
  }, [isDeleting]);

  return (
    <section className="py-[90px] md:pt-24 lg:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col titleText">
            <h1 className="titleText">
              Your Logical Choice Where Bold Ideas Meet{" "}
              <span className="text-[#c06c84]">Logical</span> Execution
            </h1>
            <p className="para-hero me-0 md:me-[60px]">
              Crealogic is a dynamic force in Web & Mobile App Development. We
              drive the digital evolution of startups, established brands, and
              small to medium-sized businesses.
            </p>
            <a href="/contact">
              <Button className="hero-video w-36" text="Enquire Now" />
            </a>
          </div>
          <div>
            <img
              alt="banner image"
              className="hero-video"
              loading="eager"
              src={HeroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
