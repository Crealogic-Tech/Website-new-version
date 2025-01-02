import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.png";
<<<<<<< Updated upstream
=======
import Call from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
>>>>>>> Stashed changes
import FooterIcon from "../../assets/images/footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#F6F7FA] ">
      <div className="container">
        <div className="flex flex-col  pt-20">
          <div className="footer-top pb-9">
            <div className="about-footer">
              <div className="footer-widget">
                <Image
                  alt=""
                  src={Logo}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold mb-5 ">9Pay Tech</h3>
                <p className="m-0  ">
                  Where visionaries and technologists unite to craft brilliance
                  for a connected world!
                </p>

                <div className="flex gap-1 items-center mb-5">
                  <div>
                    <FaLocationDot className="w-5 h-5 text-[#c06c84]" />
                  </div>
                  <div>
                    <p className="m-0 text-[16px]">
                    Shrungal Palace, Bamroli - Althan Rd, opp. dmart, Nem Nagar, Pandesara, Althan, Surat, Gujarat 394221
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-nav">
              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Services</h3>
                  <div>
                    <ul className=" ">
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Web Development
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Mobile App Development
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Custom Software Development
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Web App Development
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Blockchain Development
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Mobile App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Technologies</h3>
                  <div>
                    <ul className=" ">
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Frontend Technologies
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Backend Technologies
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Mobile App Technologies
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          DevOps Technologies
                        </a>
                      </li>
                      <li className="pb-3">
                        <a href="" className="hover:text-[#c06c84]">
                          Full-stack Technologies
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-widget">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-2xl font-bold mb-3">Contact Us</h3>

                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col items-start mb-3">
                      <strong>9Pay Sell</strong>
                      <div className="flex gap-2 items-center">
                        <BiSolidPhoneCall className="w-5 h-5 text-[#c06c84]" />
                        +91 12345 67890
                      </div>
                    </div>
                    <div className="flex flex-col items-start mb-3">
                      <strong>Email</strong>
                      <div className="flex gap-2 items-center">
                        <IoMdMail className="w-5 h-5 text-[#c06c84]" />
                        +91 12345 67890
                      </div>
                    </div>
                    <div className="flex flex-col items-start mb-3 ">
                      <strong>HR/Corporate Enquiry</strong>
                      <div className="flex gap-2 items-center">
                        <BiSolidPhoneCall className="w-5 h-5 text-[#c06c84]" />
                        +91 12345 67890
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 mt-3">
                      <a
                        href=""
                        className=" p-2 flex justify-center items-center social-icon rounded-full bg-[#1778f2]"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href=""
                        className=" p-2 flex justify-center items-center social-icon rounded-full bg-[#f00075]"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href=""
                        className=" p-2 flex justify-center items-center social-icon rounded-full bg-[#1da1f2]"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href=""
                        className=" p-2 flex justify-center items-center social-icon rounded-full bg-[#0d66c2]"
                      >
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
              <div>
                <p className="m-0 text-[16px]">
                  © 2024 Crealogic - We create solutions that grow with your
                  business
                </p>
              </div>
              <div className="flex mt-5 lg:mt-0 gap-3 justify-center items-center">
                <p className="m-0 text-[16px]">
                  Innovated with care at{" "}
                  <span className="text-xl font-semibold">Crealogic</span>{" "}
                </p>
                <Image alt="cre" src={FooterIcon} width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
