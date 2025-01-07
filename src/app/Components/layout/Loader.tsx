import React from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { EasePack, SlowMo } from "gsap/all";

gsap.registerPlugin(TextPlugin, SlowMo, EasePack);

const Loader = () => {
  // useEffect(() => {
  //   const timeline = gsap.timeline();
  //   const svgPath = document.getElementById("svg");

  // GSAP animation timeline
  // timeline
  //   .to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
  //     delay: 3,
  //     y: -100,
  //     opacity: 0,
  //   })
  //   .to(svgPath, {
  //     duration: 0.2,
  //     attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
  //     ease: "power2.easeIn",
  //   })
  //   .to(svgPath, {
  //     duration: 0.1,
  //     attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
  //     ease: "power2.easeOut",
  //   })
  //   .to(".loader-wrap", { y: -1500 })
  //   .to(".loader-wrap", { zIndex: -1, display: "none" });
  // }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>C</span>
          <span>T</span>
          <span>E</span>
          <span>C</span>
          <span>H</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
