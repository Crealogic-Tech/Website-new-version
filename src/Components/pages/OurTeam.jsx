import React from "react";
import HadingTitle from "../../Components/HadingTitle";
import ProfileCard from "../../Components/TeamCard";
import { FaSkype, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import Images
import Smit from "../../assets/images/smit.svg";
import MeetK from "../../assets/images/Meetk.svg";
import Prtham from "../../assets/images/prtham.svg";
import Riddham from "../../assets/images/riddham.svg";

const teamMembers = [
  {
    name: "Smit Kachchadiya",
    role: "Product Manager",
    avatarSrc: Smit,
    socialLinks: [
      { icon: <FaXTwitter />, url: "https://x.com/smitkachhadiy17?s=21" },
      { icon: <FaTelegram />, url: "https://t.me/smit_kachhadiya" },
      { icon: <FaSkype />, url: "https://join.skype.com/invite/roz2GKxd4m6V" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/smit-kachhadiya-999469224" },
    ],
  },
  {
    name: "Prtham Kyada",
    role: "Backend Developer",
    avatarSrc: Prtham,
    socialLinks: [
      { icon: <FaXTwitter />, url: "https://x.com/i/flow/login?redirect_after_login=%2Fkyadaprath24129" },
      { icon: <FaTelegram />, url: "https://t.me/P_kyada" },
      { icon: <FaSkype />, url: "https://join.skype.com/invite/wGWoAA0MWvca" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/pratham-kyada-749209345" },
    ],
  },
  {
    name: "Meet Kaswala",
    role: "Content Manager",
    avatarSrc: MeetK,
    socialLinks: [
      { icon: <FaXTwitter />, url: "https://x.com/Mitukaswala1311?t=HlWNwN0eWfFep9NuHs8zXQ&s=09" },
      { icon: <FaTelegram />, url: "https://t.me/Mitu1311" },
      { icon: <FaSkype />, url: "https://join.skype.com/invite/rg1UTmA87CfO" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mitu-kaswala" },
    ],
  },
  {
    name: "Riddham Patel",
    role: "Data Analytics",
    avatarSrc: Riddham,
    socialLinks: [
      { icon: <FaXTwitter />, url: "https://x.com/RidhamP72112423?t=zZCUPkCk-OqB6hVZfdv1Xg&s=09" },
      { icon: <FaTelegram />, url: "https://t.me/Ridham2211" },
      { icon: <FaSkype />, url: "https://join.skype.com/invite/yteG7Eth1W6v" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ridhampatel22" },
    ],
  },
];

const OurTeam = () => {
  return (
    <section className="py-[90px] lg:pb-16 lg:pt-0 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle className="flex justify-center items-center" text="Our Team" />
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
