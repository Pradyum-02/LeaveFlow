const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        // Get token from request header
        const authHeader = req.header("Authorization");

if (!authHeader) {
    return res.status(401).json({
        message: "Access Denied. No Token Provided."
    });
}

const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

        // Check if token exists
        if (!token) {
            return res.status(401).json({
                message: "Access Denied. No Token Provided."
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Save logged-in user data
        req.user = decoded;

        // Move to next function
        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token."
        });

    }

};

module.exports = authMiddleware;