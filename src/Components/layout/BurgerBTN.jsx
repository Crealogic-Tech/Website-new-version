import React from 'react';

const BurgerBTN = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="menu-burger"
      version="1.1"
      viewBox="0 0 24 24"
      style={{ width: 40 ,stroke:'#000 !important' }}
    >
      <line
        x1="22.9"
        y1="4.7"
        x2="1.1"
        y2="4.7"
        style={{
          stroke: 'black',
          strokeWidth: '1.5px',
          strokeLinecap: 'round',
          fill: 'none',
        }}
      />
      <line
        x1="22.9"
        y1="9.6"
        x2="5.9"
        y2="9.6"
        style={{
          stroke: 'black ',
          strokeWidth: '1.5px',
          strokeLinecap: 'round',
          fill: 'none',
        }}
      />
      <line
        x1="22.9"
        y1="14.4"
        x2="2.4"
        y2="14.4"
        style={{
          stroke: 'black',
          strokeWidth: '1.5px',
          strokeLinecap: 'round',
          fill: 'none',
        }}
      />
      <line
        x1="22.9"
        y1="19.3"
        x2="10.9"
        y2="19.3"
        style={{
          stroke: 'black',
          strokeWidth: '1.5px',
          strokeLinecap: 'round',
          fill: 'none',
        }}
      />
    </svg>
  );
};

export default BurgerBTN;
