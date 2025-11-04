export default function BloomsLevels() {
  const bloomsLevelsData = [
    { level: 1, keyword: "Understanding", order: "Low" },
    { level: 2, keyword: "Remembering", order: "Low" },
    { level: 3, keyword: "Analyzing", order: "High" },
    { level: 4, keyword: "Applying", order: "High" },
    { level: 5, keyword: "Evaluating", order: "High" },
    { level: 6, keyword: "Creating", order: "High" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Blooms Levels</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Blooms Level
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">Level</th>
              <th className="p-4 font-semibold">Keyword</th>
              <th className="p-4 font-semibold">Order</th>
            </tr>
          </thead>
          <tbody>
            {bloomsLevelsData.map((level, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{level.level}</td>
                <td className="p-4">{level.keyword}</td>
                <td className="p-4">{level.order}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
