import { getDB } from '../../config/db.js';

export const postOrder = async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      status: 'ordered',
      createdAt: new Date(),
      orderId: Date.now()
    };

    const db = getDB();
    const result = await db.collection('orders').insertOne(orderData);
    console.log('Order added to database:', result.insertedId);
    console.log('Order data:', orderData);

    res.status(201).json({
      success: true,
      message: 'Order saved successfully',
      data: {
        id: result.insertedId,
        orderId: orderData.orderId,
        ...orderData
      }
    });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while saving order',
      error: error.message
    });
  }
}; 