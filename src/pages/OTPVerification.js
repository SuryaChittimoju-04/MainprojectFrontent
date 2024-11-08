import React from 'react'
import OTPVerificationForm from '../components/auth/OTPVerificationForm';

const OTPVerification = ({ onOTPVerification }) => {
    return (
        <OTPVerificationForm onOTPVerification={onOTPVerification} />
    )
}

export default OTPVerification;