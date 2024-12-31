import React from "react";
import HadingTitle from "../Components/HadingTitle";
import TeamCard from "../Components/layout/TeamCard";
import Hero from "../assets/images/hero-home-image-1.webp";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
  socialLinks: { icon: string; url: string }[];
}
const OurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Robert Fox",
      role: "Founder & CEO",
      image: Hero,
      socialLinks: [
        { icon: "facebook", url: "https://facebook.com" },
        { icon: "twitter", url: "https://twitter.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      name: "Mallela Oni",
      role: "Product Analyst",
      image: Hero,
      socialLinks: [
        { icon: "facebook", url: "https://facebook.com" },
        { icon: "twitter", url: "https://twitter.com" },
        { icon: "linkedin", url: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <section className="py-[90px] lg:pb-16 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Business Solutions"
            />
            <h2 className="blockSubTitle pSubTitle">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-10">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3 group pt-12 pb-9 px-5 flex flex-col items-center justify-center border-b xl:border-b-0 border-r border-team bg-slate-200 dark:bg-c-blue-900 hover:bg-gray-300 dark:hover:bg-drawerBg transition duration-300">
          {/* Avatar Section */}
          <div className="w-56 h-56 mb-11">
            <Image
              src={Hero}
              alt="Michael Johnson"
              width={150} // Image size for next/image
              height={150} // Image size for next/image
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-5">
            <h3 className="text-xl xl:text-2xl text-c-blue-900 dark:text-white font-semibold leading-6 mb-2.5 font-plus-jakarta-sans">
              Michael Johnson
            </h3>
            <span className="text-base font-semibold">Developer</span>
          </div>

          {/* Social Icons Section */}
          <div className="flex flex-wrap items-center justify-center">
            {/* Left Social Icons */}
            <ul className="flex items-center opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
              <li className="mr-1">
                <a
                  href="#!"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.0f 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#!"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Center Button */}
            <span className="relative w-8 h-8 mx-1.5 flex items-center justify-center rounded-full bg-slate-800 dark:bg-[#3C12D4] text-c-blue-900 dark:text-white">
              <span className="absolute h-2.5 w-0.5 bg-white group-hover:rotate-90 transition duration-300"></span>
              <span className="absolute h-0.5 w-2.5 bg-white group-hover:opacity-0 transition duration-300"></span>
            </span>

            {/* Right Social Icons */}
            <ul className="flex items-center opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
              <li className="mr-1">
                <a
                  href="#!"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#!"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 dark:bg-c-blue-900 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
