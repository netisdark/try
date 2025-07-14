import { getDB } from '../../config/db.js';

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
}; 