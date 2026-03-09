import mongoose from "mongoose";

// Defining  Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }, // URL of the product image
  stock: { type: Number, required: true, default: 1 },
  category: { 
    type: String, 
    required: true,
    enum: ['Makola Fruits and Veggies', 'Grains and Powders', 'Teshie Coldstore', 'KantaOnline']
  }
});

// Creating Product model
const Product = mongoose.model("Product", productSchema);

// mongoose.connection.once("open", () => {
//   console.log("DB name:", mongoose.connection.name);
// });


export default Product;
