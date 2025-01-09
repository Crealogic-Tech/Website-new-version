"use client";
import React from "react";
import HadingTitle from "../Components/HadingTitle";
import ServicesBox from "../Components/layout/ServicesBox";
import WebDev from "../assets/images/web-dev.svg";
import MobileDev from "../assets/images/mobile-development.svg";
import SoftDev from "../assets/images/software-development.svg";
import CustomDev from "../assets/images/optimization.svg";
import BlockDev from "../assets/images/blockchain.svg";
import DevOps from "../assets/images/devops.svg";
import Data from "../assets/images/administration.svg";
import Marketing from "../assets/images/global-services.svg";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  const SrvicesData = [
    {
      src: WebDev,
      alt: "Web Development",
      title: "Web Development",
      pra: "At Crealogic, we specialize in building responsive and quality websites that leave a lasting impression. From custom eCommerce platforms to informative corporate portals, our web development services ensure your online presence drives results. We focus on creating engaging, user-centric designs that help businesses establish a solid online identity and convert visitors into loyal customers.",
    },
    {
      src: MobileDev,
      alt: "Mobile App Development",
      title: "Mobile App Development",
      pra: "Whether you need an Android, iOS, or cross-platform solution, we've got you covered. Our mobile app development services prioritize user-friendliness, seamless functionality, and optimal performance to deliver exceptional experiences. Partner with us for your next mobile app development project and turn your idea into reality.",
    },
    {
      src: CustomDev,
      alt: "Custom Software Development",
      title: "Custom Software Development",
      pra: "At Crealogic, we specialize in custom software development that ts your specic challenges, business model, and goals. We deliver secure, scalable software compatible with all major operating systems, devices, and browsers, ensuring your solution is built to grow with your business. Let's create a custom solution that works for you.",
    },
    {
      src: SoftDev,
      alt: "Web App Development",
      title: "Web App Development",
      pra: "Transform your thoughts into high-impact web applications with Crealogic. We develop responsive, scalable, secure web apps tailored to your business goals. We are using advanced frameworks like React, Angular, and Node.js. Our team delivers seamless, engaging applications that enhance user experience and drive growth.",
    },
    {
      src: BlockDev,
      alt: "Blockchain Development",
      title: "Blockchain Development",
      pra: "Unlock the power of blockchain with a secure, transparent, and efcient solution from us to empower your business. Our blockchain experts help to create safe, decentralized, and scalable applications, from smart contracts to complete blockchain ecosystems. We designed to streamline operations and build trust. Transform your operations today with innovative blockchain technology.",
    },
    {
      src: DevOps,
      alt: "DevOps Services",
      title: "DevOps Services",
      pra: "At Crealogic, we deliver seamless DevOps solutions that bridge the gap between development and operations. By leveraging automation, continuous integration, and deployment strategies, we ensure faster development cycles, scalable infrastructure, and minimal downtime. Our services focus on optimizing collaboration, streamlining workflows, and enabling your team to deliver robust, high-performing applications with efficiency and precision.",
    },
    {
      src: Data,
      alt: "Data Analytics Services",
      title: "Data Analytics Services",
      pra: "At Crealogic, we specialize in turning complex data into meaningful insights that drive results. From developing custom analytics dashboards to implementing predictive models, our data analytics solutions empower businesses to make informed decisions. We focus on providing user-centric, actionable insights that optimize operations, uncover opportunities, and establish a data-driven approach to growth.",
    },
    {
      src: Marketing,
      alt: "Marketing Services",
      title: "Marketing Services",
      pra: "At Crealogic, we design impactful marketing strategies that leave a lasting impression on your audience. From tailored digital campaigns to advanced SEO techniques, our services are designed to drive engagement and boost conversions. We focus on creating data-driven strategies and compelling content that help businesses establish a strong online presence and build long-lasting customer relationships.",
    },
  ];

  return (
    <section id="services" className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center ">
          <div className="">
            <HadingTitle
              className="flex web3Items justify-center items-center"
              text="Services"
            />

            <h2 className=" ">
              Offering End-to-End IT Services for Every Business Need
            </h2>
          </div>

          <ServicesBox data={SrvicesData} className="" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
