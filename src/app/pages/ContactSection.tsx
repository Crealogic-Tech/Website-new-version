"use client";
import React, { useState } from "react";
import Button from "../Components/layout/Button";
import HadingTitle from "../Components/HadingTitle";
import Phone from "../assets/images/phone.svg";
import Check from "../assets/images/check.svg";
import Mail from "../assets/images/mail.svg";
import Skype from "../assets/images/skype.svg";
import Image from "next/image";
import axios from "axios";
import Turnstile from "react-turnstile";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    try {
      const response = await axios.post("/api/sendemail", {
        ...formData,
        captchaToken,
      });
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      });
      setCaptchaToken(""); // Reset CAPTCHA
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again later.");
    }
  };

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
            <div className="contact-info p-5 lg:p-12 text-start">
              <h3>Contact Information</h3>
              <p>
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
              <ul>
                <li>
                  <Image src={Phone} alt="Phone" width={30} height={30} /> +91
                  1234658790
                </li>
                <li>
                  <Image src={Mail} alt="Mail" width={30} height={30} />{" "}
                  inquiry@crealogic.tech
                </li>
                <li>
                  <Image src={Skype} alt="Skype" width={30} height={30} />{" "}
                  Crealogic Tech
                </li>
              </ul>
              <span className="check-icon-p">
                <Image
                  src={Check}
                  alt="Check"
                  width={40}
                  height={40}
                  className="pe-2"
                />
                We guarantee 100% security of your information. We will not
                share the details you provide above with anyone. Your email
                won&apos;t be used for spamming.
              </span>
            </div>

            {/* Right Section */}
            <div className="contact-form">
              <span>How do we help?</span>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <textarea
                    name="description"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-row">
                  <Turnstile
                    sitekey="0x4AAAAAAA4fOTL7Q5GY82TN"
                    onVerify={(token) => setCaptchaToken(token)}
                  />
                </div>
                <div className="form-row justify-between items-center">
                  <button type="submit" className="w-56 h-14">
                    Submit
                  </button>
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
