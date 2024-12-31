"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";

// Define prop types
interface SocialLink {
  icon: string;
  url: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  socialLinks: SocialLink[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  socialLinks,
}) => {
  const socialIconsRef = useRef<HTMLAnchorElement[]>([]); // Array of social icons for animation

  useEffect(() => {
    // Set initial animation state
    gsap.set(socialIconsRef.current, { opacity: 0, y: 20 });
  }, []);

  const handleMouseEnter = () => {
    // Animate social icons on hover
    gsap.to(socialIconsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.1, // Stagger effect for each icon
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    // Hide social icons on hover out
    gsap.to(socialIconsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <div
      className="relative w-72 shadow-3xl rounded-xl overflow-hidden border border-[#c06c84] transform hover:scale-105 transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Section */}
      <div className="relative ">
        <Image
          src={image}
          alt={`${name}'s picture`}
          height={300}
          width={300}
          className="object-cover w-full h-full"
        />
        {/* Social Icons */}
        <div className="absolute inset-0  flex items-center justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                if (el) socialIconsRef.current[index] = el; // Add to refs
              }}
              className="text-white  p-2 rounded-full transition bg-gradient-to-tl from-[#355c7d] via-[#6c5b7b] to-[#c06c84] hover:bg-gradient-to-tl hover:from-[#c06c84] hover:via-[#6c5b7b] hover:to-[#355c7d]"
            >
              <i className={`fab fa-${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
      {/* Name and Role Section */}
      <div className=" p-4 card_text text-white text-center">
        <div className="card_text_inner ">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-lg me-0">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
