import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Skilled from "../assets/images/Skilled.webp";
import Technology from "../assets/images/Technology.webp";
import Quality from "../assets/images/Quality.webp";
import WhyUsBox from "../Components/layout/WhyUsBox";

function WhyUs() {
  const SrvicesData = [
    {
      src: Skilled,
      alt: "Proven Expertise & Skilled Team",
      title: "Proven Expertise & Skilled Team",
      pra: "Our talented, multi-skilled team ensures timely delivery of projects of all sizes, using creative and practical approaches tailored to your business needs.",
    },
    {
      src: Technology,
      alt: "Cutting-Edge Technology & Collaboration",
      title: "Cutting-Edge Technology & Collaboration",
      pra: "Leveraging the latest technologies, we follow a collaborative roadmap with open communication to ensure our solutions align with your company goals.",
    },
    {
      src: Quality,
      alt: "High-Quality & Customizable Solutions",
      title: "High-Quality & Customizable Solutions",
      pra: "Dedicated to building long-term relationships, we provide budget-friendly, customizable solutions that exceed expectations and deliver impactful results.",
    },
  ];

  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <HadingTitle
            className="flex justify-center items-center"
            text="Why Us"
          />
          <h2 className="blockSubTitle pSubTitle">Why choose Crealogic?</h2>

          <WhyUsBox data={SrvicesData} />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
