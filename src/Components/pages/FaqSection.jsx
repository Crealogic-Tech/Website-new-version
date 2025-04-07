import React, { useState } from "react";
import HadingTitle from "../../Components/HadingTitle";
import Accordion from "../../Components/Accordion";

const FaqSection = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Can you ensure quality in outstanding development projects?",
      content:
        "Crealogic is an expert web development, mobile app development, and custom software development outsourcing company. Our experts comprehensively examine your project requirements and assign them to an appropriate, experienced, and skilled project manager in their field.",
    },
    {
      id: 2,
      title: "How will you keep updated on the progress of the project?",
      content:
        "You get updates on your projects throughout the entire development process. Our dedicated project manager will be in touch with you throughout the project.",
    },
    {
      id: 3,
      title: "What measures do you take to protect data and users?",
      content:
        "We always keep client data security as our top priority. We apply comprehensive, multi-layered security protocols that include data encryption, rest and in transit, secure coding standards, and regular security audits to keep the data safe. We always keep your data secure and confidential.",
    },
    {
      id: 4,
      title: "What kind of post-launch support do you provide?",
      content:
        " It depends on the size and kind of the project. We provide the client with 1 to 3 months post support of bug fixing and developmental support. After this period, clients can opt for hourly slots for minor maintenance & updates or choose ongoing yearly maintenance and aid on a retainer basis.",
    },
  ];

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-[90px] lg:pb-16 lg:pt-32 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle className="flex justify-center items-center" text="FAQ'S" />
            <h2 className="blockSubTitle pSubTitle">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 rounded-lg text-gray-200">
            {data.map((item) => (
              <Accordion
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openItemId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
