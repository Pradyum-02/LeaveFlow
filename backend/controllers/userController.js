const User = require("../models/User");

const getAllUsers = async (req, res) => {

    try {

        const users = await User.find(
            {},
            "-password"
        ).sort({ fullName: 1 });

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({

            message: "Failed to fetch users.",

            error: error.message

        });

    }

};

module.exports = {

    registerUser,
    loginUser,
    getAllUsers

};