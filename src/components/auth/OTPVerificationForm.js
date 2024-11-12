import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../ui/Card';
import InputField from '../ui/Input';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const OTPVerificationForm = ({ onOTPVerification }) => {
  const { email, aadharNumber } = useSelector((state) => state.auth.userData);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    "otp": otp,
    "email": email,
    "aadharNumber": aadharNumber
  });
  const bearer = window.localStorage.getItem("api_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (bearer) {
      navigate("/home");
    }else if (email === undefined && !bearer) {
      navigate("/login");
    }
  }, [bearer, navigate, email]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }
    if (email === undefined) {
      navigate("/login");
      return;
    }
    setData({ otp, email, aadharNumber });
    if (data.email === undefined || data.otp.length !== 6) {
      setError("OTP must be 6 digits");
    } else {
      onOTPVerification(data);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Card className="w-96 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Enter OTP</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="number"
            placeholder="Enter 6 Digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            maxLength={6}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">Verify OTP</Button>
        </form>
      </Card>
    </div>
  )
}

export default OTPVerificationForm