import React from 'react';

interface Section {
  name: string;
  students: any[]; // Replace any with a proper Student interface
}

interface Regulation {
  name: string;
  sections: Section[];
}

interface RegulationSectionsProps {
  regulation: Regulation;
  onBack: () => void;
  onViewSection: (section: Section) => void;
}

const RegulationSections: React.FC<RegulationSectionsProps> = ({ regulation, onBack, onViewSection }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">{regulation.name} - Sections</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary/90"
        >
          Back to Regulations
        </button>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {regulation.sections.map((section, index) => (
            <div key={index} className="flex flex-col justify-between p-8 transition-shadow bg-gray-200 rounded-lg shadow-soft hover:shadow-medium">
              <div>
                <h3 className="text-lg font-bold text-neutral-800">Section {section.name}</h3>
              </div>
              <button 
                onClick={() => onViewSection(section)}
                className="self-start px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-primary/90"
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

export default RegulationSections;
