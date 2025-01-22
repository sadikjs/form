import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Allstudent =
  mongoose.models.Allstudent || mongoose.model("Allstudent", StudentSchema);
