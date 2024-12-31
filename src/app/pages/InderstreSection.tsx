"use client";
import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Image from "next/image";

const industries = [
  { name: "Banking & Finance", icon: "/icons/banking.png" },
  { name: "Healthcare & Medicine", icon: "/icons/healthcare.png" },
  { name: "Travel & Tourism", icon: "/icons/travel.png" },
  { name: "Real Estate", icon: "/icons/realestate.png" },
  { name: "Restaurants", icon: "/icons/restaurants.png" },
  { name: "E-learning", icon: "/icons/elearning.png" },
  { name: "E-commerce", icon: "/icons/ecommerce.png" },
  { name: "Logistics & Procurement", icon: "/icons/logistics.png" },
  { name: "Social Network", icon: "/icons/social.png" },
  { name: "SaaS", icon: "/icons/saas.png" },
  { name: "Startup", icon: "/icons/startup.png" },
  { name: "Advertising", icon: "/icons/advertising.png" },
  { name: "Retail store", icon: "/icons/retail.png" },
  { name: "Media & Entertainment", icon: "/icons/media.png" },
  { name: "Gaming", icon: "/icons/gaming.png" },
];

// Sorting industries alphabetically
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
                className="group bg-[#f8fbfc] hover:shadow-lg p-4 rounded-lg flex flex-col items-center text-center transition duration-300"
              >
                <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={100} // Provide explicit width
                    height={100} // Provide explicit height
                    className="h-10 w-10"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-lg group-hover:text-blue-500">
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
