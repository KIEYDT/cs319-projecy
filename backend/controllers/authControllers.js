const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");


exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User is exists" });
        }

        const user = await User.create({ name, email, password });
        const token = generateToken(user._id);
        res.status(201).json({ message: "Account created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "can not regis" });
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "email or password is incorrect" });
        }

        const token = generateToken(user._id);
        res.status(200).json({ message: "OK", user, token });
    } catch (error) {
        res.status(500).json({ message: "Bad request" });
    }
};


exports.getProfile = async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({ message: "OK", user });
};


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15d" });
};