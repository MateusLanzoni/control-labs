import React from 'react';
import './App.css';
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <LoginForm />
        <Navbar /> 
        <Footer />
      </div>
      
    </div>
  );
}

export default App;