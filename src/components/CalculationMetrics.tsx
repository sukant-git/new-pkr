export default function CalculationMetrics() {
  const attainmentLevels = [
    { level: 1, min: 0, max: 65 },
    { level: 2, min: 65, max: 74 },
    { level: 3, min: 75, max: 100 },
  ];

  const weightageTools = {
    direct: [
      { component: "Internal", percentage: 40 },
      { component: "External", percentage: 60 },
    ],
    indirect: [{ component: "Course end survey", percentage: 100 }],
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Calculation Metrics</h2>
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Metric
        </button> */}
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">CO Percentage Ratio</h3>
        <div className="flex space-x-8">
          <div>
            <p className="font-semibold">Exam</p>
            <p className="text-2xl">75%</p>
          </div>
          <div>
            <p className="font-semibold">Activity</p>
            <p className="text-2xl">25%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Attainment Levels</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">Level</th>
              <th className="p-4 font-semibold">Min Percentage</th>
              <th className="p-4 font-semibold">Max Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attainmentLevels.map((level, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{level.level}</td>
                <td className="p-4">{level.min}%</td>
                <td className="p-4">{level.max}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Weightage Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Direct</h4>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-semibold">Component</th>
                  <th className="p-4 font-semibold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {weightageTools.direct.map((tool, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{tool.component}</td>
                    <td className="p-4">{tool.percentage}%</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="p-4">Total Percentage</td>
                  <td className="p-4">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div>
            <h4 className="font-bold mb-2">Indirect</h4>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-semibold">Component</th>
                  <th className="p-4 font-semibold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {weightageTools.indirect.map((tool, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{tool.component}</td>
                    <td className="p-4">{tool.percentage}%</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="p-4">Total Percentage</td>
                  <td className="p-4">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
