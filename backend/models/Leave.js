const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({

    employeeName: {
        type: String,
        required: true
    },

    employeeId: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    leaveType: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    reason: {
        type: String,
        required: true
    },

    days: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Leave", leaveSchema);