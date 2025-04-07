import React from "react";

const WhyUsBox = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start p-4 border border-[#9f6496] rounded-xl serviceHover"
        >
          <img src={item.src} alt={item.alt} width={64} height={64} className="w-16 h-16" />
          <h3 className="text-lg text-start font-semibold mt-6">{item.title}</h3>
          <p className="text-lg pt-4 me-0 mb-0">{item.pra}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUsBox;
