import express from "express";
import {placeOrder,updateStatus,userOrders,allOrders,placeOrderPaypal,placeOrderRozerpay, verifyRazorpay,capturePaypalOrder} from '../controllers/orderController.js';
import adminAuth from '../middelware/adminAuth.js';
import authUser from '../middelware/auth.js'

const orderRouter = express.Router();

//admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//pyment Feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/paypal',authUser,placeOrderPaypal)
orderRouter.post('/razorpay',authUser,placeOrderRozerpay)

//User Feature
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)
orderRouter.post('/capturePaypalOrder',authUser,capturePaypalOrder)

export default orderRouter