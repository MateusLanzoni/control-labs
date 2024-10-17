import React from 'react';
import Footer from "../components/Footer/footer";
import Navbar from "../components/NavBar/navbar";
import Calendar from '../components/Calendar/calendar';
import Button_T from '../components/Button_T/button';
import EventCard from '../components/EventCard/eventcard';
import '..'

function TestPage() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <Calendar />
        <Button_T />
        <Navbar />
        <EventCard
        image= "../assets/close.png"
        title="Campamento de programación"
        description="Un evento donde aprenderás a programar"
        date="21/08 | 9am - 11am"
        />

        <EventCard
        image= "../assets/close.png"
        title="Seminario de ciberseguridad"
        description="Aprende a proteger tus datos"
        date="21/08 | 1pm - 3pm"
        />
        <Footer />
      </div>
    </div>
  );
}

export default TestPage; 