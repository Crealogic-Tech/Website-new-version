import React from "react";
import HadingTitle from "../../Components/HadingTitle";
import Banking from "../../assets/images/Banking-Finance.svg";
import Healthcare from "../../assets/images/Healthcare-Medicine.svg";
import Travel from "../../assets/images/Travel-Tourism.svg";
import Real from "../../assets/images/Real-Estate.svg";
import Restaurants from "../../assets/images/Restaurants.svg";
import Elearning from "../../assets/images/E-learning.svg";
import Ecommerce from "../../assets/images/e-commerce.svg";
import Logistics from "../../assets/images/Logistics-Procurement.svg";
import Social from "../../assets/images/Social Network.svg";
import SaaS from "../../assets/images/SaaS.svg";
import Startup from "../../assets/images/Startup.svg";
import Advertising from "../../assets/images/Advertising.svg";
import Retail from "../../assets/images/Retail-store.svg";
import Media from "../../assets/images/Media-Entertainment.svg";
import Gaming from "../../assets/images/Gaming.svg";

const industries = [
  { name: "Banking & Finance", icon: Banking },
  { name: "Healthcare & Medicine", icon: Healthcare },
  { name: "Travel & Tourism", icon: Travel },
  { name: "Real Estate", icon: Real },
  { name: "Restaurants", icon: Restaurants },
  { name: "E-learning", icon: Elearning },
  { name: "E-commerce", icon: Ecommerce },
  { name: "Logistics & Procurement", icon: Logistics },
  { name: "Social Network", icon: Social },
  { name: "SaaS", icon: SaaS },
  { name: "Startup", icon: Startup },
  { name: "Advertising", icon: Advertising },
  { name: "Retail store", icon: Retail },
  { name: "Media & Entertainment", icon: Media },
  { name: "Gaming", icon: Gaming },
];

const sortedIndustries = industries.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const IndustrySection = () => {
  return (
    <section className="py-[90px] lg:pb-16 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <HadingTitle className="flex justify-center items-center" text="Business Solutions" />
          <h2 className="blockSubTitle pSubTitle">Industries We Serve</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
            {sortedIndustries.map((industry, index) => (
              <div
                key={index}
                className="group bg-[#f8fbfc] p-4 rounded-lg flex flex-col items-center text-center transition duration-300"
              >
                <div className="bg-white rounded-full p-4 mb-4 shadow-4xxl transition duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:shadow-[#c06c84]">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    width={60}
                    height={60}
                    className="h-10 w-10 group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-lg transition duration-300 group-hover:text-[#c06c84]">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
