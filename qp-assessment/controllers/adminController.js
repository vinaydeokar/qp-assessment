const GroceryItem = require('../models/groceryItem');

exports.addGroceryItem = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newItem = new GroceryItem({ name, price, quantity });
    await newItem.save();
    res.status(201).json({ message: 'Grocery item added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewGroceryItems = async (req, res) => {
  try {
    const items = await GroceryItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeGroceryItem = async (req, res) => {
  try {
    const item = await GroceryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await item.remove();
    res.status(200).json({ message: 'Grocery item removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGroceryItem = async (req, res) => {
  try {
    const item = await GroceryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    const { name, price, quantity } = req.body;
    item.name = name;
    item.price = price;
    item.quantity = quantity;
    await item.save();
    res.status(200).json({ message: 'Grocery item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.manageInventory = async (req, res) => {
  try {
    const item = await GroceryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    const { quantity } = req.body;
    item.quantity += quantity;
    await item.save();
    res.status(200).json({ message: 'Inventory managed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
