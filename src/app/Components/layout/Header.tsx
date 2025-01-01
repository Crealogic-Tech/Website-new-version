"use client";
// import React from "react";
import Button from "./Button";
import BurgerBTN from "./BurgerBTN";
import CloseBTNSVG from "./CloseBTNSVG";
import NavManu from "./NavMenu";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import NavItem from "../NavItem";
import Link from "next/link"; // Import Link from Next.js
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
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: true,
      dropdownItems: [
        { name: "Web Development Services", href: "/services" },
        { name: "Web Application Development", href: "/services" },
        { name: "Mobile App Development", href: "/services" },
        { name: "Blockchain Development", href: "/services" },
        { name: "Custom Software Development", href: "/services" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle hover animation for burger menu
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

  // Handle hover animation for close menu button
  const mousCloseFunc = () => {
    gsap.fromTo(
      "#menu-close path",
      1.5,
      { drawSVG: "50% 50%", stroke: "#FF6762", ease: Linear.easeInOut },
      { drawSVG: "0% 100%", stroke: "#000" }
    );
  };

  // GSAP animation when component mounts
  useGSAP(() => {
    gsap.from(".gsapAnime", 1, { y: -100, ease: Linear.easeIn });
  });

  // // Burger menu button animation
  const manuBTN = () => {
    document.body.classList.add("fixedBody");
    const tl = gsap.timeline({ ease: Linear.easeInOut });

    tl.to(".hamenu", 2, { left: 0, position: "fixed" }, "collabe+=0.2")
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

      .call(() => document.body.classList.remove("fixedBody")); // Reset body class after animation
  };

  // Close the burger menu
  const manuCloseBTN = () => {
    document.body.classList.remove("fixedBody");
    const tl = gsap.timeline({});
    tl.to(".hamenu", 1, { left: "-102%" });
  };

  return (
    <header data-scroll-index="0" className="fixed w-full top-0 flex items-center z-50 justify-between py-3  bg-white shadow-lg">
      <div className="container mx-auto px-4 transition-shadow duration-300">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Link
            className="logo gsapAnime logoBrans cursor-pointer"
            href="/"
            aria-label="logobrand"
          >
            <Image
              src={Logo}
              loading="lazy"
              alt="Logo"
              className="image-4 w-16 headerLogo cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex justify-between items-center gap-4">
            {/* Navigation */}
            <nav className="flex gsapAnime items-center gap-6">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </nav>

            {/* Contact Button */}
            <Button className="gsapAnime" text="Let's Talk" />
          </div>

          {/* Burger menu button for small screens */}
          <div className="flex lg:hidden justify-center items-center md:gap-4">
            <Link
              href="" // Add the target route path here
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
            <div className="flex justify-between items-center pt-10 px-5 ">
              <div className="logo icon-img-100 manuLogo logoAnim burgerBTN ">
                <Link
                  className="logo gsapAnime logoBrans cursor-pointer"
                  href="/"
                  aria-label="logobrand"
                >
                  <Image
                    src={Logo}
                    loading="lazy"
                    alt="Logo"
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
                        <NavManu label="Home" name="Home" route="/" />
                        <NavManu label="About" name="About" route="/about" />
                        <NavManu
                          label="Services"
                          name="Services"
                          route="/service"
                        />
                        <NavManu
                          label="Projects"
                          name="Projects"
                          route="/projects"
                        />
                        <NavManu
                          label="Portfolio"
                          name="Portfolio"
                          route="/portfolio"
                        />
                        <NavManu
                          label="Contact"
                          name="Contact"
                          route="/contact"
                        />
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
