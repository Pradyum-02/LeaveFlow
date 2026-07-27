const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================================
// Register User
// ======================================

const registerUser = async (req, res) => {

    try {

        const {
            fullName,
            employeeId,
            email,
            password,
            department
        } = req.body;

        // Check all fields
        if (
            !fullName ||
            !employeeId ||
            !email ||
            !password ||
            !department
        ) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }

        // Check if email already exists
        const existingEmployee = await User.findOne({ employeeId });

if (existingEmployee) {
    return res.status(400).json({
        message: "Employee ID already exists."
    });
}

const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered."
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            fullName,
            employeeId,
            email,
            password: hashedPassword,
            department
        });

        // Send response without password
        res.status(201).json({
            message: "User Registered Successfully.",
            user: {
                id: user._id,
                fullName: user.fullName,
                employeeId: user.employeeId,
                email: user.email,
                department: user.department,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong.",
            error: error.message
        });

    }

};


// ======================================
// Login User
// ======================================

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check if fields are empty
        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter email and password."
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password."
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        // Success Response
        res.status(200).json({

            message: "Login Successful.",

            token,

            user: {

                id: user._id,
                fullName: user.fullName,
                employeeId: user.employeeId,
                email: user.email,
                department: user.department,
                role: user.role

            }

        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong.",
            error: error.message
        });

    }

};


// ======================================
// Export Controllers
// ======================================

module.exports = {

    registerUser,
    loginUser

};