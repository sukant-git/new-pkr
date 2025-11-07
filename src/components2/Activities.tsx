export default function Activities() {
  const activitiesData = [
    { name: "Assingement", maxMarks: 5 },
    { name: "Seminar", maxMarks: 5 },
    { name: "Quiz", maxMarks: 5 },
    { name: "Group Discussion", maxMarks: 5 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Activity
        </button>
      </div>
      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">Name</th>
              <th className="p-4 font-semibold border border-gray-400">Max Marks</th>
            </tr>
          </thead>
          <tbody>
            {activitiesData.map((activity, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{activity.name}</td>
                <td className="p-4 border border-gray-400">{activity.maxMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
