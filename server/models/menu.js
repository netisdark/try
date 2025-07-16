import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String, // image URL/path
  imgFile: {
    filename: String,
    path: String,
    mimetype: String,
    size: Number,
  },
  available: { type: Boolean, default: true }, // availability flag
});

const categorySchema = new mongoose.Schema({
  category: String,
  items: [itemSchema],
});

const Menu = mongoose.model("Menu", categorySchema);
export default Menu;