import { Student } from "../model/student-model";
export const getStudents = async () => {
  try {
    const students = await Student.find().lean();
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};
