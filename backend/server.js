import 'dotenv/config'

import express from "express";
import cors from "cors";
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//app config
const app = express();
const PORT = process.env.PORT;
connectDB()
connectCloudinary()

// Middleware
app.use(cors());
app.use(express.json());


// Basic route
app.get("/", (req, res) => {
  res.send("API is running");
});

//api endPoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
