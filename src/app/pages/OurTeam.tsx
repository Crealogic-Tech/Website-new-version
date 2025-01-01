import React from "react";
import HadingTitle from "../Components/HadingTitle";

import Hero from "../assets/images/hero-home-image-1.webp";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";  // You can use any icon library
import ProfileCard from "../Components/layout/TeamCard";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Robert Fox",
      role: "Founder & CEO",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },  // JSX icon components
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      avatarSrc: Hero,
      socialLinks: [
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <section className="py-[90px] lg:pb-16 lg:pt-0 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Our Team"
            />
            <h2 className="blockSubTitle pSubTitle">Meet Our Team</h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-center w-full mt-10">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                name={member.name}
                role={member.role}
                avatarSrc={member.avatarSrc}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
