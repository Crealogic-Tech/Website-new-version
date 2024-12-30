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
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start p-4 border border-[#9f6496]  rounded-xl serviceHover"
        >
          <Image src={item.src} alt={item.alt} className="w-10 h-10 " />
          <h3 className="text-lg text-start font-semibold mt-6">
            {item.title}
          </h3>
          <p className="text-lg py-4 me-0">
             {/* {truncateText(item.pra, 150)} */}
             {item.pra}
             </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;
