import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface SocialIconsProps {
  socialLinks: { href: string; icon: string }[]; // Use `href` instead of `href`
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks }) => {
  const leftIconsRef = useRef<HTMLUListElement>(null);
  const rightIconsRef = useRef<HTMLUListElement>(null);
  const centerButtonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (leftIconsRef.current && rightIconsRef.current) {
      gsap.fromTo(
        [leftIconsRef.current, rightIconsRef.current],
        { opacity: 0, x: (i) => (i === 0 ? -20 : 20) },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", stagger: 0.2 }
      );
    }

    if (centerButtonRef.current) {
      gsap.fromTo(
        centerButtonRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.75)" }
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <ul ref={leftIconsRef} className="flex items-center">
        {socialLinks.slice(0, 2).map((link, index) => (
          <li key={index} className="mr-2">
            <a href={link.href} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <span ref={centerButtonRef} className="relative w-8 h-8 mx-3 flex items-center justify-center rounded-full bg-slate-800 text-white">
        <span className="absolute h-2.5 w-0.5 bg-white transform group-hover:rotate-90 transition duration-300"></span>
        <span className="absolute h-0.5 w-2.5 bg-white transform group-hover:opacity-0 transition duration-300"></span>
      </span>

      <ul ref={rightIconsRef} className="flex items-center">
        {socialLinks.slice(2).map((link, index) => (
          <li key={index} className="mr-2">
            <a href={link.href} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
