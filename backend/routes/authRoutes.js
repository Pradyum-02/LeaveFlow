const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {

    registerUser,
    loginUser,
    getAllUsers

} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    getAllUsers
);

module.exports = router;