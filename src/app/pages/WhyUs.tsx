import React from "react";
import HadingTitle from "../Components/HadingTitle";
import WebDev from "../assets/images/web.svg";
import WhyUsBox from "../Components/layout/WhyUsBox";

function WhyUs() {
  const SrvicesData = [
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
