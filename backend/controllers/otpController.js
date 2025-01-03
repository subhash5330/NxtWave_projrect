const verifyOTP = (req, res) => {
    const { email, otp } = req.body;
    
    // Verify OTP (in real scenario, check the OTP expiration and match)
    if (otp === '123456') {  // Simplified for example purposes
        return res.status(200).json({ message: "OTP verified", email });
    }
    
    return res.status(400).json({ message: "Invalid or expired OTP" });
};

module.exports = { verifyOTP };