import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
});

const categorySchema = new mongoose.Schema({
  category: String,
  items: [itemSchema],
});

const Menu = mongoose.model("Menu", categorySchema);
export default Menu;