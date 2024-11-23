import React from "react";
import Lottie from 'lottie-react';  // Correct default import syntax
import leftLottie from '../../assets/json/Untitled.lottie (13).json';  // Corrected file path

const HomeLeftHorizontalDivider = () => {
  return (
    <div className="wrapper-deco--left deco-top">
      <div className="verticale-deco-line">
        <div className="lottie-animation-4-copy">
          <Lottie
            animationData={leftLottie} // Left animation data
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLeftHorizontalDivider;
