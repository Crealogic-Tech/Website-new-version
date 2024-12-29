"use client";

import React, { useEffect } from "react";

type ExcellenceItem = {
  value: string;
  label: string;
};

type ExcellenceGridProps = {
  data: ExcellenceItem[];
};

const ExcellenceBox: React.FC<ExcellenceGridProps> = ({ data }) => {
  useEffect(() => {
    // Run counter animation after the component is mounted
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const element = counter as HTMLElement; // Assert type to HTMLElement
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
  }, [data]); // Trigger the effect when 'data' changes

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 md:gap-10 lg:gap-20">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center p-3 excellence w-full"
        >
            <div className="flex justify-center ">

          <strong
            className="text-4xl py-9 counter"
            data-target={item.value} 
          >
            0   
          </strong>
            <span className="text-4xl py-9 font-bold">+</span>
            </div>
          <span className="text-2xl pt-5 pb-8">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ExcellenceBox;
