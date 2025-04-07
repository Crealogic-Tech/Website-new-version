import React, { useState } from "react";
import HadingTitle from "../../Components/HadingTitle";
import TypeScript from "../../assets/images/typescript-tech.svg";
import ReactIcon from "../../assets/images/react-logo.svg";
import Next from "../../assets/images/nextj.svg";
import Vue from "../../assets/images/vuejs.svg";
import Electron from "../../assets/images/electron.svg";
import Tailwind from "../../assets/images/tailwindCSS.svg";
import Bootstrap from "../../assets/images/bootstrap-tech.svg";
import HTML5 from "../../assets/images/HTML5.svg";
import Node from "../../assets/images/nodejs.svg";
import Mongodb from "../../assets/images/mongodb-tech.svg";
import MySQL from "../../assets/images/mysql.svg";
import Solidity from "../../assets/images/solidity.svg";
import Ios from "../../assets/images/apple.svg";
import Android from "../../assets/images/android-1.svg";
import Flutter from "../../assets/images/Flutter.svg";
import Firebase from "../../assets/images/Firebase.svg";
import Swift from "../../assets/images/swift.svg";
import Kotlin from "../../assets/images/kotlin.svg";
import JavaScript from "../../assets/images/java-script.svg";
import AWS from "../../assets/images/amazon-web-services.svg";
import GoogleCloud from "../../assets/images/google-cloud.svg";
import Jenkins from "../../assets/images/jenkins.svg";
import Docker from "../../assets/images/docker.svg";
import Kubernetes from "../../assets/images/kubernetes.svg";
import GitLab from "../../assets/images/gitlab.svg";
import Terraform from "../../assets/images/terraform.svg";
import PayPal from "../../assets/images/paypal.svg";
import Google from "../../assets/images/captcha.svg";
import Cloudflare from "../../assets/images/cloudflare.svg";
import Twilio from "../../assets/images/twilio.svg";
import Binance from "../../assets/images/binance.svg";
import MetaMask from "../../assets/images/metamask-icon.svg";
import Power from "../../assets/images/power-bi.svg";
import GoogleAna from "../../assets/images/google-analytics.svg";
import Tableau from "../../assets/images/tableau-software.svg";

const TecnologysSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
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
      { name: "Node.js", icon: Node },
      { name: "MongoDB", icon: Mongodb },
      { name: "MySQL", icon: MySQL },
      { name: "Solidity", icon: Solidity },
      { name: "Power BI", icon: Power },
      { name: "Tableau", icon: Tableau },
    ],
    mobile: [
      { name: "iOS", icon: Ios },
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
      { name: "Google Cloud", icon: GoogleCloud },
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
      { name: "Google Analytics", icon: GoogleAna },
      { name: "MetaMask", icon: MetaMask },
    ],
  };

  return (
    <section className="py-24 lg:pb-16 lg:pt-32 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <HadingTitle text="Our expertise on" />
          <h2 className="blockSubTitle pSubTitle">
            Popular Website & Mobile App Technologies
          </h2>

          <div className="relative w-full">
            {/* Tabs */}
            <ul className="tab-list flex justify-center mb-6">
              {Object.keys(technologies).map((tab) => (
                <li
                  key={tab}
                  className={`tab-title py-2 px-4 rounded cursor-pointer ${
                    activeTab === tab
                      ? "border-[#0a6689] bg-[#ffffff] text-[#0a6689]"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>

            {/* Tech Icons */}
            <div className="flex flex-wrap justify-center items-center gap-4 border-t border-[#eee] p-5 md:p-10">
              {technologies[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  className="w-28 md:w-56 text-center hover:bg-[#fbfbfb] p-4 rounded flex flex-col"
                >
                  <img src={tech.icon} alt={tech.name} width={60} height={60} className="mx-auto mb-2" />
                  <h4 className="font-bold text-lg py-6">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologysSection;
