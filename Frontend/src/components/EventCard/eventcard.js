import React from "react";
import './eventcard.css'; // Asegúrate de importar tu archivo de estilos
import Calendar from "../Calendar/calendar"; // Importa el componente Calendar

const EventCard = ({ image, title, description, date }) => {
  return (
    <div className="event-card">
      {/* Imagen del evento */}
      <div>
        <img src={image} alt={title} />
      </div>

      {/* Detalles del evento */}
      <div className="event-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="event-date">{date}</p>
      </div>

      {/* Botón para participar */}
      <div className="event-button">
        <div className="calendar-icon">
          <Calendar />
        </div>
        <button>participar en el evento</button>
      </div>
    </div>
  );
};

export default EventCard;
