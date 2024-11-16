import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/testPage';
import CreateEventPage from './pages/CreateEventPage';
import LabPage from './pages/LabPage.js';
import UserInfoPage from './pages/UserInfoPage';
import ReservationPage from './pages/ReservationPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} /> {/* Default route for login */}
          <Route path="/register" element={<RegistrationPage />} /> {/* Default route for login */}
          {/* Protected routes */}
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/testpage"
            element={
              <ProtectedRoute>
                <TestPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-event"
            element={
              <ProtectedRoute>
                <CreateEventPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lab"
            element={
              <ProtectedRoute>
                <LabPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-info"
            element={
              <ProtectedRoute>
                <UserInfoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <ReservationPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
