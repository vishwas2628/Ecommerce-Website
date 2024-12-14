import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import razorpay from 'razorpay'
import paypal from '@paypal/checkout-server-sdk';

//global variables
const currency = 'inr'
const deliveryCharge = 10

//gatewayInitilize
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

const paypalInstance = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_KEY_ID,
    process.env.PAYPAL_KEY_SECRET
);
const paypalClient = new paypal.core.PayPalHttpClient(paypalInstance);

// placing order using Cod method 
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId, items, address, amount, paymentMethod: "cod", payment: false, date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// placing order using paypal method 
const placeOrderPaypal = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId, items, address, amount, paymentMethod: "paypal", payment: false, date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        // Create PayPal order
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD", // Adjust based on your needs
                        value: amount.toString(),
                    },
                },
            ],
        });

        const order = await paypalClient.execute(request);
        res.json({ success: true, orderID:order.result.id});
        console.log(order.result.id);

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
//verify paypal
const capturePaypalOrder = async (req, res) => {
    try {
      const { orderID, userId } = req.body;
  
      const request = new paypal.orders.OrdersCaptureRequest(orderID);
      request.requestBody({});
  
      const capture = await paypalClient.execute(request);
  
      // Check if the payment was successful
      if (capture.result.status === "COMPLETED") {
        await orderModel.findOneAndUpdate(
          { userId, "paypalOrderId": orderID },
          { payment: true }
        );
  
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
  
        res.json({ success: true, message: "Payment successful", capture });
      } else {
        res.json({ success: false, message: "Payment not completed" });
      }
    } catch (error) {
      console.error("PayPal Capture Error:", error);
      res.json({ success: false, message: error.message });
    }
  };
  
// placing order using rozarpay method 
const placeOrderRozerpay = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId, items, address, amount, paymentMethod: "Razorpay", payment: false, date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        }

        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.json({ success: false, message: error })
            } else {
                res.json({ success: true,order})
            }
        })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const verifyRazorpay = async (req, res) => {
    try {
        const { userId, razorpay_order_id } = req.body

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if (orderInfo.status === 'paid') {
            await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} })
            res.json({ success: true, message: "Payment Successfull" })
        } else {
            res.json({ success: false, message: "payment Faild" })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
// All orders Data for Admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}
// User Data for frontend 
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}
// update order status for admin
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'Status Updated' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export {
    placeOrder,
    updateStatus,
    userOrders,
    allOrders,
    placeOrderPaypal,
    placeOrderRozerpay,
    verifyRazorpay,
    capturePaypalOrder
}