import { getDB } from '../../config/db.js';
import { postOrder } from './postOrder.js';
import { getOrder } from './getOrder.js';
import { getOrderById } from './getOrderById.js';
import { updateOrderStatus } from './updateOrderStatus.js';
import { removeOrder } from './removeOrder.js';
import { getDashboardData } from './getDashboardData.js';
import { getPeakHours } from './getPeakHours.js';
import { getThreePeakHours } from './getThreePeakHours.js';
import { getTopSellingItems } from './getTopSellingItems.js';
import { getSalesData } from './getSalesData.js';

export {
  postOrder,
  getOrder,
  getOrderById,
  updateOrderStatus,
  removeOrder,
  getDashboardData,
  getPeakHours,
  getThreePeakHours,
  getTopSellingItems,
  getSalesData
};