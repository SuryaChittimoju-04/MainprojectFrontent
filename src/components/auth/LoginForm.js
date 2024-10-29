// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ onLogin }) => {
  const [aadhar, setAadhar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aadhar.length !== 12) {
      setError('Aadhar number must be 12 digits');
      return;
    }
    onLogin(aadhar);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Card className="w-96 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Hospital Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="text"
            placeholder="Enter Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value.replace(/\D/g, ''))}
            maxLength={12}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">Login</Button>
          <p className="text-center">
            New patient? <button 
              onClick={navigate("/signup")}
              className="text-blue-500 hover:underline"
              type="button"
            >
              Sign up
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};