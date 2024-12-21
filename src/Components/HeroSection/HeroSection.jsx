import React from "react";
import Button from "../../Components/BurgerBTN/Button";
import Divider from "../Divider/Divider";

const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-center items-center text-[100px] h-[89vh] ">
        <div className="container-xxl">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h5 className="hidden md:block text-[16px] text-center !m-5">
                  Web & Mobile App Development Company Crealogic
                </h5>
              </div>
              <div className="pb-8">
                <h1 className="w-5/6 lg:w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold ">
                  Your Logical Choice Where Bold Ideas Meet Logical Execution
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-6 md:w-5/6 lg:3/5">
                <p className=" text-lg md:text-xl text-center text-[#7b7583]">
                  Crealogic is a dynamic force in Web and Mobile App
                  Development. We drive the digital evolution of startups,
                  established brands, and small to medium-sized businesses. We
                  empower our clients to reach their goals by seamlessly
                  blending cutting-edge technology with strategic & logical
                  innovation and shaping a future where possibilities are
                  limitless.
                </p>

                <Button>Let's work together</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
