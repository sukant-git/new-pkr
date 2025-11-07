import React from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
}

interface SectionDetailsProps {
  section: string;
  students: Student[];
  onBack: () => void;
}

const SectionDetails: React.FC<SectionDetailsProps> = ({ section, students, onBack }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Section {section} - Students</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary/90"
        >
          Back to Sections
        </button>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-400">
              <th className="p-4 font-semibold">Student ID</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionDetails;
