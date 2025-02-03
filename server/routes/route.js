import express from 'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts,getProductById,getProducts2 ,getProductById2} from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse,checkout } from '../controller/payment-controller.js';

const router = express.Router();

//Razorpay
router.post("/checkout",checkout);




// Login & Signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

// Products
router.get('/products', getProducts);
router.get('/product2', getProducts2);
router.get('/product/:id', getProductById);
router.get('/product2/:id', getProductById2);


router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;
