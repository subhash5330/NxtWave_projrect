import React, { useState } from 'react';

const OTPForm = () => {
    const [otp, setOtp] = useState('');

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/otp/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ otp })
        });
        const data = await response.json();
        if (response.ok) {
            alert('OTP verified');
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleVerifyOTP}>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
            <button type="submit">Verify OTP</button>
        </form>
    );
};

export default OTPForm;