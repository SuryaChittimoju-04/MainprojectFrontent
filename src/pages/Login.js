// src/pages/Login.jsx
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

const Login = ({ onLogin, onNavigateSignup }) => (
  <LoginForm onLogin={onLogin} onNavigateSignup={onNavigateSignup} />
);

export default Login;