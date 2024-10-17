import React from 'react';
import './EventsList.css';

const EventsList = ({ events }) => {
  return (
    <div className="events-list">
      {events.slice(0, 3).map(event => (
        <div key={event.id} className="event-item" onClick={() => window.location.href = `/event/${event.id}`}>
          <img src={event.icon} alt={event.name} className="event-icon" />
          <div className="event-details">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
