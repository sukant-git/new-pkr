import { useParams, useNavigate } from "react-router-dom";
import { classesData } from "../data";

export default function ClassDetails() {
  const { departmentName, regulationName, className } = useParams<{ departmentName: string; regulationName: string; className: string }>();
  const navigate = useNavigate();

  const classItem = classesData.find(c => c.department === departmentName && c.regulation === regulationName && c.name === className);

  if (!classItem) {
    return <div>Class not found</div>;
  }

  const handleViewSection = (sectionName: string) => {
    navigate(`/dashboard/classes/${departmentName}/${regulationName}/${className}/${sectionName}/students`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{classItem.name} - Sections</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 text-white bg-gray-700 font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {classItem.sections.map((section, index) => (
          <div key={index} className="flex flex-col justify-between p-8 bg-white border-2 border-gray-800">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Section {section.name}</h3>
            </div>
            <button
              onClick={() => handleViewSection(section.name)}
              className="self-start px-4 py-2 mt-4 text-white bg-gray-700 font-semibold hover:bg-gray-800 border-2 border-gray-800"
            >
              View Students
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}