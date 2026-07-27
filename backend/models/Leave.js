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

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;