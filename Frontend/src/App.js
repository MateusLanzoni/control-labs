import React from 'react';
import './App.css';
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Calendar from './components/Calendar/calendar';
import Button_T from './components/Button_T/button';

function App() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <LoginForm />
        <Calendar />
        <Button_T />
        <Navbar />
        <Footer />

      </div>
    </div>
  );
}

export default App; 