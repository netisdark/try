import { getDB } from '../../config/db.js';

export const getOrder = async (req, res) => {
  try {
    const db = getDB();
    const orders = await db.collection('orders')
      .find({ status: 'ordered' })
      .toArray();
    console.log('Retrieved orders:', orders.length);
    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully',
      data: orders,
      count: orders.length
    });
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving orders',
      error: error.message
    });
  }
}; 