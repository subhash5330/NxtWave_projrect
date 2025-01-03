const express = require('express');
const { verifyOTP } = require('../controllers/otpController');
const router = express.Router();

router.post('/verify', verifyOTP);

module.exports = router;