import { getDB } from '../../config/db.js';

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const db = getDB();
    const result = await db.collection('orders').updateOne(
      { orderId: parseInt(id) },
      { $set: { status: status, updatedAt: new Date() } }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: { orderId: id, status: status }
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while updating order',
      error: error.message
    });
  }
}; 