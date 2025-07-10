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

export const removeOrder = async (req, res) => {
  try{
    const { orderId } = req.body;
    const db = getDB();
    const result = await db.collection('orders').deleteOne({ orderId: orderId });
    if(result){ 
      res.status(200).json({message:'deleted succesfully'});
      console.log('removed orderID: ' + orderId);
   }
  }
  catch(error){
    res.status(400).json({
      success: false,
      message: 'failed to delete order',
      error: error.message
    });
  }
  
}

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
