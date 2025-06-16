import express from 'express';
import {login, register, account} from '../member/account.js';
import {getOrder, postOrder} from '../admin/orders.js';
const router = express.Router();

// member routes
router.post('/auth/login', login);
router.post('/auth/register', register);

router.get('/account', account);

// admin routes
router.post('/admin/postOrder', postOrder);
router.get('/admin/getOrder', getOrder);

export default router;