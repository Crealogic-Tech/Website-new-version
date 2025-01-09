"use client";
// import React from "react";
import Button from "./Button";
import BurgerBTN from "./BurgerBTN";
import CloseBTNSVG from "./CloseBTNSVG";
// import NavManu from "./NavMenu";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import NavItem from "../NavItem";
import Link from "next/link"; 
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { BrowserRouter } from "react-router";

// Define the interface for Header props
// interface HeaderProps {
//   home: () => void;
//   service: () => void;
//   projects: () => void;
// }

const Header: React.FC = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Services",
      href: "/#services",
      // dropdown: true,
      // dropdownItems: [
      //   { name: "Web Development Services", href: "/services" },
      //   { name: "Web Application Development", href: "/services" },
      //   { name: "Mobile App Development", href: "/services" },
      //   { name: "Blockchain Development", href: "/services" },
      //   { name: "Custom Software Development", href: "/services" },
      // ],
    },
    // { name: "Projects", href: "/#project" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];


  const mousFunc = () => {
    gsap.fromTo(
      "#menu-burger line",
      0.7,
      {
        drawSVG: "50% 50%",
        stroke: "#000",
        ease: Linear.easeInOut,
        transformOrigin: "0%",
      },
      { drawSVG: "0% 100%", stroke: "#FF6762", transformOrigin: "100%" }
    );
  };


  const mousCloseFunc = () => {
    gsap.fromTo(
      "#menu-close path",
      1.5,
      { drawSVG: "50% 50%", stroke: "#FF6762", ease: Linear.easeInOut },
      { drawSVG: "0% 100%", stroke: "#000" }
    );
  };


  useGSAP(() => {
    gsap.from(".gsapAnime", 1, { y: -100, ease: Linear.easeIn });
  });

  const manuBTN = () => {
    document.body.classList.add("fixedBody");
    const tl = gsap.timeline();
  
    // Immediate show for the menu without delay
    tl.to(".hamenu", 0.5, { left: 0, position: "fixed" }) // No delay here
      .fromTo(
        ".hamenu .menu-text .text",
        0.5, // Reduced duration for immediate visibility
        { opacity: 0 },
        { opacity: 1 }
      )
      .fromTo(".manuLogo", 0.5, { opacity: 0 }, { opacity: 1 })
      .fromTo(".close-menu", 0.5, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".dmenu",
        0.5, // Reduced duration for immediate visibility
        { y: 100, opacity: 0, stagger: { each: 0.1 } },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        ".item",
        0.5, // Reduced duration for immediate visibility
        { y: 100, opacity: 0, stagger: { each: 0.5 } },
        { y: 0, opacity: 1 }
      )
      .call(() => document.body.classList.remove("fixedBody")); // Reset body class after animation
  };
  
  const manuCloseBTN = () => {
    document.body.classList.remove("fixedBody");
    const tl = gsap.timeline({});
    tl.to(".hamenu", 0.5, { left: "-100%" });
  };

  const handleNavClick = () => {
    manuCloseBTN();
  };
  return (
    <header
      data-scroll-index="0"
      className="fixed w-full top-0 flex items-center z-10 justify-between py-3  bg-white shadow-lg"
    >
      <div className="container mx-auto px-8 transition-shadow duration-300">
        <div className="flex flex-row justify-between items-center px-4">

          <Link
            className="logo gsapAnime logoBrans cursor-pointer"
            href="/"
            aria-label="logobrand"
          >
            <Image
              src={Logo}
              loading="eager"
              alt="Logo"
              width={70} 
              height={70}
              className="image-4 w-[70px] headerLogo cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex justify-between items-center gap-4">

            <nav className="flex gsapAnime items-center bdevBTN gap-6">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </nav>


            <Link href="/contact">
              <Button className="gsapAnime" text="Let's Talk" />
            </Link>
          </div>


          <div className="flex lg:hidden justify-center items-center md:gap-4">
            <Link
              href="" 
              className="gsapAnime logoBrans burderBTN"
              onMouseEnter={mousFunc}
              onClick={manuBTN}
              aria-label="burgerBTN"
            >
              <BurgerBTN />
            </Link>
          </div>
        </div>

        <div className="hamenu one-scroll">
          <div className="container">
            <div className="flex justify-between items-center pt-5 px-5 ">
              <div className="logo icon-img-100 manuLogo logoAnim burgerBTN ">
                <Link
                  className="logo gsapAnime logoBrans cursor-pointer"
                  href="/"
                  onClick={handleNavClick}
                  aria-label="logobrand"
                >
                  <Image
                    src={Logo}
                    loading="eager"
                    alt="Logo"
                    width={70} 
              height={70}
                    className="image-4 w-16 headerLogo cursor-pointer"
                  />
                </Link>
              </div>
              <div className="close-menu cursor-pointer">
                <Link
                  href={""}
                  onClick={manuCloseBTN}
                  onMouseEnter={mousCloseFunc}
                  aria-label="close-btn"
                >
                  <CloseBTNSVG />
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="menu-links">
                  <BrowserRouter>
                    <nav>
                      <ul className="main-menu rest">
                        {navItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={handleNavClick}
                              aria-label={item.name}
                              className="link cursor-pointer dmenu"
                            >
                              <span className="fill-text" data-text={item.name}>
                                {item.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                        {/* <NavManu
                          onClick={handleNavClick}
                          label="Home"
                          name="Home"
                          route="/"
                        />
                        <NavManu
                          onClick={handleNavClick}
                          label="About"
                          name="About"
                          route="/#about"
                        />
                        <NavManu
                          onClick={handleNavClick}
                          label="Services"
                          name="Services"
                          route="/#service"
                        />
                        <NavManu
                          onClick={handleNavClick}
                          label="Projects"
                          name="Projects"
                          route="/#project"
                        /> */}
                        {/* <NavManu onClick={handleNavClick }
                          label="Block"
                          name="Block"
                          route="/block"
                        /> */}
                        {/* <NavManu
                          onClick={handleNavClick}
                          label="Contact"
                          name="Contact"
                          route="/contact"
                        /> */}
                      </ul>
                    </nav>
                  </BrowserRouter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
