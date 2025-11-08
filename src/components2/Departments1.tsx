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
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Regulations for {selectedDepartment.name}</h2>
          <button onClick={handleBackToDepartments} className="px-6 py-2 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800">
            Back to Departments
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {selectedDepartment.regulations.map((regulation, index) => (
            <Link key={index} to={`/dashboard/classes/${selectedDepartment.name}/${regulation.name}`}>
              <div className="flex flex-col justify-between h-full p-8 bg-white border-2 border-gray-800">
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Departments</h2>
        <button className="px-6 py-2 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800">
          Add Department
        </button>
      </div>

      <div className="p-8 bg-white border-2 border-gray-800">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 bg-gray-100 border border-gray-400 outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredDepartments.map((dept, index) => (
          <div key={index} className="flex flex-col justify-between p-8 bg-white border-2 border-gray-800">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{dept.name}</h3>
              <p className="text-gray-600">HOD: {dept.hod}</p>
            </div>
            <button 
              onClick={() => handleViewDepartment(dept)}
              className="self-start px-4 py-2 mt-4 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}