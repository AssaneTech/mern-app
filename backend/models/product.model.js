import mongoose from "mongoose";
// I create a schema, then a model which folow this schema
const productSchema = new mongoose.Schema({
    name:  {type: String, reauired: true},
    price: {type: Number, required: true},
    image: {type: String, required: true}, 
},
{
    timestamps: true//createdAT, updatedAT
}
);

const Product = mongoose.model('product', productSchema);
export default Product;