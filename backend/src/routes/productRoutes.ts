import express, { Request, Response, Router } from "express"; // Import Router
import upload from "../config/multer";
import Product from "../models/Product";

const router: Router = express.Router(); // Create a router instance

// Add a new product
router.post("/add", upload.single("image"), async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock } = req.body;

    // Get image path
    const imagePath = req.file ? `/img_uploads/${req.file.filename}` : "";

    const newProduct = new Product({ name, price, description, image: imagePath, stock });
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Fetch all products
router.get("/", async (req: Request, res: Response) => { // Changed route path
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Fetch a single product by ID
router.get("/:_id", async (req: Request, res: Response) => { // Changed route path
  try {
    const _id = req.params._id;
    if (!_id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await Product.findOne({ _id: _id }); // Corrected query

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

export default router;