const express = require('express');
import { getDB } from '../config/db';

export const postOrder = async (req, res) => {
  try {
    const { items, total, timestamp, orderDate, orderTime } = req.body;
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Items array is required and cannot be empty'
      });
    }

    if (typeof total !== 'number' || total < 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid total amount is required'
      });
    }
    const orderData = {
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        subtotal: item.subtotal
      })),
      total,
      timestamp,
      orderDate,
      orderTime,
      status: 'ordered',
      createdAt: new Date()
    };
    let db = getDB();
    await db.collection('orders').insertOne(orderData, function(err, result){
      if (err) throw err;
      console.log('data added to database');
    })

    console.log('Received order data:', orderData);

    const savedOrder = {
      id: Date.now(),
      ...orderData
    };

    res.status(201).json({
      success: true,
      message: 'Order saved successfully',
      data: savedOrder
    });

  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while saving order'
    });
  }
};

export const getOrder = async (req, res) => {
  let db = getDB();
  await db.collection('orders').find({status: 'ordered'}, function(err, result){
    if (err) throw res.status(400).json(err);
    res.status(400).json(result);
  });
};