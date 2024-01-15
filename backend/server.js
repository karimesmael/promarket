import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT;
// app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
  });
});
