import Menu from "../../models/menu.js";

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
