import React from "react";
import { useNavigate } from "react-router-dom"; // For React Router
import Button from "../../Components/buttons/Button";

function Contactbook() {
  
  const navigate = useNavigate();
  
  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex justify-center items-center w-full flex-col border border-[#c06c84] rounded-xl  p-8 lg:p-11 shadow-3xl  shadow-[#c06c84] inset">
          <h3 className="text-2xl lg:text-3xl text-center  font-semibold tracking-wide mb-8">
            Empowering Businesses with Custom Software Solutions
          </h3>
          <p className="text-sm lg:text-lg me-0 !text-center">
            Let’s validate, scale, and innovate your idea and build scalable,
            impactful software together
          </p>
          <Button text="Book Your Consultation" onClick={() => navigate("/contact")} />
        </div>
      </div>
    </section>
  );
}

export default Contactbook;

