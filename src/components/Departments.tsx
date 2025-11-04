import { useState } from "react";
import { Link } from "react-router-dom";
import { departmentsData, Department } from "../data";

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  const filteredDepartments = departmentsData.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDepartment = (department: Department) => {
    setSelectedDepartment(department);
  };

  const handleBackToDepartments = () => {
    setSelectedDepartment(null);
  };

  if (selectedDepartment) {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Regulations for {selectedDepartment.name}</h2>
          <button onClick={handleBackToDepartments} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Departments
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedDepartment.regulations.map((regulation, index) => (
            <Link key={index} to={`/classes/${selectedDepartment.name}/${regulation.name}`}>
              <div className="bg-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{regulation.name}</h3>
                  <p className="text-gray-600">{regulation.startYear} - {regulation.endYear}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Departments</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Department
        </button>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDepartments.map((dept, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{dept.name}</h3>
              <p className="text-gray-600">HOD: {dept.hod}</p>
            </div>
            <button 
              onClick={() => handleViewDepartment(dept)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 self-start"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}