import { useNavigate, useParams } from "react-router-dom";
import { classesData } from "../data";

export default function Classes() {
  const { departmentName, regulationName } = useParams<{ departmentName: string; regulationName: string }>();
  const navigate = useNavigate();

  const handleViewClass = (classItem: { name: string }) => {
    navigate(`/classes/${departmentName}/${regulationName}/${classItem.name}`);
  };

  const filteredClasses = classesData.filter(classItem => 
    (!regulationName || classItem.regulation === regulationName) && 
    (!departmentName || classItem.department === departmentName)
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Classes</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredClasses.map((classItem, index) => (
          <div key={index} className="flex flex-col justify-between p-8 bg-gray-200 rounded-lg shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{classItem.name}</h3>
              <p className="text-gray-600">{classItem.batch}</p>
              <p className="text-gray-600">{classItem.regulation}</p>
              <p className="text-gray-600">Faculty: {classItem.faculty}</p>
            </div>
            <button
              onClick={() => handleViewClass(classItem)}
              className="self-start px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
