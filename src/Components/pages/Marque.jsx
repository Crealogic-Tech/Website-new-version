import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const marqueeWidth = marquee.scrollWidth; 

      // Duplicate content for seamless scrolling
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
    <section className="my-16">
      <div className="container overflow-hidden relative">
        <div
          className="flex gap-5 justify-between items-center whitespace-nowrap py-5"
          ref={marqueeRef} 
        >
          <span className="marquee-text text-4xl font-extrabold px-3">
            "Innovation is our foundation, your success is ours."
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            "Building tomorrow's tech, today."
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            "Driven by logic, inspired by creativity."
          </span>
          <span className="marquee-text text-4xl font-extrabold px-3">
            "IT solutions that elevate your business."
          </span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
