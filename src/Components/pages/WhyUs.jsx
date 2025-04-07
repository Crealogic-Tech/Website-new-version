import React from "react";
import HeadingTitle from "../../Components/HadingTitle";
import WhyUsBox from "../../Components/WhyUsBox";
// import servicesData from "../../data/servicesData"; // Moved data to a separate file
import Skilled from "../assets/images/Skilled.svg";
import Technology from "../assets/images/Technology.svg";
import Quality from "../assets/images/Quality.svg"


function WhyUs() {

  const servicesData = [
  {
    src: Skilled,
    alt: "Proven Expertise & Skilled Team",
    title: "Proven Expertise & Skilled Team",
    description:
      "Our talented, multi-skilled team ensures timely delivery of projects of all sizes, using creative and practical approaches tailored to your business needs.",
  },
  {
    src: Technology,
    alt: "Cutting-Edge Technology & Collaboration",
    title: "Cutting-Edge Technology & Collaboration",
    description:
      "Leveraging the latest technologies, we follow a collaborative roadmap with open communication to ensure our solutions align with your company goals.",
  },
  {
    src: Quality,
    alt: "High-Quality & Customizable Solutions",
    title: "High-Quality & Customizable Solutions",
    description:
      "Dedicated to building long-term relationships, we provide budget-friendly, customizable solutions that exceed expectations and deliver impactful results.",
  },
];
  
  return (
    <section className="py-16 lg:py-12">
      <div className="container mx-auto text-center">
        <HeadingTitle text="Why Us"  className="flex justify-center items-center" />
        <h2 className="blockSubTitle pSubTitle">Why choose Crealogic?</h2>
        <WhyUsBox data={servicesData} />
      </div>
    </section>
  );
}

export default WhyUs;
