import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    name: { type: String, require: true },

    description: { type: String, require: true },

    image: { type: String, require: true },

    brand: { type: String, require: true },

    category: { type: String, require: true },

    price: { type: Number, require: true },

    reviews: [reviewsSchema],

    rating: { type: Number, required: true, default: 0 },

    numOfReviews: { type: Number, required: true, default: 0 },

    countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
