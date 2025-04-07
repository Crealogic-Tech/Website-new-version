import React from "react";

const ProtfolioList = ({ data, className }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className={`${className} excellences border border-[#c06c84] rounded-xl p-3 m-3`}>
          <img src={item.src} alt={item.alt} width={320} height={240} className="w-80 h-60 rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default ProtfolioList;
