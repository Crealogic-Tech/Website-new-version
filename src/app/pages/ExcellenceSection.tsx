import React from "react";
import HadingTitle from "../Components/HadingTitle";
import ExcellenceBox from "../Components/ExcellenceBox";
import Year from "../assets/images/years.png"; // Import the image

const ExcellenceSection = () => {
  const excellenceData = [
    { src: Year, alt: "Year", value: "5", label: "Years" },
    { src: Year, alt: "Year", value: "4", label: "Countries Served" },
    { src: Year, alt: "Year", value: "20", label: "Repeat Clients" },
    { src: Year, alt: "Year", value: "15", label: "Projects" },
  ];

  return (
    <section data-scroll-index="3" className="pb-[40px]  lg:py-16">
      <div className="container">
        <div className="flex flex-col gap-10 justify-between items-center">
          <HadingTitle
            className="flex justify-center items-center"
            text="Excellence"
          />
        </div>
      <div className=" excellence mt-6" >
        <ExcellenceBox data={excellenceData} />
      </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
