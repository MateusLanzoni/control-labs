// AdditionalComponent.js
import React from 'react';
import './DaySpecification.css'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const DaySpecification = ({ day }) => {
  return (
    <div className="day-Specification">
      <h2>Selected Day: {day}</h2>
    </div>
  );
};

export default DaySpecification;