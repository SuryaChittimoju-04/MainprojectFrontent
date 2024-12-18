// src/components/auth/SignupForm.jsx
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({ onSignup, onNavigateLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    dob: '',
    phone: '',
    email: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Card className="w-[480px] p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Patient Registration</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            placeholder="Aadhar Number"
            value={formData.aadhar}
            onChange={(e) => setFormData({ ...formData, aadhar: e.target.value.replace(/\D/g, '') })}
            maxLength={12}
            required
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            required
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
            maxLength={10}
            required
          />
          <Input
            type="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <label className="block text-gray-700">Gender</label>
          <select className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required>
            <option value="">Select Gender</option>
            {[{gender:"Male"},{gender:"Female"}].map((gender)=>(
              <option value={gender.gender} key={gender.gender}>{gender.gender}</option>
            ))}
          </select>
          <Button type="submit" className="w-full">Register</Button>
          <p className="text-center">
            Already registered? <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline"
              type="button"
            >
              Login
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};