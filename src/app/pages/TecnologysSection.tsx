"use client";
import React, { useState } from "react";
import HadingTitle from "../Components/HadingTitle";
import Image, { StaticImageData } from "next/image";
import TypeScript from "@/src/app/assets/images/typescript-tech.webp";
import ReactIcon from "@/src/app/assets/images/react-logo.webp";
import Next from "@/src/app/assets/images/nextj.webp";
import Vue from "@/src/app/assets/images/vuejs.webp";
import Electron from "@/src/app/assets/images/electron.webp";
import Tailwind from "@/src/app/assets/images/tailwindCSS.webp";
import Bootstrap from "@/src/app/assets/images/bootstrap-tech.webp";
import HTML5 from "@/src/app/assets/images/HTML5.webp";
import Node from "@/src/app/assets/images/nodejs.webp";
import Mongodb from "@/src/app/assets/images/mongodb-tech.webp";
import MySQL from "@/src/app/assets/images/mysql.webp";
import Solidity from "@/src/app/assets/images/solidity.webp";
import Ios from "@/src/app/assets/images/apple.webp";
import Android from "@/src/app/assets/images/android-1.webp";
import Flutter from "@/src/app/assets/images/Flutter.webp";
import Firebase from "@/src/app/assets/images/Firebase.webp";
import Swift from "@/src/app/assets/images/swift.webp";
import Kotlin from "@/src/app/assets/images/kotlin.webp";
import JavaScript from "@/src/app/assets/images/java-script.webp";
import AWS from "@/src/app/assets/images/amazon-web-services.webp";
import GoogleCloud from "@/src/app/assets/images/google-cloud.webp";
import Jenkins from "@/src/app/assets/images/jenkins.webp";
import Docker from "@/src/app/assets/images/docker.webp";
import Kubernetes from "@/src/app/assets/images/kubernetes.webp";
import GitLab from "@/src/app/assets/images/gitlab.webp";
import Terraform from "@/src/app/assets/images/terraform.webp";
import PayPal from "@/src/app/assets/images/paypal.webp";
import Google from "@/src/app/assets/images/captcha.webp";
import Cloudflare from "@/src/app/assets/images/cloudflare.webp";
import Twilio from "@/src/app/assets/images/twilio.webp";
import Binance from "@/src/app/assets/images/binance.webp";
import MataMask from "@/src/app/assets/images/metamask-icon.webp";
import Power from "@/src/app/assets/images/power-bi.webp";
import GoogleAna from "@/src/app/assets/images/google-analytics.webp";
import Tableau from "@/src/app/assets/images/tableau-software.webp";

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
      { name: "TypeScript", icon: TypeScript },
      { name: "React JS", icon: ReactIcon },
      { name: "Next JS", icon: Next },
      { name: "Vue JS", icon: Vue },
      { name: "Electron", icon: Electron },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "HTML5", icon: HTML5 },
    ],
    "backend & Data": [
      { name: "Node js", icon: Node },
      { name: "Mongodb", icon: Mongodb },
      { name: "MySQL", icon: MySQL },
      { name: "Solidity", icon: Solidity },
      { name: "Power BI", icon: Power },
      { name: "Tableau", icon: Tableau },
    ],
    mobile: [
      { name: "Ios", icon: Ios },
      { name: "Android", icon: Android },
      { name: "React Native", icon: ReactIcon },
      { name: "Flutter", icon: Flutter },
      { name: "Firebase", icon: Firebase },
      { name: "Swift", icon: Swift },
      { name: "Kotlin", icon: Kotlin },
      { name: "JavaScript", icon: JavaScript },
    ],
    "devOps & Cloud": [
      { name: "AWS", icon: AWS },
      { name: "Google Clound", icon: GoogleCloud },
      { name: "Jenkins", icon: Jenkins },
      { name: "Docker", icon: Docker },
      { name: "Kubernetes", icon: Kubernetes },
      { name: "GitLab", icon: GitLab },
      { name: "Terraform", icon: Terraform },
    ],
    "Third Party Integration": [
      { name: "PayPal", icon: PayPal },
      { name: "Google", icon: Google },
      { name: "Cloudflare", icon: Cloudflare },
      { name: "Twilio", icon: Twilio },
      { name: "Binance Pay", icon: Binance },
      { name: "Google analytics", icon: GoogleAna },
      { name: "MataMask", icon: MataMask },
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
