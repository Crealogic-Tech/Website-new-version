import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Turnstile from "react-turnstile";
import HadingTitle from "../HadingTitle";

// Import local images
import Phone from "../../assets/images/phone.svg";
import Check from "../../assets/images/check.svg";
import Mail from "../../assets/images/mail.svg";
import Skype from "../../assets/images/skype.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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
      setCaptchaToken("");
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
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
                  Fill up the form and our team will get back to you within 24 hours.
                </p>
                <ul>
                  <li>
                    <a href="tel:+918160343175" className="flex items-center gap-3">
                      <img src={Phone} alt="Phone" width={30} height={30} />
                      +91 81603 43175
                    </a>
                  </li>
                  <li>
                    <a href="mailto:crealogictech@gmail.com" className="flex items-center gap-3">
                      <img src={Mail} alt="Mail" width={30} height={30} />
                      crealogictech@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://join.skype.com/invite/thfRVKaY89La" className="flex items-center gap-3">
                      <img src={Skype} alt="Skype" width={30} height={30} />
                      Crealogic Tech
                    </a>
                  </li>
                </ul>
                <span className="check-icon-p">
                  <img src={Check} alt="Check" width={40} height={40} className="pe-2" />
                  We guarantee 100% security of your information. Your email won&apos;t be used for spamming.
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
                  <div className="form-row flex justify-between items-center">
                    <Turnstile
                      sitekey="0x4AAAAAAA4fOTL7Q5GY82TN"
                      onVerify={(token) => setCaptchaToken(token)}
                    />
                    <div className="form-row justify-between !mb-0 items-center">
                      <button
                        type="submit"
                        className="px-6 py-2 w-36 h-16 rounded-xl text-xl mb-0 text-white 
                          bg-gradient-to-tl from-[#355c7d] via-[#6c5b7b] to-[#c06c84] 
                          hover:bg-gradient-to-tl hover:from-[#c06c84] hover:via-[#6c5b7b] hover:to-[#355c7d]"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>x
    </>
  );
};

export default ContactSection;
