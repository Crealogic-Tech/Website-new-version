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

        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
