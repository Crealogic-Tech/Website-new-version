import React from "react";
import HadingTitle from "../Components/HadingTitle";

function ProcessSection() {
  return (
    <section className="py-[90px] lg:py-16">
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
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
