"use client";
import { useEffect } from "react";
import Button from "./Button";
import BurgerBTN from "./BurgerBTN";
import CloseBTNSVG from "./CloseBTNSVG";
import Image from "next/image";
import Link from "next/link";
import gsap, { Linear } from "gsap";
// import { useGSAP } from "@gsap/react";cls

// Define the interface for Header props (if needed in future)
// interface HeaderProps {
//   home: () => void;
//   service: () => void;
//   projects: () => void;
// }

const Header: React.FC = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  const mousFunc = () => {
    if (typeof window !== "undefined") {
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
    }
  };

  const mousCloseFunc = () => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        "#menu-close path",
        1.5,
        { drawSVG: "50% 50%", stroke: "#FF6762", ease: Linear.easeInOut },
        { drawSVG: "0% 100%", stroke: "#000" }
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.from(".gsapAnime", 1, { y: -100, ease: Linear.easeIn });
    }
  }, []);

  const manuBTN = () => {
    if (typeof window !== "undefined") {
      document.body.classList.add("fixedBody");
      const tl = gsap.timeline();
      tl.to(".hamenu", 0.5, { left: 0, position: "fixed" })
        .fromTo(".hamenu .menu-text .text", 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(".manuLogo", 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(".close-menu", 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(
          ".dmenu",
          0.5,
          { y: 100, opacity: 0, stagger: { each: 0.1 } },
          { y: 0, opacity: 1 }
        )
        .fromTo(
          ".item",
          0.5,
          { y: -30, opacity: 0, stagger: { each: 0.5 } },
          { y: 0, opacity: 1 }
        )
        .call(() => document.body.classList.remove("fixedBody"));
    }
  };

  const manuCloseBTN = () => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("fixedBody");
      gsap.to(".hamenu", 0.5, { left: "-100%" });
    }
  };

  const handleNavClick = () => {
    manuCloseBTN();
  };

  return (
    <header
      data-scroll-index="0"
      className="fixed w-full top-0 flex items-center z-10 justify-between py-3 bg-white shadow-lg"
    >
      <div className="container mx-auto px-8 transition-shadow duration-300">
        <div className="flex flex-row justify-between items-center px-4">
          {/* Logo */}
          <Link
            className="logo gsapAnime logoBrans cursor-pointer"
            href="/"
            aria-label="logobrand"
          >
            <Image
              src="/assets/images/logo.svg"
              loading="eager"
              alt="Logo"
              width={70}
              height={70}
              className="image-4 w-[70px] headerLogo cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center gap-4">
            <nav className="flex gsapAnime items-center bdevBTN gap-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link href="/contact">
              <Button className="gsapAnime" text="Let's Talk" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden justify-center items-center md:gap-4">
            <Link
              href="#"
              className="gsapAnime logoBrans burderBTN"
              onMouseEnter={mousFunc}
              onClick={manuBTN}
              aria-label="burgerBTN"
            >
              <BurgerBTN />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="hamenu one-scroll">
          <div className="container">
            <div className="flex justify-between items-center pt-5 px-5">
              {/* Mobile Logo */}
              <div className="logo icon-img-100 manuLogo logoAnim burgerBTN">
                <Link
                  className="logo gsapAnime logoBrans cursor-pointer"
                  href="/"
                  onClick={handleNavClick}
                  aria-label="logobrand"
                >
                  <Image
                    src="/assets/images/logo.svg"
                    loading="eager"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="image-4 w-16 headerLogo cursor-pointer"
                  />
                </Link>
              </div>

              {/* Close Menu Button */}
              <div className="close-menu cursor-pointer">
                <Link
                  href="#"
                  onClick={manuCloseBTN}
                  onMouseEnter={mousCloseFunc}
                  aria-label="close-btn"
                >
                  <CloseBTNSVG />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="menu-links">
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
                    </ul>
                  </nav>
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
