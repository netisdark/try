import Menu from "../../models/menu.js";
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure uploads/menu directory exists
const uploadDir = path.resolve('uploads/menu');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

export const uploadMenuImage = [
  upload.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    // You may want to serve static files from /uploads in your server config
    const url = `/uploads/menu/${req.file.filename}`;
    res.json({ success: true, url, file: req.file });
  }
];

export const postMenu = async (req, res) => {
  const { category, item } = req.body;

  try {
    const menuCategory = await Menu.findOne({ category });

    if (!menuCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    menuCategory.items.push(item);
    await menuCategory.save();

    res.json({ message: "Item added successfully", menuCategory });
  } catch (err) {
    res.status(500).json({ message: "Error adding item", error: err.message });
  }
};

export const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ message: "Error fetching menu", error: err.message });
  }
};

// Edit a menu item
export const editMenuItem = async (req, res) => {
  const { category, itemId, updates } = req.body;
  try {
    const menuCategory = await Menu.findOne({ category });
    if (!menuCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const item = menuCategory.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    Object.assign(item, updates);
    await menuCategory.save();
    res.json({ message: 'Item updated successfully', item });
  } catch (err) {
    res.status(500).json({ message: 'Error updating item', error: err.message });
  }
};

// Delete a menu item
export const deleteMenuItem = async (req, res) => {
  const { category, itemId } = req.body;
  if (!category || !itemId) {
    return res.status(400).json({ message: 'Category and itemId are required.' });
  }
  try {
    const menuCategory = await Menu.findOne({ category });
    if (!menuCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    if (!Array.isArray(menuCategory.items) || menuCategory.items.length === 0) {
      return res.status(404).json({ message: 'No items found in this category' });
    }
    const item = menuCategory.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    menuCategory.items.pull({ _id: itemId });
    await menuCategory.save();
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error('Error deleting menu item:', err);
    res.status(500).json({ message: 'Error deleting item', error: err.message });
  }
};
