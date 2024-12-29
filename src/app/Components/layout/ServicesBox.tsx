import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import React from "react";

type ServicesItem = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  pra: string;
};

type ServicesProps = {
  data: ServicesItem[];
};

const ServicesBox: React.FC<ServicesProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start p-4 border rounded-xl hover:"
        >
          <Image src={item.src} alt={item.alt} className="w-16 h-16 " />
          <h3 className="text-2xl text-start font-semibold my-6">{item.title}</h3>
          <p className="text-lg py-4 me-0">{item.pra}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;
