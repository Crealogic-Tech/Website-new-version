import React from "react";
// import Toggle from "../../Components/Toggle/Toggle";
import HomeLeftHorizontalDivider from "../../Components/Divider/HeroLeftHorizontalDivider";
import HomeRightHorizontalDivider from "../../Components/Divider/HeroRightHorizontalDivider";

const Home = () => {
  return (
    <div className="flex justify-center items-center text-[100px] py-[7px]">
      <div className="container">
        <div className="flex justify-between h-[90vh] items-center">
          
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h5 className="text-[16px] text-center">
                Web & Mobile App Development Company Crealogic
              </h5>
            </div>
            <div className="pb-8 w-3/4">
              <h1 className="text-7xl text-center">
                Your Logical Choice Where Bold Ideas Meet Logical Execution
              </h1>
            </div>
            <div className="w-2/4">
              <p className=" text-center text-[#7b7583]">
                Crealogic is a dynamic force in Web and Mobile App Development.
                We drive the digital evolution of startups, established brands,
                and small to medium-sized businesses. We empower our clients to
                reach their goals by seamlessly blending cutting-edge technology
                with strategic & logical innovation and shaping a future where
                possibilities are limitless.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
