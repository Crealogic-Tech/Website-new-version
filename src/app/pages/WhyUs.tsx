import React from "react";
import HadingTitle from "../Components/HadingTitle";

function WhyUs() {
  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <HadingTitle
            className="flex justify-center items-center"
            text="Why Us?"
          />
          <h2 className="blockSubTitle pSubTitle">Why choose Crealogic?</h2>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
