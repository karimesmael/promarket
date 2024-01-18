import express from "express";
import { getProduct, getProducts } from "../controllers/productController.js";
const router = express.Router();
let products = [];
router.get("/", getProducts);

router.get("/:id", getProduct);

export default router;
