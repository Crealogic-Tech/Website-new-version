"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Marque() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const marqueeWidth = marquee.scrollWidth; 

      
      marquee.innerHTML += marquee.innerHTML;

      
      gsap.to(marquee, {
        x: -marqueeWidth / 2, 
        duration: 50, 
        ease: "linear",
        repeat: -1, 
      });
    }
  }, []);

  return (
    <section data-scroll-index="2" className="my-16">
      <div className="container overflow-hidden relative marquee-mask">
        <div
          className="flex gap-5 justify-between items-center whitespace-nowrap  py-5"
          ref={marqueeRef} 
        >
          <span className="marquee-text text-4xl font-extrabold px-3">
             &apos; Innovation is our foundation, your success is ours. &apos;
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
             &apos; Building tomorrow&apos;s tech, today. &apos;
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
             &apos; Driven by logic, inspired by creativity. &apos;
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
             &apos; IT solutions that elevate your business. &apos;
          </span>
        </div>
      </div>
    </section>
  );
}

export default Marque;
