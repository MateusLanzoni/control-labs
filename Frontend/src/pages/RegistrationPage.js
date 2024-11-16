import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1>Register</h1>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
