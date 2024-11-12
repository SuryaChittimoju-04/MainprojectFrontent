import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import auth from './store/auth/actions';
import OTPVerification from './pages/OTPVerification';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const [userData, setUserData] = useState(user);
  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      dispatch(auth.refreshTokenRequest());
    }
  }, [user, dispatch]);

  const handleOTPVerification = (data) => {
    dispatch(auth.otpVerificationRequest(data));

  }

  const handleSignup = (data) => {
    dispatch(auth.signupRequest(data));
  };

  const handleLogout = () => {
    setUserData(null);
    window.localStorage.removeItem("api_token");
  };

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route
            path="/"
            element={userData ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={userData ? <Navigate to="/home" /> : <Login />}
          />

          <Route
            path="/otpVerification"
            element={<OTPVerification onOTPVerification={handleOTPVerification} />}
          />

          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} />}
          />

          <Route
            path="/home"
            element={userData ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
          />

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
