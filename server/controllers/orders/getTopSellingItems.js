import { getDB } from '../../config/db.js';

export const getTopSellingItems = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders').find().toArray();
    const topSellingItems = orders.reduce((acc, order) => {
      order.items.forEach(item => {
        acc[item.name] = (acc[item.name] || 0) + 1;
      });
      return acc;
    }, {});
    const sortedTopSellingItems = Object.entries(topSellingItems)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    res.status(200).json({
      success: true,
      message: 'Top 5 selling items fetched successfully',
      data: sortedTopSellingItems
    });
  } catch (error) {
    console.error('Error fetching top 5 selling items:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching top 5 selling items',
      error: error.message
    });
  }
}; 