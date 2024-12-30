import React from "react";
import HadingTitle from "../Components/HadingTitle";
import WebDev from "../assets/images/web.svg";
import ServicesBox from "../Components/layout/ServicesBox";

function ServicesSection() {
  const SrvicesData = [
    {
      src: WebDev,
      alt: "Web Development",
      title: "Web Development",
      pra: "At Crealogic, we specialize in building responsive and quality websites that leave a lasting impression. From custom eCommerce platforms to informative corporate portals, our web development services ensure your online presence drives results. We focus on creating engaging, user-centric designs that help businesses establish a solid online identity and convert visitors into loyal customers.",
    },
    {
      src: WebDev,
      alt: "Mobile App Development",
      title: "Mobile App Development",
      pra: "Are you looking to create an innovative mobile app? Whether you need an Android, iOS, or cross-platform solution, we've got you covered. Our mobile app development services prioritize user-friendliness, seamless functionality, and optimal performance to deliver exceptional experiences. Partner with us for your next mobile app development project and turn your idea into reality.",
    },
    {
      src: WebDev,
      alt: "Custom Software Development",
      title: "Custom Software Development",
      pra: "Need a tailored software solution for your unique business needs? At Crealogic, we specialize in custom software development that ts your specic challenges, business model, and goals. We deliver secure, scalable software compatible with all major operating systems, devices, and browsers, ensuring your solution is built to grow with your business. Let's create a custom solution that works for you.",
    },
    {
      src: WebDev,
      alt: "Web App Development",
      title: "Web App Development",
      pra: "Transform your thoughts into high-impact web applications with Crealogic. We develop responsive, scalable, secure web apps tailored to your business goals. We are using advanced frameworks like React, Angular, and Node.js. Our team delivers seamless, engaging applications that enhance user experience and drive growth.",
    },
    {
      src: WebDev,
      alt: "Blockchain Development",
      title: "Blockchain Development",
      pra: "Unlock the power of blockchain with a secure, transparent, and efcient solution from us to empower your business. Our blockchain experts help to create safe, decentralized, and scalable applications, from smart contracts to complete blockchain ecosystems. We designed to streamline operations and build trust. Transform your operations today with innovative blockchain technology.",
    },
    {
      src: WebDev,
      alt: "Web Development",
      title: "Web Development",
      pra: "At Crealogic, we specialize in building responsive and quality websites that leave a lasting impression. From custom eCommerce platforms to informative corporate portals, our web development services ensure your online presence drives results. We focus on creating engaging, user-centric designs that help businesses establish a solid online identity and convert visitors into loyal customers.",
    },
    {
      src: WebDev,
      alt: "Web Development",
      title: "Web Development",
      pra: "At Crealogic, we specialize in building responsive and quality websites that leave a lasting impression. From custom eCommerce platforms to informative corporate portals, our web development services ensure your online presence drives results. We focus on creating engaging, user-centric designs that help businesses establish a solid online identity and convert visitors into loyal customers.",
    },
    {
      src: WebDev,
      alt: "Web Development",
      title: "Web Development",
      pra: "At Crealogic, we specialize in building responsive and quality websites that leave a lasting impression. From custom eCommerce platforms to informative corporate portals, our web development services ensure your online presence drives results. We focus on creating engaging, user-centric designs that help businesses establish a solid online identity and convert visitors into loyal customers.",
    },
  ];

  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center ">
          <div className="">
            <HadingTitle
              className="flex justify-center items-center"
              text="Services"
            />

            <h2 className="blockSubTitle pSubTitle">
              Offering End-to-End IT Services for Every Business Need
            </h2>
          </div>

          <ServicesBox data={SrvicesData} />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
