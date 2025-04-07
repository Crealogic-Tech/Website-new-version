import React from "react";
import HadingTitle from "../../Components/HadingTitle";
import ProcessBox from "../../Components/ProcessBox";
import Requirement from "../../assets/images/Requirement-Analysis.svg";
import Planning from "../../assets/images/Planning & Design.svg";
import Development from "../../assets/images/Development.svg";
import Testing from "../../assets/images/Testing.svg";
import Deployment from "../../assets/images/Deployment.svg";
import Maintenance from "../../assets/images/Maintenance & Support.svg";


function ProcessSection() {
  const ProcessData = [
    {
      // step: "1",
      src: Requirement,
      alt: "Requirement Analysis",
      title: "Requirement Analysis",
      pra: "We focus on understanding the goals, objectives, and challenges that software is designed to solve.",
    },
    {
      // step: "2",
      src: Planning,
      alt: "Planning & Design",
      title: "Planning & Design",
      pra: "Develop a comprehensive clarity while adding a slight variation in phrasing.",
    },
    {
      // step: "3",
      src: Development,
      alt: "Development",
      title: "Development",
      pra: "Develop the software, ensuring every module integrates with the design and operates smoothly.",
    },
    {
      // step: "4",
      src: Testing,
      alt: "Testing",
      title: "Testing",
      pra: "Thoroughly test the software for bugs, performance glitches, and overall reliability.",
    },
    {
      // step: "5",
      src: Deployment,
      alt: "Deployment",
      title: "Deployment",
      pra: "Deploy the software in a live environment, making it available to users.",
    },
    {
      // step: "6",
      src: Maintenance,
      alt: "Maintenance & Support",
      title: "Maintenance & Support",
      pra: "We offer continuous support, handling updates, issues, and enhancements to ensure the software stays efficient.",
    },
  ];

  return (
    <section className="py-[90px] lg:py-16 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Process"
            />
            <h2 className="blockSubTitle pSubTitle">
              Our Software Development Process
            </h2>
          </div>
          <div className="relative">
          <ProcessBox data={ProcessData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
