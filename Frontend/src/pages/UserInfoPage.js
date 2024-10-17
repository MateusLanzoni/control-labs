import React from 'react';
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import UserProfile from '../components/UserProfile/userprofile';
import EventHistory from '../components/EventHistory/eventhistory';
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
