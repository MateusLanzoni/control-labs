import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import Footer from '../components/Footer/Footer';

function LoginPage() {
  return (
    <div className="login-container">
        <div className="login-form-container">
          <LoginForm />
          <Footer />
        </div>
    </div>
  );
}

export default LoginPage;
