import mongoose from "mongoose";

const connectDb = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log("my error: ", error);
  }
};

export default connectDb;
