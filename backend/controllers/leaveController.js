const Leave = require("../models/Leave");
const User = require("../models/User");

// ========================================
// Create a New Leave Request
// ========================================

const createLeave = async (req, res) => {

    try {

        const {
    leaveType,
    reason,
    days
} = req.body;

const user = await User.findById(req.user.id);

if (!user) {
    return res.status(404).json({
        message: "User not found."
    });
}

        // Validation
        if (
    !leaveType ||
    !reason ||
    !days
) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }

        // Save Leave
        const leave = await Leave.create({
    employeeName: user.fullName,
    employeeId: user.employeeId,
    department: user.department,
    leaveType,
    reason,
    days
});

        res.status(201).json({
            message: "Leave submitted successfully.",
            leave
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong.",
            error: error.message
        });

    }

};

// ========================================
// Get All Leave Requests
// ========================================

const getAllLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find();

        res.status(200).json(leaves);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch leave requests.",
            error: error.message
        });

    }

};

// ========================================
// Update Leave Status
// ========================================

const updateLeaveStatus = async (req, res) => {

    try {

        const { id } = req.params;
        const { status } = req.body;

        // Allow only Approved or Rejected
        if (
            status !== "Approved" &&
            status !== "Rejected"
        ) {
            return res.status(400).json({
                message: "Invalid status."
            });
        }

        const leave = await Leave.findByIdAndUpdate(
            id,
            {
                status
            },
            {
                new: true
            }
        );

        if (!leave) {
            return res.status(404).json({
                message: "Leave not found."
            });
        }

        res.status(200).json({
            message: "Leave status updated successfully.",
            leave
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong.",
            error: error.message
        });

    }

};

// ========================================
// Export Controllers
// ========================================

module.exports = {
    createLeave,
    getAllLeaves,
    updateLeaveStatus
};