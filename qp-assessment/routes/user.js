const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/viewItems', userController.viewGroceryItems);
router.post('/bookItems', userController.bookGroceryItems);

module.exports = router;
