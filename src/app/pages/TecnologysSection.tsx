"use client";
import React, { useState } from "react";
import HadingTitle from "../Components/HadingTitle";
import Image from "next/image";

function TecnologysSection() {
  const [activeTab, setActiveTab] = useState<
    | "frontend"
    | "backend"
    | "mobile"
    | "devOps & Cloud"
    | "Third Party Integration"
  >("frontend");
  const technologies: Record<
    | "frontend"
    | "backend"
    | "mobile"
    | "devOps & Cloud"
    | "Third Party Integration",
    { name: string; icon: string }[]
  > = {
    frontend: [
      { name: "Angular JS", icon: "/angular.png" },
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "React JS", icon: "/react.png" },
      { name: "Next JS", icon: "/next.png" },
      { name: "Vue JS", icon: "/vue.png" },
      { name: "Tailwind CSS", icon: "/tailwind.png" },
      { name: "Bootstrap", icon: "/bootstrap.png" },
      { name: "HTML5", icon: "/html5.png" },
    ],
    backend: [
      { name: "Node.js", icon: "/node.png" },
      { name: "Express.js", icon: "/express.png" },
    ],
    mobile: [
      { name: "Flutter", icon: "/flutter.png" },
      { name: "React Native", icon: "/reactnative.png" },
    ],
    "devOps & Cloud": [
      { name: "AWS", icon: "/aws.png" },
      { name: "Docker", icon: "/docker.png" },
    ],
    "Third Party Integration": [
      { name: "Stripe", icon: "/stripe.png" },
      { name: "PayPal", icon: "/paypal.png" },
    ],
  };
  return (
    <section className="py-[90px] lg:pb-16 lg:pt-32 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Our expertise on"
            />
            <h2 className="blockSubTitle pSubTitle">
              Popular Website & Mobile App Technologies
            </h2>
          </div>
          <div className="relative w-full">
            <ul className="tab-list flex justify-center mb-6">
              {Object.keys(technologies).map((tab) => (
                <li
                  key={tab}
                  className={`tab-title py-2 px-4 rounded ${
                    activeTab === tab
                      ? "border-[#0a6689] bg-[#ffffff] text-[#0a6689]"
                      : "border-transparent"
                  }`}
                  onClick={() =>
                    setActiveTab(
                      tab as
                        | "frontend"
                        | "backend"
                        | "mobile"
                        | "devOps & Cloud"
                        | "Third Party Integration"
                    )
                  }
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>

            <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 border-t border-[#eee]  p-10 text-left">
              {technologies[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  className="space-x-7  tab-boxs text-center hover:bg-[#fbfbfb] p-4 rounded  flex flex-col"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={100} // Provide explicit width
                    height={100} // Provide explicit height
                    className="h-24 mx-auto mb-2"
                  />
                  <h4 className="font-bold text-lg py-6">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TecnologysSection;
