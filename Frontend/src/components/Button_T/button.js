import React, { useState } from 'react';
import Square_0 from '../Square_0/Square_0';
import Square_3 from '../Square_3/Square_3';
import './button.css';

const Button_T = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {isToggled ? (
        <Square_3 /> // Renderiza el primer componente
      ) : (
        <Square_0 /> // Renderiza el segundo componente
      )}
      <button onClick={toggleState}>
        {isToggled ? 'Show First Component' : 'Show Second Component'}
      </button>
    </div>
  );
};

export default Button_T;