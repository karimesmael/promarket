import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.status(200).json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) return res.status(200).json(product);
  res.status(404).json("product not found");
});
