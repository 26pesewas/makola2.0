import mongoose from "mongoose";

// Defining  Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }, // URL of the product image
  stock: { type: Number, required: true, default: 1 },
});

// Creating Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
