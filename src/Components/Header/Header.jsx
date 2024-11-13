// src/components/Header.js
import React from 'react';
import Lottie from 'lottie-react';  // Correct default import syntax

import Divider from '../Divider/Divider';
import LeftHorizontalDivider from '../Divider/LeftHorizontalDivider';
import RightHorizontalDivider from '../Divider/RightHorizontalDivider';

const Header = () => {
  return (
    <>
    
    <section className="navbar">
      <div className="div-block-41">
        {/* Left Lottie animation */}
        <LeftHorizontalDivider />

        {/* Navbar section */}
        <div className="nav-wrapper">
          <a href="/" aria-current="page" className="w-inline-block w--current">
            <img
              src="https://cdn.prod.website-files.com/60530d64d0c48cbd53eb4a84/668f9cb4189e5b91ea78e559_Lw%20Logo.svg"
              loading="lazy"
              alt="Logo"
              className="image-4"
            />
          </a>
          <a href="#" className="nav-button hide w-button">
            Tools
          </a>
        </div>

        {/* Right Lottie animation */}
        <RightHorizontalDivider />
      </div>
    </section>
      <Divider/>
    </>
  );
};

export default Header;
