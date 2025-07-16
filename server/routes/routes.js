import express from 'express';
import {login, register, account} from '../controllers/auth/account.js';
import {getOrder, postOrder, removeOrder, getDashboardData, getThreePeakHours, getTopSellingItems, getSalesData} from '../controllers/orders/orders.js';
import { getMenu, postMenu, uploadMenuImage, editMenuItem, deleteMenuItem } from '../controllers/menu/menu.js';
const router = express.Router();


router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/account', account);

router.post('/postOrder', postOrder);
router.get('/getOrder', getOrder);
router.post('/removeOrder', removeOrder);

router.get('/getMenu', getMenu);
router.post('/postMenu', postMenu);
router.post('/uploadMenuImage', uploadMenuImage);
router.post('/editMenuItem', editMenuItem);
router.post('/deleteMenuItem', deleteMenuItem);
router.post('/getDashboardData', getDashboardData);
router.get('/getThreePeakHours', getThreePeakHours);
router.get('/getTopSellingItems', getTopSellingItems);
router.post('/getSalesData', getSalesData);
export default router;