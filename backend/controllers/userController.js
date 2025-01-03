const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { name, email, password, company_name, age, dob, image } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        company_name,
        age,
        dob,
        image,
    });

    try {
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(400).json({ message: "Error registering user", error });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.body;

    try {
        await User.deleteOne({ email });
        return res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: "Error deleting account", error });
    }
};

module.exports = { registerUser, deleteUser };