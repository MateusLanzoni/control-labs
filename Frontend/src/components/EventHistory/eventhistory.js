import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventHistory.css';  // Specific styles for this component

const EventHistory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/7/events')  // Replace with your endpoint
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="event-history">
      <h3>Historia</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventHistory;
