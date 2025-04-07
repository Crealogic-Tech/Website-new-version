import React from "react";
import HeadingTitle from "../../Components/HadingTitle";
import WhyUsBox from "../../Components/WhyUsBox";
import servicesData from "../../data/servicesData"; // Moved data to a separate file

function WhyUs() {
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
