"use client";
import React, { useState } from "react";
import HadingTitle from "../Components/HadingTitle";
import Image, { StaticImageData } from "next/image";
import TypeScript from '@/src/app/assets/images/typescript-tech.png'
import ReactIcon from '@/src/app/assets/images/react-logo.png'
import Next from '@/src/app/assets/images/nextj.png'
import Vue from '@/src/app/assets/images/vuejs.png'
import Electron from '@/src/app/assets/images/electron.png'
import Tailwind from '@/src/app/assets/images/tailwindCSS.png'
import Bootstrap from '@/src/app/assets/images/bootstrap-tech.png'
import HTML5 from '@/src/app/assets/images/HTML5.png'
import Node from '@/src/app/assets/images/nodejs.png'
import Nest from '@/src/app/assets/images/nestjs.png'
import Python from '@/src/app/assets/images/python-tech.png'
import Mongodb from '@/src/app/assets/images/mongodb-tech.png'
import MySQL from '@/src/app/assets/images/mysql.png'
import Solidity from '@/src/app/assets/images/solidity.png'
import Ios from '@/src/app/assets/images/apple.png'
import Android from '@/src/app/assets/images/android-1.png'
import Flutter from '@/src/app/assets/images/Flutter.png'
import Firebase from '@/src/app/assets/images/Firebase.png'
import Swift from '@/src/app/assets/images/swift.png'
import Kotlin from '@/src/app/assets/images/kotlin.png'
import JavaScript from '@/src/app/assets/images/java-script.png'
import AWS from '@/src/app/assets/images/amazon-web-services.png'
import GoogleCloud from '@/src/app/assets/images/google-cloud.png'
import Jenkins from '@/src/app/assets/images/jenkins.png';
import Docker from '@/src/app/assets/images/docker.png'
import Kubernetes from '@/src/app/assets/images/kubernetes.png'
import GitLab from '@/src/app/assets/images/gitlab.png'
import Terraform from '@/src/app/assets/images/terraform.png'
import PayPal from '@/src/app/assets/images/paypal.png'
import Google from '@/src/app/assets/images/captcha.png'
import Cloudflare from '@/src/app/assets/images/cloudflare.png'
import Twilio from '@/src/app/assets/images/twilio.png'
import Binance from '@/src/app/assets/images/binance.png'
import CoinGecko from '@/src/app/assets/images/CoinGecko_logo-1.png'
import MataMask from '@/src/app/assets/images/metamask-icon.png'

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
    { name: string; icon: string | StaticImageData}[]
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
    backend: [
      { name: "Node js", icon: Node },
      { name: "Nest JS", icon: Nest },
      { name: "Python", icon: Python },
      { name: "Mongodb", icon: Mongodb },
      { name: "MySQL", icon: MySQL },
      { name: "Solidity", icon: Solidity },
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
      { name: "CoinGecko", icon: CoinGecko },
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
                  className="w-56  tab-boxs text-center hover:bg-[#fbfbfb] p-4 rounded  flex flex-col"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={60} // Provide explicit width
                    height={60} // Provide explicit height
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
