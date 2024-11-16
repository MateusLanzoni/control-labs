import React from 'react';
import RegistrationForm from '../components/Registration/RegistrationForm';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <Navbar />
      <div className="registration-container">
        <h1>Register</h1>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
