import React from 'react';
import './App.css';
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Calendar from './components/Calendar/calendar';

function App() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <LoginForm />
        <Calendar /> 
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;