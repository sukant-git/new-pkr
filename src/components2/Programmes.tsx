import { useState } from "react";
import ProgrammeDetails from "./ProgrammeDetails";

interface Programme {
  name: string;
  department: string;
}

export default function Programmes() {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(
    null
  );

  const programmesData: Programme[] = [
    { name: "B.Tech - IT", department: "Information Technology" },
  ];

  const handleViewProgramme = (programme: Programme) => {
    setSelectedProgramme(programme);
  };

  const handleBack = () => {
    setSelectedProgramme(null);
  };

  if (selectedProgramme) {
    return (
      <ProgrammeDetails programme={selectedProgramme} onBack={handleBack} />
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Programmes</h2>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Programme
        </button>
      </div>

      <div className="bg-white border-2 border-gray-800 p-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="department" className="font-semibold">Department</label>
            <select id="department" className="p-2 border border-gray-400 bg-gray-100 focus:bg-white focus:border-gray-500 outline-none">
              <option>Select Department</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Search</button>
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Filter</button>
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Reset</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programmesData.map((programme, index) => (
          <div key={index} className="bg-white border-2 border-gray-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{programme.name}</h3>
              <p className="text-gray-600">{programme.department}</p>
            </div>
            <button
              onClick={() => handleViewProgramme(programme)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800 self-start"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
