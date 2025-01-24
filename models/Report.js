const mongoose = require('mongoose');

// Define the Report schema
const ReportSchema = new mongoose.Schema({
    username: { type: String, required: true },        // User submitting the report
    description: { type: String, required: true },      // Description of the issue
    photo: { type: String },                            // URL or path to the uploaded photo (if any)
    location: { type: String, required: true },         // Location (address) from geolocation
    latitude: { type: Number, required: true },         // Latitude of the location
    longitude: { type: Number, required: true },        // Longitude of the location
    dateSubmitted: { type: Date, default: Date.now },   // Timestamp of when the report was submitted
});

// Create the Report model using the schema
const Report = mongoose.model('Report', ReportSchema);

// Export the Report model for use in other files
module.exports = Report;
