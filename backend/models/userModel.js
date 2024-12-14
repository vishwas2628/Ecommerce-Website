import mongoose from 'mongoose';
const Scema = mongoose.Schema;

const userScema = new Scema({
    name :{ type: String, required: true },
    email :{ type: String, required: true ,unique: true},
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
},{minimize:false})

const userModel = mongoose.model('User',userScema); // mongoose.models.User
export default userModel;