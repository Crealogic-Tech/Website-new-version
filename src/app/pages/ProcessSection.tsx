import React from "react";
import HadingTitle from "../Components/HadingTitle";
import ProcessBox from "../Components/layout/ProcessBox";
import Requirement from "../assets/images/Requirement-Analysis.webp";
import Planning from "../assets/images/Planning-Design.webp";
import Development from "../assets/images/Development.webp";
import Testing from "../assets/images/Testing.webp";
import Deployment from "../assets/images/Deployment.webp";
import Maintenance from "../assets/images/Maintenance-Support.webp";


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

    // <section className="py-[90px] lg:py-16">
    //   <div className="container">
    //     <div className="flex flex-col justify-center items-center">
    //       <div>
    //         <HadingTitle
    //           className="flex justify-center items-center"
    //           text="Process"
    //         />
    //         <h2 className="blockSubTitle pSubTitle">
    //           Our Software Development Process
    //         </h2>
    //       </div>

    //       <div className="relative">
    //         <div className="grid grid-cols-3 gap-12">
    //           {ProcessData.map((item, index) => {
    //             let customClass = "";

    //             // Apply specific classes based on the index
    //             if(index === 0 || index === 1 ) {
    //               customClass = "rDirection";
    //             }
    //             else if (index === 2) {
    //               customClass = "bDirection"; // Index 3 (array index 2) gets "bottom" class
    //             } else if (index === 4 || index === 5) {
    //               customClass = "lDirection"; // Index 4 and 5 (array index 3 and 4) get "right" class
    //             } else if (index === 3) {
    //               customClass = "sDirection"; // Index 6 (array index 5) gets "left" class
    //             }

    //             return (
    //               <div key={index} className={`process-box ${customClass}`}>
    //                 <div className="content">
    //                   <div className="flex items-center justify-start gap-5 mb-4">
    //                     <Image
    //                     src={item.src}
    //                       alt={item.alt}
    //                       className="w-10 h-10"
    //                     />
    //                     <h3 className="title">{item.title}</h3>
    //                   </div>
    //                   <p className="text me-0">{item.pra}</p>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ProcessSection;
