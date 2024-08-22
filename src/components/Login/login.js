import React, { useState } from 'react';
import './login.css';
import backgroundImage from '../../assets/loginbackground.png'; 

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
        // Aquí puedes manejar la lógica de autenticación
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
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

                <img src={backgroundImage} alt="Background" className="bg" />

            </form>   
    );
};

export default LoginForm;
