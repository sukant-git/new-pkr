import { useParams, useNavigate } from "react-router-dom";
import { classesData } from "../data";

export default function StudentMarks() {
  const { departmentName, regulationName, className, sectionName } = useParams<{ departmentName: string; regulationName: string; className: string; sectionName: string }>();
  const navigate = useNavigate();

  const classItem = classesData.find(c => c.department === departmentName && c.regulation === regulationName && c.name === className);
  const section = classItem?.sections.find(s => s.name === sectionName);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Student Marks for {className} - Section {sectionName}</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Back
        </button>
      </div>

      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">ID</th>
              <th className="p-4 font-semibold border border-gray-400">Name</th>
              <th className="p-4 font-semibold border border-gray-400">Email</th>
            </tr>
          </thead>
          <tbody>
            {section.students.map((student) => (
              <tr key={student.id} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{student.id}</td>
                <td className="p-4 border border-gray-400">{student.name}</td>
                <td className="p-4 border border-gray-400">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
