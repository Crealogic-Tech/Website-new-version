"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";

type ExcellenceItem = {
  value: string;
  label: string;
  alt: string;
  src: StaticImageData; // StaticImageData type
};

type ExcellenceGridProps = {
  data: ExcellenceItem[];
};

const ExcellenceBox: React.FC<ExcellenceGridProps> = ({ data }) => {
  useEffect(() => {
    // Run counter animation after the component is mounted
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const element = counter as HTMLElement;
      element.innerText = "0";

      const updateCounter = () => {
        const target = +element.getAttribute("data-target")!;
        const count = +element.innerText;
        const increment = target / 200;

        if (count < target) {
          element.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 180);
        } else {
          element.innerText = target.toString();
        }
      };

      updateCounter();
    });
  }, [data]);

  return (
    <div className="rounded-xl p-10" >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full rounded-2xl border-0 gap-6 md:gap-10 ">

      {data.map((item, index) => (
        <div key={index} className="flex flex-col justify-between items-center p-3 w-full rounded-xl border-x-2 shadow-3xl bg-transparent backdrop-blur-3xl">
          <Image alt={item.alt} src={item.src}  className="w-20 h-20"/>
          <div className="flex justify-center ">
            <strong className="text-4xl pt-4 counter" data-target={item.value}>
              0
            </strong>
            <span className="text-4xl pt-4 font-bold">+</span>
          </div>
          <span className="text-2xl pt-5 pb-8">{item.label}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ExcellenceBox;
