import React from "react";
import HadingTitle from "../Components/HadingTitle";
import Dats from "../assets/images/Dats.webp";
import Smit from "../assets/images/smit.webp";
import MeetK from "../assets/images/Meetk.webp";
import MeetM from "../assets/images/Meetm.webp";
import Prtham from "../assets/images/prtham.webp";
import Riddham from "../assets/images/riddham.webp";
import { FaSkype, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";
import ProfileCard from "../Components/layout/TeamCard";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Dats",
      role: "Founder & CEO",
      avatarSrc: Dats,
      socialLinks: [
        { icon: <FaTwitter />, url: "https://x.com/Crealogictech" },
        { icon: <FaTelegram />, url: "https://t.me/crealogictech" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/thfRVKaY89La",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/company/crealogictech/",
        },
      ],
    },
    {
      name: "Smit Kachchadiya",
      role: "Product Manager",
      avatarSrc: Smit,
      socialLinks: [
        { icon: <FaTwitter />, url: "https://x.com/smitkachhadiy17?s=21" },
        { icon: <FaTelegram />, url: "https://t.me/smit_kachhadiya" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/roz2GKxd4m6V",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/smit-kachhadiya-999469224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      name: "Meet Mangukiya",
      role: "Frontend Developer",
      avatarSrc: MeetM,
      socialLinks: [
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaTelegram />, url: "https://t.me/meetMangukiya2757" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/w6QDXdidYOsI",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/meet-mangukiya-7a4245252/",
        },
      ],
    },
    {
      name: "Prtham Kyada",
      role: "Backend Developer",
      avatarSrc: Prtham,
      socialLinks: [
        {
          icon: <FaTwitter />,
          url: "https://x.com/i/flow/login?redirect_after_login=%2Fkyadaprath24129",
        },
        { icon: <FaTelegram />, url: "https://t.me/P_kyada" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/wGWoAA0MWvca",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/pratham-kyada-749209345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      name: "Meet Kaswala",
      role: "Content Manager",
      avatarSrc: MeetK,
      socialLinks: [
        {
          icon: <FaTwitter />,
          url: "https://x.com/Mitukaswala1311?t=HlWNwN0eWfFep9NuHs8zXQ&s=09",
        },
        { icon: <FaTelegram />, url: "https://t.me/Mitu1311" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/rg1UTmA87CfO",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/mitu-kaswala",
        },
      ],
    },

    {
      name: "Riddham Patel",
      role: "Data Analytics",
      avatarSrc: Riddham,
      socialLinks: [
        {
          icon: <FaTwitter />,
          url: "https://x.com/RidhamP72112423?t=zZCUPkCk-OqB6hVZfdv1Xg&s=09",
        },
        { icon: <FaTelegram />, url: "https://t.me/Ridham2211" },
        {
          icon: <FaSkype />,
          url: "https://join.skype.com/invite/yteG7Eth1W6v",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ridhampatel22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
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
