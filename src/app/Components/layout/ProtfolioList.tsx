import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ProtfolioItem = {
    src : StaticImageData;
    alt: string;
}

type ProtfolioProps = {
    data: ProtfolioItem[];
    className: string;
  };

const ProtfolioList:React.FC<ProtfolioProps> =({data,className}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((item, index) => (

        <div key={index} className={`${className} excellences  border border-[#c06c84] rounded-xl p-3 m-3`}>
            <Image src={item.src} alt={item.alt} className='w-80 h-60 rounded-xl'/>
        </div>
        ))};
    </div>
  )
}

export default ProtfolioList