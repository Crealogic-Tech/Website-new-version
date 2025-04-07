import React from "react";
import { Link } from "react-router-dom"; // Use React Router
import { FaSkype, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

// Import Images Normally
import Logo from "../assets/images/logo.svg";
import LogoName from "../assets/images/crealogic.svg";
import FooterIcon from "../assets/images/footer.svg";

function Footer() {
  return (
    <footer className="bg-[#F6F7FA] ">
      <div className="container">
        <div className="flex flex-col pt-20">
          <div className="footer-top pb-9">
            <div className="about-footer">
              <div className="footer-widget">
                <img src={Logo} alt="Logo" width={60} height={60} className="mb-4" />
                <img src={LogoName} alt="Crealogic Tech" width={240} className="w-60" />
                <p className="m-0 mt-3">
                  Where visionaries and technologists unite to craft brilliance
                  for a connected world!
                </p>
              </div>
            </div>
            <div className="footer-nav">
              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Services</h3>
                  <ul>
                    {["Web Development", "Mobile App Development", "Custom Software Development", "Web App Development", "Blockchain Development", "Mobile App Development"].map((service, index) => (
                      <li key={index} className="pb-3">
                        <a href="#" className="hover:text-[#c06c84]">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Technologies</h3>
                  <ul>
                    {["Frontend Technologies", "Backend Technologies", "Mobile App Technologies", "DevOps Technologies", "Full-stack Technologies"].map((tech, index) => (
                      <li key={index} className="pb-3">
                        <a href="#" className="hover:text-[#c06c84]">
                          {tech}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Contact Us</h3>

                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col items-start mb-3">
                      <strong>Crealogic Tech</strong>
                      <div className="flex gap-2 items-center">
                        <a href="tel:+918160343175" className="flex items-center gap-3">
                          <BiSolidPhoneCall className="w-5 h-5 text-[#c06c84]" />
                          +91 81603 43175
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start mb-3">
                      <strong>Email</strong>
                      <div className="flex flex-row gap-2 items-center">
                        <a href="mailto:crealogictech@gmail.com" className="flex items-center gap-3">
                          <IoMdMail className="w-5 h-5 text-[#c06c84]" />
                          crealogictech@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 mt-3">
                      <a href="https://join.skype.com/invite/thfRVKaY89La"
                        className="p-2 flex justify-center items-center social-icon rounded-full bg-[#1778f2]">
                        <FaSkype />
                      </a>
                      <a href="https://www.instagram.com/crealogictech?igsh=aHlnMDhrc2lucHBt&utm_source=qr"
                        className="p-2 flex justify-center items-center social-icon rounded-full bg-[#f00075]">
                        <FaInstagram />
                      </a>
                      <a href="https://x.com/Crealogictech"
                        className="p-2 flex justify-center items-center social-icon rounded-full bg-[#1da1f2]">
                        <FaTwitter />
                      </a>
                      <a href="https://www.linkedin.com/company/crealogictech/"
                        className="p-2 flex justify-center items-center social-icon rounded-full bg-[#0d66c2]">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom py-4 border-t border-[#c06c84]">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="m-0 text-[16px]">
                © 2024 Crealogic - We create solutions that grow with your business
              </p>
              <div className="flex mt-5 lg:mt-0 gap-3 justify-center items-center">
                <p className="m-0 text-[16px]">
                  Innovated with care at <span className="text-xl font-semibold">Crealogic</span>
                </p>
                <img src={FooterIcon} alt="Footer Icon" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
