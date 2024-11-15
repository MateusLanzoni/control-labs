import React, { useState } from 'react';
import Square_0 from '../Square_0/Square_0';
import Square_3 from '../Square_3/Square_3';

import './Button.css';

const Button_T = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="center-screen">

      {active ? <Square_3 /> : <Square_0 />}
      <div className="toggle-button">
        <div
          className={`button-section ${active ? "active" : ""}`}
          onClick={handleClick}
        >
          3er piso
        </div>
        <div
          className={`button-section ${!active ? "active" : ""}`}
          onClick={handleClick}
        >
          piso 0
        </div>
      </div>
      
    </div>
  );
};

export default Button_T;