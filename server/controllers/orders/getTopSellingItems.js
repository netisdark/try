import { getDB } from '../../config/db.js';

export const getTopSellingItems = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders').find().toArray();
    const sellingItems = orders.reduce((acc, order) => {
      order.items.forEach(item => {
        acc[item.name] = (acc[item.name] || 0) + 1;
      });
      return acc;
    }, {});
    const sortedSellingItems = Object.entries(sellingItems)
      .sort((a, b) => b[1] - a[1]);
    res.status(200).json({
      success: true,
      message: 'All selling items fetched successfully',
      data: sortedSellingItems
    });
  } catch (error) {
    console.error('Error fetching selling items:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching selling items',
      error: error.message
    });
  }
}; 