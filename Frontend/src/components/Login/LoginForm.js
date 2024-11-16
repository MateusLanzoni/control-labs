import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Logging in with:', { username, password });
      localStorage.setItem('authToken', 'mocked-jwt-token'); // Simulating token storage
      navigate('/main');
    } catch (err) {
      setError('Invalid username or password'); // Handle login error
    }
  };

  const handleCreateUser = () => {
    navigate('/register'); // Redirect to the "Create User" page
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button className="create-user-button" onClick={handleCreateUser}>
        Create User
      </button>
    </div>
  );
};

export default LoginForm;
