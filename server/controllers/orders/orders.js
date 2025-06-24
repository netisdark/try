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


export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDB();
    
    const order = await db.collection('orders').findOne({ 
      orderId: parseInt(id) 
    });
    
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


export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const db = getDB();
    
    const result = await db.collection('orders').updateOne(
      { orderId: parseInt(id) },
      { 
        $set: { 
          status: status,
          updatedAt: new Date()
        }
      }
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