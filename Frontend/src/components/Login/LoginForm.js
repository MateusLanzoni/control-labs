import React, { useState } from 'react';
import './login.css';
import backgroundImage from '../../assets/loginbackground.png'; // Make sure this path is correct

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div 
            className="login-container" 
            style={{ backgroundImage: `url(${backgroundImage})` }}  // Set background image
        >
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
