import React from "react";
import Lottie from 'lottie-react';  // Correct default import syntax
import rightLottie from "../../assets/json/Untitled.lottie (15).json";

const RightHorizontalDivider = () => {
  return (
    <div className="wrapper-deco-right deco-top">
      <div className="verticale-deco-line">
        <div className="lottie-animation-4-copy">
          <Lottie
            animationData={rightLottie} // Right animation data (using same JSON for both sides here)
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

export default RightHorizontalDivider;
