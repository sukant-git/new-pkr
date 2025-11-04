import React from 'react';

interface Regulation {
  name: string;
  startYear: number;
  endYear: number;
}

interface RegulationDetailsProps {
  regulation: Regulation;
  onBack: () => void;
}

const RegulationDetails: React.FC<RegulationDetailsProps> = ({ regulation, onBack }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">{regulation.name}</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary/90"
        >
          Back to Regulations
        </button>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-neutral-800">Start Year</h3>
            <p className="text-neutral-600">{regulation.startYear}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-800">End Year</h3>
            <p className="text-neutral-600">{regulation.endYear}</p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-neutral-800">Students</h3>
        <p>Student information will be displayed here.</p>
      </div>
    </div>
  );
};

export default RegulationDetails;
