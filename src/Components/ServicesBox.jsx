import React from "react";

const ServicesBox = ({ data, className }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {data.map((item, index) => (
        <div key={index} className={`${className} services`}>
          <div className="services_img_wrap relative">
            <img
              src={item.src}
              alt={item.alt}
              width={48}
              height={48}
              className="w-12 h-12 z-10"
            />
          </div>
          <h3 className="services_title">{item.title}</h3>
          <p className="services_desc">{item.pra}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;
