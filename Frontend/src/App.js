import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/testPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<LoginPage />} /> //https.controllasbs.com
          <Route path="/main" element={<MainPage />} />
          <Route path="/testpage" element={<TestPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App; 