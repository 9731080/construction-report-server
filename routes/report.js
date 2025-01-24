const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const User = require('../models/User');

// Endpoint to submit a report
router.post('/submit-report', async (req, res) => {
    const { username, description, photo, location, latitude, longitude } = req.body;

    try {
        // Create a new report using the Report model
        const newReport = new Report({
            username,
            description,
            photo,       // If a photo is provided
            location,    // Location address (human-readable)
            latitude,    // Latitude from geolocation
            longitude,   // Longitude from geolocation
        });

        // Save the report to the database
        await newReport.save();

        // Optionally, update the user's report count or reward status
        const user = await User.findOne({ username });
        if (user) {
            await user.incrementReportCount();  // Assuming you have a method for this
        }

        res.status(200).json({ message: "Report submitted successfully." });
    } catch (error) {
        console.error("Error submitting report:", error);
        res.status(500).json({ error: "Failed to submit report." });
    }
});

module.exports = router;
