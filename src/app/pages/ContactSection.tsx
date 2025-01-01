import React from "react";
import Button from "../Components/layout/Button";
import HadingTitle from "../Components/HadingTitle";
import Phone from "../assets/images/phone.svg";
import Check from "../assets/images/check.svg";
import Mail from "../assets/images/mail.svg";
import Skype from "../assets/images/skype.svg";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="py-[90px] lg:py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex justify-center items-center"
              text="Contact Us"
            />
            <h2 className="blockSubTitle pSubTitle">Get in Touch With Us</h2>
          </div>
          <div className="contact-wrapper flex-col lg:flex-row">
            {/* Left Section */}
            <div className="contact-info  p-5 lg:p-12 text-start">
              <h3>Contact Information</h3>
              <p>
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
              <ul>
                <li>
                  <span role="img" aria-label="phone">
                    <Image src={Phone} alt="Phone" width={30} height={30} />
                  </span>{" "}
                  +91 1234658790
                </li>
                <li>
                  <span role="img" aria-label="email">
                    <Image src={Mail} alt="Mail" width={30} height={30} />
                  </span>{" "}
                  inquiry@crealogic.tech
                </li>
                <li>
                  <span role="img" aria-label="skype">
                    <Image src={Skype} alt="Skype" width={30} height={30}/>
                  </span>{" "}
                  Crealogic Tech
                </li> 
              </ul>
              <span className="check-icon-p ">
                <Image src={Check} alt="Check" width={40} height={40} className="pe-2"/>
                 We guarantee 100% security of your information. We will not
                share the details you provide above with anyone. Your email
                won&apos;t be used for spamming.
              </span>
            </div>

            {/* Right Section */}
            <div className="contact-form ">
              <span className="">How do we help?</span>
              <form>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-row">
                  <textarea
                    placeholder="Project Description"
                    required
                  ></textarea>
                </div>

                <div className="form-row justify-between items-center">
                  <div className="flex  ">
                    <input type="checkbox" id="not-robot" />
                    <label htmlFor="not-robot">I&apos;m not a robot</label>
                  </div>
                  <Button className="w-56 h-14" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
