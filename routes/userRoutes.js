// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// POST /bfhl
router.post('/bfhl', userController.postData);

// GET /bfhl
router.get('/bfhl', userController.getOperationCode);

module.exports = router;
