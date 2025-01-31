"use client";
import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Image from "next/image";
// import Banking from "@/src/app/assets/images/Banking-Finance.svg";
// import Healthcare from "@/src/app/assets/images/Healthcare-Medicine.svg";
// import Travel from "@/src/app/assets/images/Travel-Tourism.svg";
// import Real from "@/src/app/assets/images/Real-Estate.svg";
// import Restaurants from "@/src/app/assets/images/Restaurants.svg";
// import Elearning from "@/src/app/assets/images/E-learning.svg";
// import Ecommerce from "@/src/app/assets/images/e-commerce.svg";
// import Logistics from "@/src/app/assets/images/Logistics-Procurement.svg";
// import Social from "@/src/app/assets/images/Social Network.svg";
// import SaaS from "@/src/app/assets/images/SaaS.svg";
// import Startup from "@/src/app/assets/images/Startup.svg";
// import Advertising from "@/src/app/assets/images/Advertising.svg";
// import Retail from "@/src/app/assets/images/Retail-store.svg";
// import Media from "@/src/app/assets/images/Media-Entertainment.svg";
// import Gaming from "@/src/app/assets/images/Gaming.svg";


const industries = [
  { name: "Banking & Finance", icon: "/assets/images/Banking-Finance.svg" },
  { name: "Healthcare & Medicine", icon: "/assets/images/Healthcare-Medicine.svg" },
  { name: "Travel & Tourism", icon: "/assets/images/Travel-Tourism.svg" },
  { name: "Real Estate", icon: "/assets/images/Real-Estate.svg" },
  { name: "Restaurants", icon: "/assets/images/Restaurants.svg" },
  { name: "E-learning", icon: "/assets/images/E-learning.svg" },
  { name: "E-commerce", icon: "/assets/images/e-commerce.svg" },
  { name: "Logistics & Procurement", icon: "/assets/images/Logistics-Procurement.svg" },
  { name: "Social Network", icon: "/assets/images/Social Network.svg" },
  { name: "SaaS", icon: "/assets/images/SaaS.svg" },
  { name: "Startup", icon: "/assets/images/Startup.svg" },
  { name: "Advertising", icon: "/assets/images/Advertising.svg" },
  { name: "Retail store", icon: "/assets/images/Retail-store.svg" },
  { name: "Media & Entertainment", icon: "/assets/images/Media-Entertainment.svg" },
  { name: "Gaming", icon: "/assets/images/Gaming.svg" },
];


const sortedIndustries = industries.sort((a, b) =>
  a.name.localeCompare(b.name)
);

function InderstreSection() {
  return (
    <section className="py-[90px] lg:pb-16 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Business Solutions"
            />
            <h2 className="blockSubTitle pSubTitle">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sortedIndustries.map((industry, index) => (
              <div
                key={index}
                className="group bg-[#f8fbfc] group  p-4 rounded-lg flex flex-col items-center text-center transition duration-300"
              >
                <div className="bg-white rounded-full group-hover:shadow-lg group-hover:scale-105 p-4 mb-4 shadow-4xxl group-hover:shadow-[#c06c84]  transition duration-300">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={60} 
                    height={60} 
                    className="h-10 w-10 group-hover:scale-105  transition duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-lg group-hover:text-[#c06c84] transition duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InderstreSection;
