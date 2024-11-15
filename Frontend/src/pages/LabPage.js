import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import LabButtons from '../components/Button_T/Button';
import DatePicker from '../components/Calendar/Calendar';
import EventsList from '../components/EventHistory/EventHistory';
import '../pagesCss/LabPage.css';
import axios from 'axios';

const LabPage = () => {
  const [selectedLab, setSelectedLab] = useState('3er piso');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events based on the selected lab and date
    const formattedDate = selectedDate.toISOString().split('T')[0]; // format date
    axios.get(`http://localhost:3000/api/events?lab=${selectedLab}&date=${formattedDate}`)
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, [selectedLab, selectedDate]);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <h1>Laboratorio {selectedLab}</h1>
        <LabButtons selectedLab={selectedLab} onSelectLab={setSelectedLab} />
        <DatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        <EventsList events={events} />
      </div>
      <Footer />
    </div>
  );
};

export default LabPage;
