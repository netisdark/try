import express from 'express';
import {login, register, account} from '../controllers/auth/account.js';
import {getOrder, postOrder, removeOrder} from '../controllers/orders/orders.js';
import { getMenu } from '../controllers/menu/menu.js';
const router = express.Router();


router.post('/auth/login', login);
router.post('/auth/register', register);

router.get('/account', account);

router.post('/postOrder', postOrder);
router.get('/getOrder', getOrder);
router.post('/removeOrder', removeOrder);

router.get('/getMenu', getMenu);
export default router;