const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

const {
    getAllUsers
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    getAllUsers
);

module.exports = router;