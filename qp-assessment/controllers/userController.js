const GroceryItem = require('../models/groceryItem');

exports.viewGroceryItems = async (req, res) => {
  try {
    const items = await GroceryItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.bookGroceryItems = async (req, res) => {
  try {
    const { items } = req.body;
    // Logic for booking items
    res.status(200).json({ message: 'Grocery items booked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
