const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// ✅ Port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Serve pair.html on main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pair.html"));
});

// Router Load - DO NOT TOUCH
const pairRouter = require("./inconnu");
app.use("/", pairRouter);

// ✅ Health Check for Render/UptimeRobot
app.get("/ping", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "INCONNU BOY Server Running",
        uptime: process.uptime()
    });
});

// ✅ Health Check alternate name
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Server Start - 0.0.0.0 is MANDATORY for Render
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
