"use client";
import React, { useState } from "react";
import HadingTitle from "../Components/HadingTitle";
import '@/app/globals.css'
import Image, { StaticImageData } from "next/image";
// import TypeScript from "@/src/app/assets/images/typescript-tech.svg";
// import ReactIcon from "@/src/app/assets/images/react-logo.svg";
// import Next from "@/src/app/assets/images/nextj.svg";
// import Vue from "@/src/app/assets/images/vuejs.svg";
// import Electron from "@/src/app/assets/images/electron.svg";
// import Tailwind from "@/src/app/assets/images/tailwindCSS.svg";
// import Bootstrap from "@/src/app/assets/images/bootstrap-tech.svg";
// import HTML5 from "@/src/app/assets/images/HTML5.svg";
// import Node from "@/src/app/assets/images/nodejs.svg";
// import Mongodb from "@/src/app/assets/images/mongodb-tech.svg";
// import MySQL from "@/src/app/assets/images/mysql.svg";
// import Solidity from "@/src/app/assets/images/solidity.svg";
// import Power from "@/src/app/assets/images/power-bi.svg";
// import Tableau from "@/src/app/assets/images/tableau-software.svg";
// import Ios from "@/src/app/assets/images/apple.svg";
// import Android from "@/src/app/assets/images/android-1.svg";
// import Flutter from "@/src/app/assets/images/Flutter.svg";
// import Firebase from "@/src/app/assets/images/Firebase.svg";
// import Swift from "@/src/app/assets/images/swift.svg";
// import Kotlin from "@/src/app/assets/images/kotlin.svg";
// import JavaScript from "@/src/app/assets/images/java-script.svg";
// import AWS from "@/src/app/assets/images/amazon-web-services.svg";
// import GoogleCloud from "@/src/app/assets/images/google-cloud.svg";
// import Jenkins from "@/src/app/assets/images/jenkins.svg";
// import Docker from "@/src/app/assets/images/docker.svg";
// import Kubernetes from "@/src/app/assets/images/kubernetes.svg";
// import GitLab from "@/src/app/assets/images/gitlab.svg";
// import Terraform from "@/src/app/assets/images/terraform.svg";
// import PayPal from "@/src/app/assets/images/paypal.svg";
// import Google from "@/src/app/assets/images/captcha.svg";
// import Cloudflare from "@/src/app/assets/images/cloudflare.svg";
// import Twilio from "@/src/app/assets/images/twilio.svg";
// import Binance from "@/src/app/assets/images/binance.svg";
// import GoogleAna from "@/src/app/assets/images/google-analytics.svg";
// import MataMask from "@/src/app/assets/images/metamask-icon.svg";

function TecnologysSection() {
  const [activeTab, setActiveTab] = useState<
    | "frontend"
    | "backend & Data"
    | "mobile"
    | "devOps & Cloud"
    | "Third Party Integration"
  >("frontend");
  const technologies: Record<
    | "frontend"
    | "backend & Data"
    | "mobile"
    | "devOps & Cloud"
    | "Third Party Integration",
    { name: string; icon: string | StaticImageData }[]
  > = {
    frontend: [
      { name: "TypeScript", icon: "/assets/images/typescript-tech.svg" },
      { name: "React JS", icon: "/assets/images/react-logo.svg" },
      { name: "Next JS", icon: "/assets/images/nextj.svg" },
      { name: "Vue JS", icon: "/assets/images/vuejs.svg" },
      { name: "Electron", icon: "/assets/images/electron.svg" },
      { name: "Tailwind CSS", icon: "/assets/images/tailwindCSS.svg" },
      { name: "Bootstrap", icon: "/assets/images/bootstrap-tech.svg" },
      { name: "HTML5", icon: "/assets/images/HTML5.svg" },
    ],
    "backend & Data": [
      { name: "Node js", icon: "/assets/images/nodejs.svg" },
      { name: "Mongodb", icon: "/assets/images/mongodb-tech.svg" },
      { name: "MySQL", icon: "/assets/images/mysql.svg" },
      { name: "Solidity", icon: "/assets/images/solidity.sv" },
      { name: "Power BI", icon: "/assets/images/power-bi.svg" },
      { name: "Tableau", icon: "/assets/images/tableau-software.svg" },
    ],
    mobile: [
      { name: "Ios", icon: "/assets/images/apple.svg" },
      { name: "Android", icon: "/assets/images/android-1.svg" },
      { name: "React Native", icon: "/assets/images/react-logo.svg" },
      { name: "Flutter", icon: "/assets/images/Flutter.svg" },
      { name: "Firebase", icon: "/assets/images/Firebase.svg" },
      { name: "Swift", icon: "/assets/images/swift.svg" },
      { name: "Kotlin", icon: "/assets/images/kotlin.svg" },
      { name: "JavaScript", icon: "/assets/images/java-script.svg" },
    ],
    "devOps & Cloud": [
      { name: "AWS", icon:"/assets/images/amazon-web-services.svg" },
      { name: "Google Clound", icon:"/assets/images/google-cloud.svg" },
      { name: "Jenkins", icon:"/assets/images/jenkins.svg" },
      { name: "Docker", icon:"/assets/images/docker.svg" },
      { name: "Kubernetes", icon:"/assets/images/kubernetes.svg" },
      { name: "GitLab", icon:"/assets/images/gitlab.svg" },
      { name: "Terraform", icon:"/assets/images/terraform.svg" },
    ],
    "Third Party Integration": [
      { name: "PayPal", icon:"/assets/images/paypal.svg" },
      { name: "Google", icon:"/assets/images/captcha.svg" },
      { name: "Cloudflare", icon:"/assets/images/cloudflare.svg" },
      { name: "Twilio", icon:"/assets/images/twilio.svg" },
      { name: "Binance Pay", icon:"/assets/images/binance.svg" },
      { name: "Google analytics", icon:"/assets/images/google-analytics.svg" },
      { name: "MataMask", icon:"/assets/images/metamask-icon.svg" },
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
                        | "backend & Data"
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

            <div className=" flex flex-wrap justify-center items-center gap-4 border-t border-[#eee] p-5 mb-0 md:mb-[1.75em] md:p-10 text-left">
              {technologies[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  className="w-28 md:w-56 tab-boxs text-center hover:bg-[#fbfbfb] p-4 rounded  flex flex-col"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={60} 
                    height={60} 
                    className=" mx-auto mb-2"
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
