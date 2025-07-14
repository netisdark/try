import { getDB } from '../../config/db.js';

export const getTodaySalesData = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders').find().toArray();
    const today = new Date();
    const todaySales = orders.filter(order => {
      const orderDate = new Date(order.createdAt);
      return orderDate.toDateString() === today.toDateString();
    });
    res.status(200).json({
      success: true,
      message: "Today's sales data fetched successfully",
      data: todaySales
    });
  } catch (error) {
    console.error("Error fetching today's sales data:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching today's sales data",
      error: error.message
    });
  }
}; 