import React, { useState } from 'react';
import '../pagesCss/CreateEventPage.css';

const CreateEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [lab, setLab] = useState('3rd Floor'); // Default lab, can be adjusted

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create event payload
    const event = {
      title,
      description,
      date,
      start_time: startTime,
      end_time: endTime,
      lab,
    };

    // TODO: Replace with actual API call
    console.log('Event created:', event);

    // Clear the form
    setTitle('');
    setDescription('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setLab('3rd Floor');
  };

  return (
    <div className="create-event-page">
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lab">Select Lab:</label>
          <select id="lab" value={lab} onChange={(e) => setLab(e.target.value)}>
            <option value="3rd Floor">3rd Floor</option>
            <option value="1st Floor">1st Floor</option>
          </select>
        </div>

        <button type="submit" className="create-event-button">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
