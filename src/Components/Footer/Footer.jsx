import React from 'react'
// import arrowIcon from '../assets/images/vector.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaRedditAlien, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
// import dubaiFlag from "../assets/images/icons/dubai-flag.png"
// import indiaFlag from "../assets/images/icons/india-flag.png"


const Footer = () => {
    // useGSAP(() => {
    //     const footerTitle = new SplitText(".footerTitle", { type: "chars" });
    //     const footerMTitle = new SplitText(".footerMTitle", { type: "chars" });
    //     const tl = new gsap.timeline({
    //         ease: Linear.easeInOut,
    //         scrollTrigger: {
    //             trigger: ".footerTrigger",
    //             start: "top top"
    //         }
    //     });
    //     tl.from(footerTitle.chars, 0.5, { opacity: 0, y: 100, transformOrigin: "0% 50% -50", stagger: 0.02 }, "collabe")
    //         .from(footerMTitle.chars, 0.5, { opacity: 0, y: 100, transformOrigin: "0% 50% -50", stagger: 0.02 }, "collabe")
    //         .from(".contact-us-box", 1.5, { opacity: 0, x: -200, transformOrigin: "0% 50% -50", stagger: { each: 1 } }, "collabe+=0.3")
    //         .from('.aboutCompany', 1, { y: 100, opacity: 0, stagger: 0.05 }, "collabe+=0.3")
    //         .from('.linkList', 1, { y: 100, opacity: 0, stagger: 0.09 }, "collabe+=0.4")
    //         .from('.footerLinks', 1, { y: 100, opacity: 0, stagger: 0.03 }, "collabe+=0.5")
    //         .from('.copyRight', 1, { y: 100, opacity: 0, stagger: 0.09 }, "collabe+=0.5")
    // });

    // useGSAP(() => {
    //     const mobileTitle = new SplitText(".mobileTitle", { type: "chars" });
    //     const tl = new gsap.timeline({
    //         ease: Linear.easeInOut,
    //         scrollTrigger: {
    //             trigger: ".mobile-footer",
    //             start: "top center"
    //         }
    //     });
    //     TweenLite.set(".mobileTitle", { perspective: 400 })
    //     tl.from(mobileTitle.chars, 1.5, { opacity: 0, y: 100, transformOrigin: "0% 50% -50", stagger: 0.02 }, "collabe")
    //     tl.from(".mobileContactText", 1.5, { opacity: 0, y: 100, transformOrigin: "0% 50% -50", stagger: { each: 0.05 } }, "collabe+=0.3")
    // })

    const navigate = useNavigate();

    const callFun = () => {
        navigate('/termscondition')
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const scroll = () => {
    }

    return (
        <footer className="footer-main footerTrigger">
            <section className="desktop-footer container" id='contactus'>
                <div className="en-footer-section">
                    <div className="en-f__content d-none d-lg-flex">
                        <p>
                            <span className="wt-400 footerTitle" id="say">
                                Let's bring your
                            </span>
                        </p>
                        <p>
                            <span className="wt-400 mr-11 footerTitle" id="say">
                                ideas to life!
                            </span>
                        </p>
                    </div>
                    <div className="d-inline-block d-lg-none contact-content-heading mx-auto">
                        <span id="say-anim footerMTitle">Let's bring your</span>
                        <span id="say-anim" className="contact-content-heading-sub mobileTitle footerMTitle">
                            ideas to life!
                        </span>
                    </div>
                    <div className="right-en-box d-none d-lg-flex">
                        <div className="image-box contact-us-box">
                            {/* <img alt="Footer Arrow Icon" title="Footer Arrow Icon" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="footer-dark-img" style={{ color: 'transparent' }} src={arrowIcon} /> */}
                        </div>
                        <div className="contact-us-box" data-cursor-text="Say Hi !!" data-cursor-color="#5d5ad6" data-cursor-size="100px">
                            <button id="contact-us-box" title="contact-us-box"></button>
                        </div>
                    </div>
                </div>
                <div className="d-block d-sm-flex justify-content-between mt-50 mt-md-100 addBox">
                    <div className='d-flex flex-column flex-md-row'>
                        <div className="footerAdd">
                            <div className="column">
                                <div className="mb-30">
                                    <div className="d-flex align-items-center mb-10">
                                        {/* <img src={dubaiFlag} className='footer-flag flex-grow-0 w-auto' alt="" /> */}
                                        <h6 className="sub-title mb-0 aboutCompany opacity-50 flex-grow-1 ml-10">Dubai</h6>
                                    </div>
                                    <h5 className="addx aboutCompany h5 fw-400">1918 Tamani Arts Building, <br /> Business Bay, <br/>Dubai, UAE    </h5>
                                </div>
                                <div className='d-flex flex-column '>
                                    <Link to="tel:+971 50 943 9360" className="underline aboutCompany">
                                        <span className="fz-22 main-color">+971 50 943 9360</span>
                                    </Link>
                                    <Link to="mailto:hello@360core.inc" className="underline mt-20 aboutCompany">
                                        <span className="fz-22 main-color">hello@360core.inc</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footerAdd footer-india-location ps-md-4 ms-md-4 pt-4 pt-md-0 mt-4 mt-md-0">
                            <div className="column">
                                <div className="mb-30">
                                    <div className="d-flex align-items-center mb-10">
                                        {/* <img src={indiaFlag} className='footer-flag flex-grow-0 w-auto' alt="" /> */}
                                        <h6 className="sub-title mb-0 aboutCompany opacity-50 flex-grow-1 ml-10">India</h6>
                                    </div>
                                    <h5 className="addx aboutCompany h5 fw-400">703, SNS Business Park, <br/>beside S .D. Jain School, <br/>Vesu, Surat, Gujarat 395007</h5>
                                </div>
                                <div className='d-flex flex-column '>
                                    <Link to="tel:+971 50 943 9360" className="underline aboutCompany">
                                        <span className="fz-22 main-color">+91 99099 18222</span>
                                    </Link>
                                    <Link to="tel:02613584946" className="underline mt-20 aboutCompany">
                                        <span className="fz-22 main-color">02613584946</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex footerAboutLink'>
                        <div className="useLink linkList">
                            <div className="column">
                                <h6 className="sub-title mb-20 opacity-50">Useful Links</h6>
                                <ul className="rest fz-16">
                                    <li className="mb-15">
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li className="mb-15">
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/product">Product</NavLink>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="supportLink ml-52">
                            <div className="column linkList">
                                <h6 className="sub-title mb-20 opacity-50">Support</h6>
                                <ul className="rest fz-16">
                                    <li className="mb-15">
                                        <NavLink to={'/termscondition'}>Term &amp; Conditions</NavLink>
                                    </li>
                                    <li className="mb-15">
                                        <NavLink to={'/privacypolicy'}>Privacy Policy</NavLink>
                                    </li>
                                     <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-30 pb-30 mt-30 mt-sm-80 bord-thin-top bottomBord">
                    <div>
                        <ul className="rest d-flex align-items-center">
                            {/* <li className="hover-this cursor-pointer footerLinks">
                                <Link to="#0" className="hover-anim">
                                    <FaFacebookF />
                                </Link>
                            </li> */}
                            <li className="hover-this cursor-pointer footerLinks">
                                <Link to="https://x.com/360CoreInc" className="hover-anim" rel="nofollow">
                                    <FaXTwitter />
                                </Link>
                            </li>
                            <li className="hover-this cursor-pointer ml-30 footerLinks">
                                <Link to="https://www.instagram.com/360coreinc/" className="hover-anim" rel='nofollow'>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="hover-this cursor-pointer ml-30 footerLinks">
                                <Link to="https://www.linkedin.com/company/79066664/admin/" className="hover-anim" rel='nofollow'>
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li className="hover-this cursor-pointer ml-30 footerLinks">
                                <Link to="https://www.reddit.com/r/360CoreInc/" className="hover-anim" rel='nofollow'>
                                    <FaRedditAlien />
                                </Link>
                            </li>
                            <li className="hover-this cursor-pointer ml-30 footerLinks">
                                <Link to="https://www.youtube.com/@Academy_360" className="hover-anim" rel='nofollow'>
                                    <FaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyRight">
                        <p className="fz-18">© Copyright 2024 - All Rights Reserved By <NavLink to={"/"} className="hover:text-[#494db5]">360CoreInc</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer