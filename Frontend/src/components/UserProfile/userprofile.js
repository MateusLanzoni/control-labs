import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Styling specific to UserProfile
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate(); // Use the hook inside the component

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the JWT token
    navigate('/'); // Redirect to login page
  };

  // Fetch user info on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/'); // Redirect to login
      return;
    }
    // Fetch user data if token exists
    axios
      .get('http://localhost:3000/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUserInfo(response.data))
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 401) {
          navigate('/');
        }
      });
  }, [navigate]);

  return (
    <div className="user-profile">
      <img
        className="profile-pic"
        src={userInfo.profilePicture || '/default-avatar.png'}
        alt="Profile"
      />
      <h2>{`Usuario #${userInfo.id || ''} ${userInfo.name || 'N/A'}`}</h2>
      <p>{userInfo.email || 'No email available'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
