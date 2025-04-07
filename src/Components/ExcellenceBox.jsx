import React, { useEffect, useRef } from "react";

const ExcellenceBox = ({ data }) => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      if (!counter) return;
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.dataset.value;
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 180);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, [data]);

  return (
    <div className="border-0 border-transparent p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 md:gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-between items-center p-3 w-full rounded-xl border-2 shadow-3xl bg-transparent backdrop-blur-3xl">
            <img alt={item.alt} src={item.src} width={56} height={56} className="w-14 h-14 md:w-16 md:h-16" />
            
            <div className="flex justify-center">
              <strong ref={(el) => (countersRef.current[index] = el)} className="text-4xl pt-4 counter" data-value={item.value}>
                0
              </strong>
              <span className="text-2xl md:text-4xl pt-4 font-bold">+</span>
            </div>
            
            <span className="text-xl md:text-2xl text-center pt-5 md:pb-8">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceBox;
