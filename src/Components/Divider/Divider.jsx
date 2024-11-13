// Divider.js
import React from 'react';
import Lottie from 'lottie-react';
import leftLineLottie from '../../assets/json/Untitled.lottie (17).json';
import leftRoundLottie from '../../assets/json/Untitled.lottie (22).json';
import leftCenterLottie from '../../assets/json/Untitled.lottie (12).json';
import rightCenterLottie from '../../assets/json/Untitled.lottie (12).json';
import rightRoundLottie from '../../assets/json/Untitled.lottie (22).json';
import rightLineLottie from '../../assets/json/Untitled.lottie (17).json';

const Divider = () => {
  return (
    <div className="divider-main">
      {/* Left Divider Line */}
      <div className="divider-line-left left-5">
        <div className="lottie-animation-3-copy">
          <Lottie
            animationData={leftLineLottie}
            loop
            style={{ width: '100%', height: '2px' }}
          />
        </div>
      </div>

      {/* Center Divider with Round Lottie Animation */}
      <div className="divider">
        <div className="round">
          <div className="div-block-58">
            <div className="lottie-animation-57">
              <Lottie
                animationData={leftRoundLottie}
                loop
                style={{ width: '12px', height: '12px' }}
              />
            </div>
          </div>
        </div>

        {/* Center Divider Line */}
        <div className="divider-line">
          <div className="lottie-animation-2">
            <Lottie
              animationData={leftCenterLottie}
              loop
              style={{ width: '100%', height: '2px' }}
            />
          </div>

          {/* Mirrored Lottie Animation */}
          <div className="lottie-animation-2-flip">
            <Lottie
              animationData={rightCenterLottie}
              loop
              style={{ width: '100%', height: '2px' }}
            />
          </div>
        </div>

        {/* Right Round Divider with Lottie */}
        <div className="round">
          <div className="div-block-58">
            <div className="lottie-animation-57">
              <Lottie
                animationData={rightRoundLottie}
                loop
                style={{ width: '12px', height: '12px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Divider Line */}
      <div className="divider-line-right">
        <div className="lottie-animation-3">
          <Lottie
            animationData={rightLineLottie}
            loop
            style={{ width: '100%', height: '2px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Divider;
