export default function ExamTypes() {
  const examTypesData = [
    { type: "Internal", name: "Continuous Assessment Test 1", totalMarks: 100, duration: "3 hours" },
    { type: "Internal", name: "Continuous Assessment Test 2", totalMarks: 50, duration: "1 hour 30 minutes" },
    { type: "Internal", name: "Continuous Assessment Test 3", totalMarks: 50, duration: "1 hour 30 minutes" },
    { type: "Internal", name: "Model Examination", totalMarks: 100, duration: "3 hours" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Exam Types</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Exam Type
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Total Marks</th>
              <th className="p-4 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {examTypesData.map((exam, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{exam.type}</td>
                <td className="p-4">{exam.name}</td>
                <td className="p-4">{exam.totalMarks}</td>
                <td className="p-4">{exam.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
