import express from  'express';
import { userSignUp, userLogIn } from '../Controllers/user-controller.js';
import { getProductById, getProducts } from '../controllers/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controllers/payment-controller.js';
import { addItemInCart } from '../controllers/cart-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);


router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);







export default router;
