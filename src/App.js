import React from 'react';
import './App.css';
import LoginForm from "./components/Login/LoginForm";
import Footer from "./components/Footer/Footer";
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container"> {/* Container element for layout */}
        <LoginForm />
        {/* <Navbar /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;