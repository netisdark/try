import { getDB } from '../../config/db.js';

export const getDashboardData = async (req, res) => {
  try {
    let { range } = req.body;
    range = range?.toLowerCase() || 'lifetime'; // Normalize input

    const db = getDB();
    const now = new Date();
    let startDate, endDate;

    switch (range) {
      case 'today':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        break;
      case 'yesterday':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case 'thisweek':
        const firstDayOfWeek = now.getDate() - now.getDay(); // Sunday as the first day
        startDate = new Date(now.getFullYear(), now.getMonth(), firstDayOfWeek);
        endDate = new Date(now.getFullYear(), now.getMonth(), firstDayOfWeek + 7);
        break;
      case 'thismonth':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1); // Start of next month
        break;
      case 'thisyear':
        startDate = new Date(now.getFullYear(), 0, 1);
        endDate = new Date(now.getFullYear() + 1, 0, 1); // Start of next year
        break;
      case 'lifetime':
      default:
        startDate = new Date(0); // Beginning of Unix epoch
        endDate = new Date();    // Now
        break;
    }

    // Fetch orders within the date range
    const orders = await db.collection('orders')
      .find({ createdAt: { $gte: startDate, $lt: endDate } })
      .toArray();

    // Calculate dashboard data
    const customers = orders.length;
    const itemsSold = orders.reduce((total, order) => total + (order.items?.length || 0), 0);
    const revenue = orders.reduce((total, order) => total + (order.totalPrice || 0), 0);

    // Peak hour calculation
    const peakHour = orders.reduce((acc, order) => {
      const hour = new Date(order.createdAt).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});

    const peakHourString = Object.keys(peakHour).reduce((a, b) =>
      peakHour[a] > peakHour[b] ? a : b, 0
    );

    const peakHourTime = parseInt(peakHourString, 10);
    const peakHourCount = peakHour[peakHourTime] || 0;
    const peakHourFormatted = `${peakHourTime}:00 - ${peakHourTime + 1}:00 (${peakHourCount} orders)`;

    // Send response
    res.status(200).json({
      success: true,
      message: 'Dashboard data fetched successfully',
      data: {
        customers,
        itemsSold,
        revenue,
        peakHour: peakHourFormatted
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching dashboard data',
      error: error.message
    });
  }
}; 