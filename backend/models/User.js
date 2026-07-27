const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    employeeId: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["employee", "admin"],
        default: "employee"
    }

}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;