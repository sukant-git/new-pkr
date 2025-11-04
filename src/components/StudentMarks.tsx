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
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Back
        </button>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {section.students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
