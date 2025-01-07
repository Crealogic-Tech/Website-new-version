"use client";
import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Image from "next/image";
import Banking from "@/src/app/assets/images/Banking-Finance.webp";
import Healthcare from "@/src/app/assets/images/Healthcare-Medicine.webp";
import Travel from "@/src/app/assets/images/Travel-Tourism.webp";
import Real from "@/src/app/assets/images/Real-Estate.webp";
import Restaurants from "@/src/app/assets/images/Restaurants.webp";
import Elearning from "@/src/app/assets/images/E-learning.webp";
import Ecommerce from "@/src/app/assets/images/e-commerce.webp";
import Logistics from "@/src/app/assets/images/Logistics-Procurement.webp";
import Social from "@/src/app/assets/images/Social Network.webp";
import SaaS from "@/src/app/assets/images/SaaS.webp";
import Startup from "@/src/app/assets/images/Startup.webp";
import Advertising from "@/src/app/assets/images/Advertising.webp";
import Retail from "@/src/app/assets/images/Retail-store.webp";
import Media from "@/src/app/assets/images/Media-Entertainment.webp";
import Gaming from "@/src/app/assets/images/Gaming.webp";


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
