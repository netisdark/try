import { getDB } from '../../config/db.js';

export const getThreePeakHours = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders').find().toArray();
    // Count orders per hour and collect customer IDs per hour
    const hourStats = orders.reduce((acc, order) => {
      const hour = new Date(order.createdAt).getHours();
      if (!acc[hour]) {
        acc[hour] = { orderCount: 0, customers: new Set() };
      }
      acc[hour].orderCount += 1;
      if (order.customerId) {
        acc[hour].customers.add(order.customerId);
      }
      return acc;
    }, {});
    // Convert to array and sort by order count
    const sortedPeakHours = Object.entries(hourStats)
      .map(([hour, stats]) => ({
        hour: parseInt(hour),
        orderCount: stats.orderCount,
        customerCount: stats.customers.size
      }))
      .sort((a, b) => b.orderCount - a.orderCount)
      .slice(0, 3)
      .map(({ hour, orderCount, customerCount }) => ({
        timeRange: `${hour}:00 - ${hour + 1}:00`,
        orderCount,
        customerCount
      }));
    // Wrap the result in an object as requested
    res.status(200).json({
      success: true,
      message: 'Top 3 peak hours fetched successfully',
      data: sortedPeakHours
    });
  } catch (error) {
    console.error('Error fetching top 3 peak hours:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching top 3 peak hours',
      error: error.message
    });
  }
}; 