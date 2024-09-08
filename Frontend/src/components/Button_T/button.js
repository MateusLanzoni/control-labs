import React, { useState } from 'react';
import Square_0 from '../Square_0/Square_0';
import Square_3 from '../Square_3/Square_3';
import BImg0 from '../../assets/piso0.png'; // Imagen del botón inicial
import BImg3 from '../../assets/piso3.png'; // Imagen del botón cuando está toggled

import './button.css';

const Button_T = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {isToggled ? (
        <Square_3 /> // Renderiza el componente Square_3
      ) : (
        <Square_0 /> // Renderiza el componente Square_0
      )}
      <button onClick={toggleState} className="toggle-button">
        {/* Cambia la imagen del botón según el estado */}
        <img
          src={isToggled ? BImg3 : BImg0} // Cambia la imagen según el estado
          alt="Toggle Button"
        />
      </button>
    </div>
  );
};

export default Button_T;
