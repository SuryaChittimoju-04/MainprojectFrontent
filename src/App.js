import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = (aadhar) => {
    setUserData({ aadhar });
  };

  const handleSignup = (data) => {
    setUserData(data);
  };

  const handleLogout = () => {
    setUserData(null);
  };

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* Redirect to home if logged in, otherwise show login */}
          <Route
            path="/"
            element={userData ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          
          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} />}
          />
          
          <Route
            path="/home"
            element={userData ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          
          {/* Fallback route if the user enters an undefined route */}
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
