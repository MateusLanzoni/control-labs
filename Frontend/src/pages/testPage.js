import React from 'react';
import Footer from "../components/Footer/footer";
import Navbar from "../components/NavBar/navbar";
import Calendar from '../components/Calendar/calendar';
import Button_T from '../components/Button_T/button';

function TestPage() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <Calendar />
        <Button_T />
        <Navbar />
        <Footer />

      </div>
    </div>
  );
}

export default TestPage; 