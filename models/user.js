const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  reportCount: { type: Number, default: 0 }  // Tracks number of reports submitted
});

// Method to increase the report count when a report is uploaded
UserSchema.methods.incrementReportCount = function () {
  this.reportCount += 1;
  return this.save();  // Save the updated user object
};

module.exports = mongoose.model('User', UserSchema);
