import React from "react";
import HadingTitle from "../Components/HadingTitle";
import ExcellenceBox from "../Components/ExcellenceBox";
import Year from "../assets/images/years.png"; // Import the image
import Country from "../assets/images/country.png"; // Import the image
import Repeat from "../assets/images/repeat-customers.png"; // Import the image
import Projects from "../assets/images/Projects.png"; // Import the image

const ExcellenceSection = () => {
  const excellenceData = [
    {
      src: Year,
      alt: " Years of Experience",
      value: "3",
      label: " Years of Experience",
    },
    {
      src: Country,
      alt: "Countries Served",
      value: "4",
      label: "Countries Served",
    },
    {
      src: Repeat,
      alt: " Clients Served",
      value: "20",
      label: " Clients Served",
    },
    { src: Projects, alt: "Projects", value: "15", label: "Projects" },
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
        <div className=" excellence border rounded-[50px] border-transparent mt-6">
          <ExcellenceBox data={excellenceData} />
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
