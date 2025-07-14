import { getDB } from '../../config/db.js';

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDB();
    const order = await db.collection('orders').findOne({ orderId: parseInt(id) });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Order retrieved successfully',
      data: order
    });
  } catch (error) {
    console.error('Error retrieving order:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving order',
      error: error.message
    });
  }
}; 