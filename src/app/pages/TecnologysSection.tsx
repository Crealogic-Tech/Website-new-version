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
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "React JS", icon: "/react.png" },
      { name: "Next JS", icon: "/next.png" },
      { name: "Vue JS", icon: "/vue.png" },
      { name: "Electron", icon: "/Electron.png" },
      { name: "Tailwind CSS", icon: "/tailwind.png" },
      { name: "Bootstrap", icon: "/bootstrap.png" },
      { name: "HTML5", icon: "/html5.png" },
    ],
    backend: [
      { name: "Node js", icon: "/node.png" },
      { name: "Next JS", icon: "/next.png" },
      { name: "Python", icon: "/python.png" },
      { name: "Mongodb", icon: "/mongodb.png" },
      { name: "MySQL", icon: "/mysql.png" },
      { name: "Solidity", icon: "/solidity.png" },
    ],
    mobile: [
      { name: "Ios", icon: "/ios.png" },
      { name: "Android", icon: "/android.png" },
      { name: "React Native", icon: "/reactnative.png" },
      { name: "Flutter", icon: "/flutter.png" },
      { name: "Firebase", icon: "/firebase.png" },
      { name: "Swift", icon: "/swift.png" },
      { name: "Kotlin", icon: "/kotlin.png" },
      { name: "JavaScript", icon: "/javascript.png" },
    ],
    "devOps & Cloud": [
      { name: "AWS", icon: "/aws.png" },
      { name: "Google Clound", icon: "/google.png" },
      { name: "Jenkins", icon: "/jenkis.png" },
      { name: "Docker", icon: "/docker.png" },
      { name: "Kubernetes", icon: "/kubernetes.png" },
      { name: "GitLab", icon: "/gitlab.png" },
      { name: "Terraform", icon: "/terraform.png" },
    ],
    "Third Party Integration": [
      { name: "PayPal", icon: "/paypal.png" },
      { name: "Google", icon: "/google.png" },
      { name: "Cloudflare", icon: "/cloudflare.png" },
      { name: "Twilio", icon: "/twilio.png" },
      { name: "Binance Pay", icon: "/binance.png" },
      { name: "CoinGecko", icon: "/coingecko.png" },
      { name: "MataMask", icon: "/matamask.png" },
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

            <div className=" flex flex-wrap justify-center items-center gap-4 border-t border-[#eee]  p-10 text-left">
              {technologies[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  className="space-x-6  tab-boxs text-center hover:bg-[#fbfbfb] p-4 rounded  flex flex-col"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={175} // Provide explicit width
                    height={200} // Provide explicit height
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
