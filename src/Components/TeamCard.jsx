import React, { useRef } from "react";
import { gsap } from "gsap";

const ProfileCard = ({ name, role, avatarSrc, socialLinks }) => {
  const cardRef = useRef(null);
  const leftIconsRef = useRef(null);
  const rightIconsRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    if (leftIconsRef.current && rightIconsRef.current && buttonRef.current) {
      gsap.to(leftIconsRef.current, { opacity: 1, x: 0, duration: 0.5 });
      gsap.to(rightIconsRef.current, { opacity: 1, x: 0, duration: 0.5 });
      gsap.to(buttonRef.current, { rotate: 90, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (leftIconsRef.current && rightIconsRef.current && buttonRef.current) {
      gsap.to(leftIconsRef.current, { opacity: 0, x: 20, duration: 0.5 });
      gsap.to(rightIconsRef.current, { opacity: 0, x: -20, duration: 0.5 });
      gsap.to(buttonRef.current, { rotate: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={cardRef}
      className="col-span-1 xl:col-span-3 group pt-12 pb-9 px-5 excellences hover:bg-gray-300 transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar Section */}
      <div className="w-56 h-56 mb-11">
        <img
          src={avatarSrc}
          alt={name}
          className="object-cover w-full h-full rounded-full"
          width={150}
          height={150}
        />
      </div>

      {/* Name and Role */}
      <div className="text-center mb-5">
        <h3 className="text-xl xl:text-2xl text-c-blue-900 font-semibold leading-6 mb-2.5">
          {name}
        </h3>
        <span className="text-base font-semibold">{role}</span>
      </div>

      {/* Social Icons Section */}
      <div className="flex flex-wrap items-center justify-center space-x-4">
        {/* Left Social Icons */}
        <ul ref={leftIconsRef} className="flex items-center opacity-0 translate-x-5">
          {socialLinks.slice(0, Math.ceil(socialLinks.length / 2)).map((social, index) => (
            <li key={index} className="mr-1">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Button */}
        <span
          ref={buttonRef}
          className="relative opacity-100 w-8 h-8 mx-1.5 flex items-center justify-center rounded-full bg-slate-800"
        >
          <span className="absolute h-2.5 w-0.5 bg-white"></span>
          <span className="absolute h-0.5 w-2.5 bg-white"></span>
        </span>

        {/* Right Social Icons */}
        <ul ref={rightIconsRef} className="flex items-center opacity-0 -translate-x-5">
          {socialLinks.slice(Math.ceil(socialLinks.length / 2)).map((social, index) => (
            <li key={index} className="mr-1">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white"
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
