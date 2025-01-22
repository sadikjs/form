"use server";
import { dbConnect } from "@/services/db-connect";
import { Allstudent } from "@/model/student-model";
export const studentsRegister = async (data) => {
  const { name, age, address, email, password } = await data;
  try {
    await dbConnect();
    const student = new Allstudent({ name, age, address, email, password });
    student.save();
    return { success: true, message: "students registration successfully" };
  } catch (error) {
    console.error(error.message);
    return { success: false, message: "Error registering student" };
  }
};
