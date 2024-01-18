import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT;
// app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running ...");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
  });
});
