import React, { useState } from 'react';
import './RegistrationForm.css'; // Styling specific to RegistrationForm
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send a POST request to create a user
      await axios.post('http://localhost:3000/api/register', {
        username,
        email,
        password,
      });

      // Show success message using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'User Created Successfully!',
        text: 'You can now log in with your credentials.',
        confirmButtonText: 'Go to Login',
      }).then(() => {
        navigate('/'); // Redirect to the login page after confirmation
      });
    } catch (err) {
      console.error(err);
      setError('Error creating user. Please try again.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="register-button">Create User</button>
        <button
          type="button"
          className="back-button"
          onClick={handleBackToLogin}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
