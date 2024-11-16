import React, { useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import InputField from '../components/InputField/InputField';
import TextArea from '../components/TextArea/TextArea';
import DatePicker from '../components/DatePicker/DatePicker';
import TimePicker from '../components/TimePicker/TimePicker';
import SelectLab from '../components/SelectLab/SelectLab';
import '../pagesCss/CreateEventPage.css';

const CreateEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [lab, setLab] = useState('3rd Floor');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, description, date, start_time: startTime, end_time: endTime, lab };
    console.log('Event created:', event);
    setTitle('');
    setDescription('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setLab('3rd Floor');
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <h1>Create New Event</h1>
        <form onSubmit={handleSubmit} className="event-form">
          <InputField label="Event Title:" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextArea label="Description:" value={description} onChange={(e) => setDescription(e.target.value)} />
          <DatePicker label="Date:" value={date} onChange={(e) => setDate(e.target.value)} />
          <TimePicker label="Start Time:" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <TimePicker label="End Time:" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          <SelectLab label="Select Lab:" value={lab} onChange={(e) => setLab(e.target.value)} />
          <button type="submit" className="create-event-button">Create Event</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEventPage;
