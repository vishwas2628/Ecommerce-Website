import mongoose from "mongoose";


const connectDB = async () => {

    // MongoDB connection
    await mongoose.connect(`${process.env.MONGODB_URI}/ecom`)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));


}

export default connectDB;