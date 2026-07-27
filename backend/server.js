require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const leaveRoutes = require("./routes/leaveRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes

app.use("/", leaveRoutes);
app.use("/auth", authRoutes);

// Start Server

const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {

        console.log(`Server is running on http://localhost:${PORT}`);

    });

};

startServer();