import React from 'react';

interface Regulation {
  name: string;
  sections: string[];
}

interface Department {
  name: string;
  code: string;
  hod: string;
  regulations: Regulation[];
}

interface DepartmentDetailsProps {
  department: Department;
  onBack: () => void;
  onViewRegulation: (regulation: Regulation) => void;
}

const DepartmentDetails: React.FC<DepartmentDetailsProps> = ({ department, onBack, onViewRegulation }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{department.name}</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800"
        >
          Back to Departments
        </button>
      </div>

      <div className="p-8 bg-white border-2 border-gray-800">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Regulations</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {department.regulations.map((regulation, index) => (
            <div key={index} className="flex flex-col justify-between p-8 bg-white border-2 border-gray-800">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{regulation.name}</h3>
              </div>
              <button 
                onClick={() => onViewRegulation(regulation)}
                className="self-start px-4 py-2 mt-4 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
