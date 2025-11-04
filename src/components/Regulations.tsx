

import { useParams, useNavigate } from "react-router-dom";
import { departmentsData } from "../data";

export default function Regulations() {
  const { departmentName } = useParams<{ departmentName: string }>();
  const navigate = useNavigate();

  const regulations = departmentName
    ? departmentsData.find(department => department.name === departmentName)?.regulations || []
    : departmentsData.flatMap(department => department.regulations);

  const uniqueRegulationNames = [...new Set(regulations.map(regulation => regulation.name))];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Regulations for {departmentName || 'All Departments'}</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {uniqueRegulationNames.map((regulationName, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{regulationName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
