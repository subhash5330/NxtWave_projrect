const express = require('express');
const { registerUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.delete('/remove-account', deleteUser);

module.exports = router;