import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Accordion from "../Components/layout/Accordion";

const FaqSection: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "What is O-Mantra NFT?",
      content:
        "O-Mantra NFT is the international community of the global decentralized ecosystem and the first-ever Polygon Chain smart contract marketing matrix...",
    },
    {
      id: 2,
      title: "Who Manages The Platform?",
      content:
        "The platform is managed by self-executing smart contracts that are publicly available...",
    },
    // Add more items as needed
  ];
  return (
    <section className="py-[90px] lg:pb-16 lg:pt-32 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="FAQ'S"
            />
            <h2 className="blockSubTitle pSubTitle">
              Frequently Asked Questions
            </h2>
          </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <div className="max-w-4xl mx-auto mt-10 rounded-lg text-gray-200">
=======
          <div className="max-w-3xl mx-auto mt-10 rounded-lg text-gray-200">
>>>>>>> Stashed changes
=======
          <div className="max-w-3xl mx-auto mt-10 rounded-lg text-gray-200">
>>>>>>> Stashed changes
            {data.map((item) => (
              <Accordion
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
