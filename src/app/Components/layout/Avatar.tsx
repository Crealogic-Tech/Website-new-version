import React from "react";
import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  src: string | StaticImageData;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="w-56 h-56 mb-11">
    <Image src={src} alt={alt} width={224} height={224} className="object-cover rounded-full" />
  </div>
);

export default Avatar;
