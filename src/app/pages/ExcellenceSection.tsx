import React from "react";
import HadingTitle from "../Components/HadingTitle";
import ExcellenceBox from "../Components/ExcellenceBox";

const ExcellenceSection = () => {
    const excellenceData = [
        { value: "5", label: "Years" },
        { value: "4", label: "Countries Served" },
        { value: "20", label: "Repeat Clients" },
        { value: "15", label: "Projects" },
      ];

  return (
    <section data-scroll-index="3" className="pb-[40px]  lg:py-16">
      <div className="container">
        <div className="flex flex-col gap-10 justify-between items-center">
          <HadingTitle
            className="flex justify-center items-center"
            text="Excellence"
          />

          <ExcellenceBox  data={excellenceData} />

          {/* <div className="grid grid-cols-3 w-full gap-20">
            <div className="flex flex-col justify-between items-center p-3 excellence w-full">
              <strong className="text-4xl py-9 ">10+</strong>
              <span className="text-2xl pt-5 pb-8">Years</span>
            </div>
            <div className="flex flex-col justify-between items-center p-3 excellence w-full">
              <strong className="text-4xl py-9 ">62+</strong>
              <span className="text-2xl pt-5 pb-8">Countries</span>
            </div>
            <div className="flex flex-col justify-between items-center p-3 excellence w-full">
              <strong className="text-4xl py-9 ">90%</strong>
              <span className="text-2xl pt-5 pb-8">Repeat Clients</span>
            </div>
            <div className=" flex flex-col justify-between items-center p-3 excellence w-full">
              <strong className="text-4xl py-9 ">320+</strong>
              <span className="text-2xl pt-5 pb-8">Customers</span>
            </div>
            <div className=" flex flex-col justify-between items-center p-3 excellence w-full">
              <strong className="text-4xl py-9 ">35+</strong>
              <span className="text-2xl pt-5 pb-8">techncrats</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
