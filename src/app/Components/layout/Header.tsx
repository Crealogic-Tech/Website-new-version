"use client";
import Button from "./Button";
import BurgerBTN from "./BurgerBTN";
import CloseBTNSVG from "./CloseBTNSVG";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import NavItem from "../NavItem";
import Link from "next/link"; 
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  const animateBurger = () => {
    gsap.fromTo("#menu-burger line", 0.7, { drawSVG: "50% 50%", stroke: "#000" }, { drawSVG: "0% 100%", stroke: "#FF6762" });
  };

  const animateClose = () => {
    gsap.fromTo("#menu-close path", 1.5, { drawSVG: "50% 50%", stroke: "#FF6762" }, { drawSVG: "0% 100%", stroke: "#000" });
  };

  useGSAP(() => {
    gsap.from(".gsapAnime", 1, { y: -100, ease: Linear.easeOut });
  });

  const openMenu = () => {
    document.body.classList.add("fixedBody");
    gsap.timeline()
      .to(".hamenu", 0.5, { left: 0, position: "fixed" })
      .fromTo(".hamenu .menu-text .text, .manuLogo, .close-menu", 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(".dmenu, .item", 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
  };

  const closeMenu = () => {
    document.body.classList.remove("fixedBody");
    gsap.to(".hamenu", 1, { left: "-102%" });
  };

  return (
    <header className="fixed w-full top-0 flex items-center z-10 justify-between py-3 bg-white shadow-lg">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center px-4">
          <Link href="/" aria-label="logobrand" className="logo gsapAnime">
            <Image src={Logo} alt="Logo" width={70} height={70} className="headerLogo" />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </nav>
            <Link href="/contact">
              <Button className="gsapAnime" text="Let's Talk" />
            </Link>
          </div>

          <div className="lg:hidden">
            <Link href="#" onMouseEnter={animateBurger} onClick={openMenu} aria-label="burgerBTN">
              <BurgerBTN />
            </Link>
          </div>
        </div>

        <div className="hamenu">
          <div className="container">
            <div className="flex justify-between items-center pt-10 px-5">
              <Link href="/" onClick={closeMenu} aria-label="logobrand" className="manuLogo">
                <Image src={Logo} alt="Logo" width={70} height={70} className="headerLogo" />
              </Link>
              <Link href="#" onClick={closeMenu} onMouseEnter={animateClose} aria-label="close-btn">
                <CloseBTNSVG />
              </Link>
            </div>
            <nav>
              <ul className="main-menu">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} onClick={closeMenu} aria-label={item.name} className="link dmenu">
                      <span className="fill-text" data-text={item.name}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
