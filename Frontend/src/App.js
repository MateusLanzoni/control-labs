import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/testPage';
import CreateEventPage from './pages/CreateEventPage';
import LabPage from './pages/LabPage.js';
import UserInfoPage from './pages/UserInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<LoginPage />} /> {/* Default route for login */}
          <Route path="/main" element={<MainPage />} /> {/* Main dashboard page */}
          <Route path="/testpage" element={<TestPage />} /> {/* Test page */}
          <Route path="/create-event" element={<CreateEventPage />} /> {/* Page to create events */}
          <Route path="/lab" element={<LabPage />} /> {/* Lab information page */}
          <Route path="/user-info" element={<UserInfoPage />} /> {/* User info page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
