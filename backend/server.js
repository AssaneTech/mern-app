import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
