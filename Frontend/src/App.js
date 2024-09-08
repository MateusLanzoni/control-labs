import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App; 