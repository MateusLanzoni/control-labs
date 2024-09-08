import React, { useState } from 'react';
//import Calendar from '../Calendar/calendar';
import Footer from '../Footer/footer';
import './button.css';
import Square_3 from '../Square_3/Square_3';

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
        <Footer /> // Renderiza el segundo componente
      )}
      <button onClick={toggleState}>
        {isToggled ? 'Show First Component' : 'Show Second Component'}
      </button>
    </div>
  );
};

export default Button_T;