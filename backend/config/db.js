import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongoDB :${conn.connection.host}`);
  } catch (error) {
    console.log("faild to connect to mongoDB");
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;
