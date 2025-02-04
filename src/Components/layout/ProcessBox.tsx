import Image, { StaticImageData } from "next/image";
import React from "react";

type ProcessItem = {
  src: string | StaticImageData;
  alt: string;
  // step: string;
  title: string;
  pra: string;
};

type ProcessProps = {
  data: ProcessItem[];
};

const ProcessBox: React.FC<ProcessProps> = ({ data }) => {
  return (
    <div className="process__main">
      {data.map((item, index) => (
        <div key={index} className={`process-box shadow-3xl  shadow-[#c06c84] ${index % 2 === 1 ? "right" : ""}`}>
          {/* <div className="step">{item.step}</div> */}
          <div className="content">
            <div className="flex items-center justify-start gap-5 ">
              <Image src={item.src} alt={item.alt} height={40} width={40} className="w-10 h-10 mb-[21px]" />
              <h3 className="title">{item.title}</h3>
            </div>
            <p className="text me-0 mb-0 md:mb-auto">{item.pra}</p>
          </div>
        </div>
      ))}
      <div className="md:icon"></div>
      <div className="md:icon bottom"></div>
    </div>
  );
};

export default ProcessBox;
