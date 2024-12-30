import React from "react";
import Button from "../Components/layout/Button";

function Contactbook() {
  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex justify-center items-center w-full flex-col border border-[#c06c84] rounded-xl p-11 shadow-3xl  shadow-[#c06c84] ">
          <h3 className="text-3xl font-semibold tracking-wide mb-8">
            Empowering Businesses with Custom Software Solutions
          </h3>
          <p className="text-lg me-0">
          Let’s validate, scale, and innovate your idea and build scalable, impactful
          software together
          </p>
          <Button text="Book Your Consultation" className=""/>
        </div>
      </div>
    </section>
  );
}

export default Contactbook;
