import mongoose from 'mongoose';
const Scema = mongoose.Schema;

const productScema = new Scema({
    name: { type: String, required: true },
    description:{ type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category:{ type: String, required: true },
    subCategory:{ type: String, required: true },
    sizes:{ type: Array, required: true },
    bestseller:{ type: Boolean},
    date :  { type: Number, required: true },    
});

const productModel = mongoose.model("Product", productScema);

export default productModel;