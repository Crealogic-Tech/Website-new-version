import React from "react";
import Button from "../Components/layout/Button";
import Link from "next/link";

function Contactbook() {
  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex justify-center items-center w-full flex-col border border-[#c06c84] rounded-xl  p-8 lg:p-11 shadow-3xl  shadow-[#c06c84] ">
          <h3 className="text-2xl lg:text-3xl text-center  font-semibold tracking-wide mb-8">
            Empowering Businesses with Custom Software Solutions
          </h3>
          <p className="text-sm lg:text-lg me-0 !text-center">
            Let’s validate, scale, and innovate your idea and build scalable,
            impactful software together
          </p>
          <Link href="/contact">
            <Button text="Book Your Consultation" className="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contactbook;
