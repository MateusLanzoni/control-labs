import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import UserProfile from '../components/UserProfile/Userprofile';
import EventHistory from '../components/EventHistory/EventHistory';
import '../pagesCss/UserInfoPage.css'; // Specific styles for this page

const UserInfoPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <UserProfile />
        <EventHistory />
      </div>
      <Footer />
    </div>
  );
};

export default UserInfoPage;
