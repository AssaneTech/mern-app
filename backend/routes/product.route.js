import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {getProducts, createProduct, deleteProduct, updateProduct} from "../controllers/product.controler.js";

const router = express.Router();
router.get("/", getProducts);            //GET ALL PRODUCTS
router.post("/", createProduct);         //ADDING A PRODUCT
router.delete("/:id", deleteProduct);    //DELETING A PRODUCT
router.put("/:id", updateProduct);       //UPDATING  A PRODUCT

export default router;
