import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Calendar from '../components/Calendar/calendar';
import Button_T from '../components/Button_T/button';
import Footer from '../components/Footer/footer';

function MainPage() {
  return (
    <div className="main-container">
      <Navbar />
      <Calendar />
      <Button_T />
      <Footer />
    </div>
  );
}

export default MainPage;
