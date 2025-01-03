const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company_name: { type: String, required: true },
    age: { type: Number, required: true },
    dob: { type: Date, required: true },
    image: { type: String, required: true },  // Store image URL or base64 string
});

module.exports = mongoose.model('User', userSchema);