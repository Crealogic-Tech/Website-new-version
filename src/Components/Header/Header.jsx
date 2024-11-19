// src/components/Header.js
import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap, { Linear } from "gsap";
import Divider from "../Divider/Divider";
import LeftHorizontalDivider from "../Divider/LeftHorizontalDivider";
import RightHorizontalDivider from "../Divider/RightHorizontalDivider";
import HeaderLogo from "../../assets/images/logo/3.png";

const Header = (props) => {
  const [navTrue, setNavTrue] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const restrictedPaths = [
      "/career",
      "/contact",
      "/termscondition",
      "/privacypolicy",
      "/product",
      "/cryptocurrency-exchnage-services",
      "/nft",
      "/tokens",
      "/dapp",
      "/defi",
      "/wallet",
      "/web-3-game-development",
      "/other-services",
      "/about",
      "/portfolio",
    ];

    if (restrictedPaths.includes(location.pathname)) {
      setTimeout(() => setNavTrue(true), 2000);
    } else {
      setTimeout(() => setNavTrue(false), 2000);
    }
  }, []);

  const openMenu = () => {
    document.body.classList.add("fixedBody");
    gsap
      .timeline()
      .to(menuRef.current, { duration: 1, left: 0, ease: Linear.easeInOut })
      .fromTo(
        ".menu-links .main-menu li",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, ease: Linear.easeOut }
      );
  };

  const closeMenu = () => {
    document.body.classList.remove("fixedBody");
    gsap.to(menuRef.current, {
      duration: 1,
      left: "-100%",
      ease: Linear.easeInOut,
    });
  };

  return (
    <>
      <section className="flex mx-auto flex-row  ">
        <div className="flex flex-1">
          {/* Left Lottie animation */}
          <LeftHorizontalDivider />
          <div className="nav-wrapper">
          <nav className="navbar navbar-expand-lg nav-crev">
            <div className="container">
              <NavLink
                className="logo icon-img-100"
                to="/"
                aria-label="logobrand"
              >
                <img
                  src={HeaderLogo}
                  loading="lazy"
                  alt="Logo"
                  className="image-4"
                />
              </NavLink>
              <button
                className="burger-btn"
                onClick={openMenu}
                aria-label="Open Menu"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </nav>
          </div>
          {/* Right Lottie animation */}
        </div>
      <RightHorizontalDivider />
      </section>
      <Divider />

      <div id="smooth-wrapper" className="wrapper">
        <div id="content">
          <nav className="navbar navbar-expand-lg nav-crev">
            <div className="container">
              <NavLink
                className="logo icon-img-100"
                to="/"
                aria-label="logobrand"
              >
                <img
                  src={HeaderLogo}
                  loading="lazy"
                  alt="Logo"
                  className="image-4"
                />
              </NavLink>
              <button
                className="burger-btn"
                onClick={openMenu}
                aria-label="Open Menu"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </nav>

          {/* Menu */}
          {/* <div ref={menuRef} className="hamenu one-scroll" style={{ left: "-100%" }}>
            <div className="menu-header">
              <NavLink className="manuLogo" to="/" aria-label="Logo">
                <img src={HeaderLogo} alt="Logo" />
              </NavLink>
              <button className="close-menu" onClick={closeMenu} aria-label="Close Menu">
                ✕
              </button>
            </div>
            <div className="container">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                  </li>
                  {!navTrue && (
                    <>
                      <li>
                        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/advantages" onClick={closeMenu}>Advantages</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blockchain" onClick={closeMenu}>Blockchain</NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/career" onClick={closeMenu}>Career</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>


    </>
  );
};

export default Header;
