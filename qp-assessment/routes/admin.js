const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/add', adminController.addGroceryItem);
router.get('/view', adminController.viewGroceryItems);
router.delete('/remove/:id', adminController.removeGroceryItem);
router.put('/update/:id', adminController.updateGroceryItem);
router.put('/manageInventory/:id', adminController.manageInventory);

module.exports = router;
