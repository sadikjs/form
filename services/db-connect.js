import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("db connection successfully");
    return con;
  } catch (error) {
    console.log(error.message);
  }
};
