// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import BurgerBTN from "./buttons/BurgerBTN";
// import CloseBTNSVG from "./buttons/CloseBTNSVG";
// import NavItem from "./NavItem";
// import gsap, { Linear } from "gsap";
// import Logo from "../assets/images/logo.svg";
// import Button from "./buttons/Button";

// const Header = () => {
//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/#about" },
//     { name: "Services", href: "/#services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const mousFunc = () => {
//     gsap.fromTo(
//       "#menu-burger line",
//       0.7,
//       { drawSVG: "50% 50%", stroke: "#000", ease: Linear.easeInOut },
//       { drawSVG: "0% 100%", stroke: "#FF6762" }
//     );
//   };

//   const mousCloseFunc = () => {
//     gsap.fromTo(
//       "#menu-close path",
//       1.5,
//       { drawSVG: "50% 50%", stroke: "#FF6762", ease: Linear.easeInOut },
//       { drawSVG: "0% 100%", stroke: "#000" }
//     );
//   };

//   // useEffect(() => {
//   //   gsap.from(".gsapAnime", { y: -100, duration: 1, ease: Linear.easeIn });
//   // }, []);

//   const manuBTN = () => {
//     document.body.classList.add("fixedBody");
//     gsap.to(".hamenu", { left: 0, position: "fixed", duration: 0.5 });
//   };

//   const manuCloseBTN = () => {
//     document.body.classList.remove("fixedBody");
//     gsap.to(".hamenu", { left: "-100%", duration: 0.5 });
//   };

//   return (
//     <header className="fixed w-full top-0 flex items-center z-10 justify-between py-3 bg-white shadow-lg">
//       <div className="container mx-auto px-8">
//         <div className="flex justify-between items-center px-4">
//           <Link to="/" className="logo gsapAnime logoBrans cursor-pointer">
//             <img src={Logo} alt="Logo" width={70} height={70} className="w-[70px] headerLogo cursor-pointer" />
//           </Link>

//           <div className="hidden lg:flex items-center gap-4">
//             <nav className="flex gsapAnime items-center gap-6">
//               {navItems.map((item) => (
//                 <NavItem key={item.name} {...item} />
//               ))}
//             </nav>
//             <Link to="/contact">
//               <Button className="gsapAnime" text="Let's Talk" />
//             </Link>
//           </div>

//           <div className="flex lg:hidden items-center">
//             <button onMouseEnter={mousFunc} onClick={manuBTN} aria-label="burgerBTN">
//               <BurgerBTN />
//             </button>
//           </div>
//         </div>

//         <div className="hamenu one-scroll fixed top-0 left-[-100%] w-full h-screen bg-white transition-all">
//           <div className="container">
//             <div className="flex justify-between items-center pt-5 px-5">
//               <Link to="/" onClick={manuCloseBTN} className="manuLogo">
//                 <img src={Logo} alt="Logo" width={70} height={70} className="w-16 cursor-pointer" />
//               </Link>
//               <button onClick={manuCloseBTN} onMouseEnter={mousCloseFunc} aria-label="close-btn">
//                 <CloseBTNSVG />
//               </button>
//             </div>

//             <div className="menu-links mt-10">
//               <nav>
//                 <ul className="main-menu">
//                   {navItems.map((item) => (
//                     <li key={item.name}>
//                       <Link to={item.href} onClick={manuCloseBTN} className="dmenu">
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Button from "./buttons/Button";
import BurgerBTN from "./buttons/BurgerBTN";
import CloseBTNSVG from "./buttons/CloseBTNSVG";
import NavItem from "./NavItem";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import Logo from "../assets/images/logo.svg";


const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
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
      className="fixed w-full top-0 flex items-center z-10 justify-between py-3 bg-white shadow-lg"
    >
      <div className="container mx-auto px-8 transition-shadow duration-300">
        <div className="flex flex-row justify-between items-center px-4">
          <Link
            className="logo gsapAnime logoBrans cursor-pointer"
            to="/"
            aria-label="logobrand"
          >
            <img
              src={Logo}
              alt="Logo"
              width={70}
              height={70}
              className="image-4 w-[70px] headerLogo cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex justify-between items-center gap-4">
            <nav className="flex gsapAnime items-center bdevBTN gap-6">
              {navItems.map((item) => (
                <NavItem key={item.name} href={item.href} {...item} />
              ))}
            </nav>
            <Link to="/Contact">
              <Button className="gsapAnime" text="Let's Talk" />
            </Link>
          </div>

          <div className="flex lg:hidden justify-center items-center md:gap-4">
            <Link
              to=""
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
              <div className="logo icon-img-100 manuLogo logoAnim burgerBTN">
                <Link
                  className="logo gsapAnime logoBrans cursor-pointer"
                  to="/"
                  onClick={handleNavClick}
                  aria-label="logobrand"
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    width={70}
                    height={70}
                    className="image-4 w-16 headerLogo cursor-pointer"
                  />
                </Link>
              </div>
              <div className="close-menu cursor-pointer">
                <Link
                  to=""
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
                    <nav>
                      <ul className="main-menu rest">
                        {navItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={handleNavClick}
                              aria-label={item.name}
                              className="link cursor-pointer dmenu"
                            >
                              <span
                                className="fill-text"
                                data-text={item.name}
                              >
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
