"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Marque() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const marqueeWidth = marquee.scrollWidth; // Total width of the content

      // Duplicate content for seamless looping
      marquee.innerHTML += marquee.innerHTML;

      // Create infinite scrolling animation
      gsap.to(marquee, {
        x: -marqueeWidth / 2, // Move the content to the left by half its duplicated width
        duration: 50, // Adjust speed by changing duration
        ease: "linear",
        repeat: -1, // Infinite loop
      });
    }
  }, []);

  return (
    <section data-scroll-index="2" className="my-16 ">
      <div className="container overflow-hidden relative marquee-mask"> {/* Ensure the content stays within the viewport */}
        <div
          className="flex gap-5 justify-between items-center whitespace-nowrap  py-5"
          ref={marqueeRef} // Attach ref to the marquee container
        >
          <span className="marquee-text text-4xl font-extrabold px-3">
            " Innovation is our foundation, your success is ours. "
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            " Building tomorrow's tech, today. "
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            " Driven by logic, inspired by creativity. "
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            " IT solutions that elevate your business. "
          </span>
        </div>
      </div>
    </section>
  );
}

export default Marque;
