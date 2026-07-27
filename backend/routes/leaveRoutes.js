
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
    createLeave,
    getAllLeaves,
    updateLeaveStatus
} = require("../controllers/leaveController");

// Home Route
router.get("/", (req, res) => {
    res.send("Welcome to the LeaveFlow Backend");
});

// Create Leave
router.post("/leaves", authMiddleware, createLeave);

// Get All Leave Requests
router.get("/leaves", authMiddleware, getAllLeaves);

// Approve / Reject Leave
router.patch(
    "/leaves/:id",
    authMiddleware,
    roleMiddleware("admin"),
    updateLeaveStatus
);

module.exports = router;