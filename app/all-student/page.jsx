import { getStudents } from "@/queries";
const StudentPage = async () => {
  const students = await getStudents();
  return (
    <div className="w-full flex flex-col mt-6 justify-center items-center">
      <h3 className="flex justify-center items-center font-semibold py-4">
        Students Information
      </h3>
      <table className="w-9/12 h-screen flex flex-col justify-center items-center border-x border-gray-500 p-4">
        <thead className="w-2/3">
          <tr className="grid grid-cols-4">
            <th className="border-l border-t px-2 border-gray-300">Name</th>
            <th className="border-l border-t px-2 border-gray-300">Age</th>
            <th className="border-l border-t px-2  border-gray-300">Address</th>
            <th className="border-l border-t border-r border-gray-300 px-2">
              E-mail
            </th>
          </tr>
        </thead>
        <tbody className="w-2/3">
          {students &&
            students.map((student) => (
              <tr
                className="grid grid-cols-4 border-b border-gray-300"
                key={student.email}
              >
                <td className="border-l border-t border-gray-300 px-2">
                  {student.name}
                </td>
                <td className="border-l border-t border-gray-300 px-2">
                  {student.age}
                </td>
                <td className="border-l border-t border-gray-300 px-2">
                  {student.address}
                </td>
                <td className="border-l border-t border-r border-gray-300 px-2">
                  {student.email}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentPage;
