import express from 'express';
import {login, register, account} from '../controllers/auth/account.js';
import {getOrder, postOrder} from '../controllers/orders/orders.js';
const router = express.Router();


router.post('/auth/login', login);
router.post('/auth/register', register);

router.get('/account', account);

router.post('/postOrder', postOrder);
router.get('/getOrder', getOrder);

export default router;