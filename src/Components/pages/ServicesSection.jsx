"use client";
import React from "react";
import HadingTitle from "../../Components/HadingTitle";
import ServicesBox from "../../Components/ServicesBox";
import WebDev from "../../assets/images/web-dev.svg";
import MobileDev from "../../assets/images/mobile-development.svg";
import SoftDev from "../../assets/images/software-development.svg";
import CustomDev from "../../assets/images/optimization.svg";
import BlockDev from "../../assets/images/blockchain.svg";
import DevOps from "../../assets/images/devops.svg";
import Data from "../../assets/images/administration.svg";
import Marketing from "../../assets/images/global-services.svg";
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
      alt: "DevOps",
      title: "DevOps",
      pra: "Our DevOps services aim to streamline and speed up your software development process. We prioritize creating smooth workflows by merging development and operations through automation, continuous integration, and deployment. This approach guarantees quicker delivery, better scalability, and reduced downtime. Whether it's handling infrastructure, boosting collaboration, or enhancing performance, we offer solutions customized to your specific business requirements. With Crealogic, you can innovate more effectively, deliver more quickly, and accomplish greater results.",
    },
    {
      src: Data,
      alt: "Data analyst",
      title: "Data analyst",
      pra: "Crealogic's Data Analyst services convert raw data into valuable information that is useful in making appropriate decisions. We offer data cleansing, descriptive and prescriptive business analytics, and the development of dashboards for real-time business intelligence. Our superb practitioners create personalized solutions that help you identify opportunities, streamline operations, and gain competitive advantages. Whether in banking, health care, or retail, Crealogic offers solutions that effectively use data and breakthrough business transformation. Let us help you reach the full potential of your data! ",
    },
    {
      src: Marketing,
      alt: "Digital Marketing",
      title: "Digital Marketing",
      pra: "Create your online identity more effectively with Crealogic's professional marketing solutions. We integrate innovative ideas with analytical strategies to implement concrete results. Our state-of-the-art digital marketing tools, such as SEO, social media, content marketing, and PPC, the businesses provide the keys to the current competitive digital environment. Our personalized strategies can support anything from increased visibility and lead generation to climate change awareness to help the company grow. ",
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
