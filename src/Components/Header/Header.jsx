// src/components/Header.js
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import Divider from "../Divider/Divider";
import LeftHorizontalDivider from "../Divider/LeftHorizontalDivider";
import RightHorizontalDivider from "../Divider/RightHorizontalDivider";
import HeaderLogo from "../../assets/images/logo/3.png";
import BurgerBTN from "../BurgerBTN/BurgerBTN";
import LineComponent from "../Divider/LineComponent";
import CloseBTNSVG from "../Button/CloseBTNSVG";
import { NavManu } from "../NavMenu/NavMenu";
import { SocialLink } from "../SocialLink/SocialLink";

const Header = (props) => {
  const location = useLocation();
  // const logo = "https://ik.imagekit.io/360coreinc/360coreinc/logo.svg";
  const route = useRoutes;
  // const [addClass, setAddClass] = useState(false);
  const mousFunc = () => {
    gsap.fromTo(
      "#menu-burger line",
      0.7,
      {
        drawSVG: "50% 50%",
        stroke: "#14CF93",
        ease: Linear.easeInOut,
        transformOrigin: "0%",
      },
      { drawSVG: "0% 100%", stroke: "#fff", transformOrigin: "100%" }
    );
  };
  const mousCloseFunc = () => {
    gsap.fromTo(
      "#menu-close path",
      1.5,
      { drawSVG: "50% 50%", stroke: "#14CF93", ease: Linear.easeInOut },
      { drawSVG: "0% 100%", stroke: "#fff" }
    );
  };
  useGSAP(() => {
    gsap.from(".gsapAnime", 1, { y: -100, ease: Linear.easeIn });
  });
  const manuBTN = () => {
    document.body.classList.add("fixedBody");
    const tl = gsap.timeline({ ease: Linear.easeInOut });
    tl.to(".lineContainer", 0.2, { zIndex: 200 })
      .staggerFromTo(
        ".lines",
        3,
        { x: "-100%" },
        { x: "100%" },
        0.05,
        "collabe"
      )
      .to(".hamenu", 2, { left: 0, position: "fixed" }, "collabe+=0.2")
      .fromTo(
        ".hamenu .menu-text .text",
        1,
        { opacity: 0 },
        { opacity: 1 },
        "collabe+=1.5"
      )
      .fromTo(".manuLogo", 1, { opacity: 0 }, { opacity: 1 }, "collabe+=2")
      .fromTo(".close-menu", 1, { opacity: 0 }, { opacity: 1 }, "collabe+=2")
      .fromTo(
        ".dmenu",
        1,
        { y: 100, opacity: 0, stagger: { each: 0.2 } },
        { y: 0, opacity: 1 },
        "collabe+=1.8"
      )
      .fromTo(
        ".item",
        1,
        { y: 100, opacity: 0, stagger: { each: 0.5 } },
        { y: 0, opacity: 1 },
        "collabe+=2.5"
      )
      .to(".lineContainer", 0.2, { zIndex: 0 });
  };
  const manuCloseBTN = () => {
    document.body.classList.remove("fixedBody");
    const tl = gsap.timeline({});
    tl.to(".hamenu", 1, { left: "-100%" });
  };
  const closeManu = () => {
    document.body.classList.remove("fixedBody");
    const tl = gsap.timeline({ ease: Linear.easeInOut });
    tl.to(".dmenu", 0.5, { y: -100, opacity: 0 }, "collabe")
      .to(".hamenu .menu-text .text", 0.5, { opacity: 0 }, "collabe+=0.18")
      .to(".manuLogo", 0.5, { opacity: 0 }, "collabe+=0.2")
      .to(".close-menu", 0.5, { opacity: 0 }, "collabe+=0.2")
      .to(".item", 0.5, { y: -100, opacity: 0 }, "collabe+=0.25")
      .to(".hamenu", 0.8, { left: "-100%" }, "collabe+=1.3");
  };

  const [navTrue, setNavTrue] = useState();

  useEffect(() => {
    if (
      location.pathname === "/career" ||
      location.pathname === "/contact" ||
      location.pathname === "/termscondition" ||
      location.pathname === "/privacypolicy" ||
      location.pathname === "/product" ||
      location.pathname === "/cryptocurrency-exchnage-services" ||
      location.pathname === "/nft" ||
      location.pathname === "/tokens" ||
      location.pathname === "/dapp" ||
      location.pathname === "/defi" ||
      location.pathname === "/wallet" ||
      location.pathname === "/web-3-game-development" ||
      location.pathname === "/other-services" ||
      location.pathname === "/about" ||
      location.pathname === "/portfolio"
    ) {
      setTimeout(() => {
        setNavTrue(true);
      }, 2000);
    } else {
      setTimeout(() => {
        setNavTrue(false);
      }, 2000);
    }
  });

  return (
    <div id="smooth-wrapper wrapper">
      <div id="content">
        <nav className="navbar navbar-expand-lg nav-crev">
          <div className="container">
            <div className="flex justify-center items-center">
              <LeftHorizontalDivider />
              <NavLink
                className="logo  gsapAnime logoBrans"
                to="/"
                aria-label="logobrand"
              >
                <img
                  src={HeaderLogo}
                  loading="lazy"
                  alt="Logo"
                  className="image-4 float-start"
                />
              </NavLink>
            </div>
            <div className="flex justify-center items-center gap-10">
              <NavLink
                className={"gsapAnime logoBrans burderBTN"}
                onMouseEnter={mousFunc}
                onClick={manuBTN}
                aria-label="burgerBTN"
              >
                <BurgerBTN />
              </NavLink>
              <RightHorizontalDivider />
            </div>
          </div>
        </nav>
        <LineComponent />
        <Divider />

        <div className="hamenu one-scroll">
          <div className="logo icon-img-100 manuLogo logoAnim burgerBTN">
            <NavLink
                className="logo  gsapAnime logoBrans"
                to="/"
                aria-label="logobrand"
              >
                <img
                  src={HeaderLogo}
                  loading="lazy"
                  alt="Logo"
                  className="image-4 float-start"
                />
              </NavLink>
          </div>
          <div className="close-menu cursor-pointer">
            <NavLink
              onClick={manuCloseBTN}
              onMouseEnter={mousCloseFunc}
              aria-label="close-btn"
            >
              <CloseBTNSVG />
            </NavLink>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="menu-text -z-1">
                  <div className="text">
                    <h2>Menu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="menu-links">
                  <ul className="main-menu rest">
                    <NavManu
                      navigate={props.home}
                      label={"Home"}
                      name={"Home"}
                      route={"/"}
                    />
                    <NavManu
                      navigate={closeManu}
                      label={"About"}
                      name={"About"}
                      route={"/about"}
                    />

                    {navTrue ? null : (
                      <NavManu
                        navigate={props.service}
                        label={"SERVICES"}
                        name={"SERVICES"}
                      />
                    )}
                    {navTrue ? null : (
                      <NavManu
                        navigate={props.advantage}
                        label={"ADVANTAGES"}
                        name={"ADVANTAGES"}
                      />
                    )}
                    {navTrue ? null : (
                      <NavManu
                        navigate={props.blockchain}
                        label={"Blockchain"}
                        name={"Blockchain"}
                      />
                    )}
                    <NavManu
                      navigate={closeManu}
                      label={"Product"}
                      name={"Product"}
                      route={"/product"}
                    />
                    <NavManu
                      navigate={closeManu}
                      label={"Portfolio"}
                      name={"Portfolio"}
                      route={"/portfolio"}
                    />
                    <NavManu
                      navigate={closeManu}
                      label={"Career"}
                      name={"Career"}
                      route={"/career"}
                    />
                    <NavManu
                      navigate={closeManu}
                      label={"Contact"}
                      name={"Contact"}
                      route={"/contact"}
                    />
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="cont-info">
                  <div className="item mb-50">
                    <h3 className="sub-title mb-15 opacity-7">Address</h3>
                    <p className="addssX">
                      Dubai,
                      <br />
                      1918 Tamani Arts Building, Business Bay, Dubai, UAE
                    </p>
                  </div>
                  <div className="item mb-50">
                    <h3 className="sub-title mb-15 opacity-7">Social Media</h3>
                    <ul className="rest social-text">
                      <SocialLink
                        name={"Facebook"}
                        to={"#"}
                        label={"Facebook"}
                      />
                      <SocialLink
                        name={"Twitter"}
                        to={"https://twitter.com/360CoreInc"}
                        label={"twitter"}
                      />
                      <SocialLink
                        name={"LinkedIn"}
                        to={"https://www.linkedin.com/company/79066664/admin/"}
                        label={"LinkedIn"}
                      />
                      <SocialLink
                        name={"Instagram"}
                        to={"https://www.instagram.com/360coreinc/"}
                        label={"Instagram"}
                      />
                    </ul>
                  </div>
                  <div className="item mb-40">
                    <h3 className="sub-title mb-15 opacity-7">Contact Us</h3>
                    <p className="contact">
                      <NavLink to="mailto:hello@360core.inc" aria-label="gmail">
                        hello@360core.inc
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
