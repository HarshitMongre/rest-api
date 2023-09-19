// config/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("../routes/userRoutes.js");
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB URL)
mongoose.connect('mongodb+srv://harshitmongre0604:12345@apiapp.dvoj2dw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', userRoutes);

module.exports = app;
