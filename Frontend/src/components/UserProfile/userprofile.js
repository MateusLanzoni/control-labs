import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';  // Styling specific to UserProfile

const handleLogout = () => {
  localStorage.removeItem('authToken'); // Clear the JWT token
  navigate('/'); // Redirect to login page
};

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/7')  // Adjust API URL
      .then(response => setUserInfo(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-profile">
      <img
        className="profile-pic"
        src={userInfo.profilePicture || '/default-avatar.png'}
        alt="Profile"
      />
      <h2>{`Usuario #${userInfo.id} ${userInfo.name}`}</h2>
      <p>{userInfo.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
