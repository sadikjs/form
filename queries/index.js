import { Allstudent } from "@/model/student-model";
import { dbConnect } from "@/services/db-connect";
export const getStudents = async () => {
  try {
    await dbConnect();
    const students = await Allstudent.find({}).select("-password").lean();
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};
