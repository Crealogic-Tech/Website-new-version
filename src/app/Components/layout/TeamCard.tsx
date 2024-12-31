'use client'
import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface SocialLink {
  icon: string | React.ReactElement; // Allow string or JSX element for the icon
  url: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  avatarSrc: string | StaticImageData;  // Accept both string (URL) and StaticImageData (next/image)
  socialLinks: SocialLink[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatarSrc, socialLinks }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="col-span-1 xl:col-span-3 group pt-12 pb-9 px-5 flex flex-col items-center justify-center border-b xl:border-b-0 border-r border-team bg-slate-200 dark:bg-c-blue-900 hover:bg-gray-300 dark:hover:bg-drawerBg transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar Section */}
      <div className="w-56 h-56 mb-11">
        <Image
          src={avatarSrc}
          alt={name}
          width={150} // Image size for next/image
          height={150} // Image size for next/image
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Name and Role */}
      <div className="text-center mb-5">
        <h3 className="text-xl xl:text-2xl text-c-blue-900 dark:text-white font-semibold leading-6 mb-2.5 font-plus-jakarta-sans">
          {name}
        </h3>
        <span className="text-base font-semibold">{role}</span>
      </div>

      {/* Social Icons Section */}
      <div className="flex flex-wrap items-center justify-center space-x-4">
        {/* Left Social Icons */}
        <ul
          className={`flex items-center transition-opacity duration-1000 ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}
        >
          {socialLinks.slice(0, Math.ceil(socialLinks.length / 2)).map((social, index) => (
            <li key={index} className="mr-1">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Button */}
        <span className="relative !opacity-100 w-8 h-8 mx-1.5 flex items-center justify-center rounded-full bg-slate-800 dark:bg-[#3C12D4] text-c-blue-900 dark:text-white">
          <span className={`absolute h-2.5 w-0.5 bg-white transition-transform duration-300 ${hovered ? 'rotate-90': 'rotate-0'}`}></span>
          <span className={`absolute h-0.5 w-2.5 bg-white transition-opacity duration-300 ${hovered ? 'opacity-0': 'opacity-100'}`}></span>
        </span>

        {/* Right Social Icons */}
        <ul
          className={`flex items-center transition-opacity duration-1000 ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
          }`}
        >
          {socialLinks.slice(Math.ceil(socialLinks.length / 2)).map((social, index) => (
            <li key={index} className="mr-1">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
