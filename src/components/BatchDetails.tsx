import React from 'react';

interface Batch {
  years: string;
  regulation: string;
  students: number;
}

interface BatchDetailsProps {
  batch: Batch;
  onBack: () => void;
}

const BatchDetails: React.FC<BatchDetailsProps> = ({ batch, onBack }) => {
  const [startYear, endYear] = batch.years.split(" - ");

  const programmesData = [
    { code: "B.E - CSE", name: "Computer Science and Engineering" },
    { code: "B.Tech - IT", name: "Information Technology" },
    { code: "B.E - EEE", name: "Electrical and Electronics Engineering" },
    { code: "B.E - ECE", name: "Electronics and Communication Engineering" },
    { code: "B.E - BME", name: "Bio Medical Engineering" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Batch Details ({batch.years})
        </h2>
        <button
          onClick={onBack}
          className="px-6 py-2 text-white bg-gray-700 font-semibold hover:bg-gray-800 border-2 border-gray-800"
        >
          &larr; Back to Batches
        </button>
      </div>

      <div className="p-6 bg-white border-2 border-gray-800">
        <h3 className="text-xl font-bold text-gray-800">Information</h3>
        <div className="mt-4 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Regulation:</span> {batch.regulation}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Start Year:</span> {startYear}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">End Year:</span> {endYear}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Total Students:</span> {batch.students}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800">Programmes</h3>
        <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {programmesData.map((prog, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 bg-white border-2 border-gray-800"
            >
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  {prog.code}
                </h4>
                <p className="text-gray-600">{prog.name}</p>
              </div>
              <button className="self-start px-4 py-2 mt-4 text-white bg-gray-700 font-semibold hover:bg-gray-800 border-2 border-gray-800">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;