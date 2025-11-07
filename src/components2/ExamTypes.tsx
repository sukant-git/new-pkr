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
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Exam Type
        </button>
      </div>
      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">Type</th>
              <th className="p-4 font-semibold border border-gray-400">Name</th>
              <th className="p-4 font-semibold border border-gray-400">Total Marks</th>
              <th className="p-4 font-semibold border border-gray-400">Duration</th>
            </tr>
          </thead>
          <tbody>
            {examTypesData.map((exam, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{exam.type}</td>
                <td className="p-4 border border-gray-400">{exam.name}</td>
                <td className="p-4 border border-gray-400">{exam.totalMarks}</td>
                <td className="p-4 border border-gray-400">{exam.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
