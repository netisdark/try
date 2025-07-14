import { getDB } from '../../config/db.js';

export const getPeakHours = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders').find().toArray();
    const peakHours = orders.reduce((acc, order) => {
      const hour = new Date(order.createdAt).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});
    const sortedPeakHours = Object.entries(peakHours)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([hour, count]) => `${hour}:00 - ${parseInt(hour) + 1}:00 (${count} orders)`);
    res.status(200).json({
      success: true,
      message: 'Peak hours fetched successfully',
      data: sortedPeakHours
    });
  } catch (error) {
    console.error('Error fetching peak hours:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching peak hours',
      error: error.message
    });
  }
}; 