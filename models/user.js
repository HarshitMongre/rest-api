// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  dob: Date,
  email: String,
  rollNumber: String,
  numbers: [String],
  alphabets: [String],
  highestAlphabet: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
