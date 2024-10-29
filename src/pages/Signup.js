// src/pages/Signup.jsx
import React from 'react';
import { SignupForm } from '../components/auth/Signup';

const Signup = ({ onSignup, onNavigateLogin }) => (
  <SignupForm onSignup={onSignup} onNavigateLogin={onNavigateLogin} />
);

export default Signup;