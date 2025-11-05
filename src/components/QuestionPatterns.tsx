export default function QuestionPatterns() {
  const questionPatternsData = [
    {
      exam: "Continuous Assessment Test 1",
      batch: "2021 - 2025",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO1: 52 Marks", "CO2: 26 Marks"],
    },
    {
      exam: "Continuous Assessment Test 2",
      batch: "2021 - 2025",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO2: 26 Marks", "CO3: 52 Marks"],
    },
    {
      exam: "Continuous Assessment Test 3",
      batch: "2021 - 2025",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO4: 39 Marks", "CO5: 39 Marks"],
    },
    {
      exam: "Model Examination",
      batch: "2021 - 2025",
      pattern: ["1m x 10 = 10m (options)", "2m x 10 = 20m (No Choice)", "14m x 5 = 70m (EitherOr)"],
      coDistribution: ["CO1: 34 Marks", "CO2: 34 Marks", "CO3: 34 Marks", "CO4: 34 Marks", "CO5: 34 Marks"],
    },
    {
      exam: "Continuous Assessment Test 1",
      batch: "2022 - 2026",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO1: 52 Marks", "CO2: 26 Marks"],
    },
    {
      exam: "Continuous Assessment Test 2",
      batch: "2022 - 2026",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO2: 26 Marks", "CO3: 52 Marks"],
    },
    {
      exam: "Continuous Assessment Test 3",
      batch: "2022 - 2026",
      pattern: ["1m x 8 = 8m (options)", "2m x 7 = 14m (No Choice)", "14m x 2 = 28m (EitherOr)"],
      coDistribution: ["CO4: 39 Marks", "CO5: 39 Marks"],
    },
    {
      exam: "Model Examination",
      batch: "2022 - 2026",
      pattern: ["1m x 10 = 10m (options)", "2m x 10 = 20m (No Choice)", "14m x 5 = 70m (EitherOr)"],
      coDistribution: ["CO1: 34 Marks", "CO2: 34 Marks", "CO3: 34 Marks", "CO4: 34 Marks", "CO5: 34 Marks"],
    },
    {
      exam: "Continuous Assessment Test 1",
      batch: "2023 - 2027",
      pattern: ["2m x 9 = 18m (No Choice)", "16m x 2 = 32m (EitherOr)"],
      coDistribution: ["CO1: 50 Marks", "CO2: 32 Marks"],
    },
    {
      exam: "Continuous Assessment Test 2",
      batch: "2023 - 2027",
      pattern: ["2m x 9 = 18m (No Choice)", "16m x 2 = 32m (EitherOr)"],
      coDistribution: ["CO2: 32 Marks", "CO3: 50 Marks"],
    },
    {
      exam: "Continuous Assessment Test 3",
      batch: "2023 - 2027",
      pattern: ["2m x 9 = 18m (No Choice)", "16m x 2 = 32m (EitherOr)"],
      coDistribution: ["CO4: 42 Marks", "CO5: 40 Marks"],
    },
    {
      exam: "Model Examination",
      batch: "2023 - 2027",
      pattern: ["2m x 10 = 20m (No Choice)", "16m x 5 = 80m (EitherOr)"],
      coDistribution: ["CO1: 36 Marks", "CO2: 36 Marks", "CO3: 36 Marks", "CO4: 36 Marks", "CO5: 36 Marks"],
    },
    {
      exam: "Continuous Assessment Test 1",
      batch: "2024 - 2028",
      pattern: ["2m x 10 = 20m (No Choice)", "16m x 5 = 80m (EitherOr)"],
      coDistribution: ["CO1: 72 Marks", "CO2: 72 Marks", "CO3: 36 Marks"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Question Patterns</h2>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Question Pattern
        </button>
      </div>
      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">Exam</th>
              <th className="p-4 font-semibold border border-gray-400">Batch</th>
              <th className="p-4 font-semibold border border-gray-400">Pattern</th>
              <th className="p-4 font-semibold border border-gray-400">CO Distribution</th>
            </tr>
          </thead>
          <tbody>
            {questionPatternsData.map((item, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{item.exam}</td>
                <td className="p-4 border border-gray-400">{item.batch}</td>
                <td className="p-4 border border-gray-400">
                  {item.pattern.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
                <td className="p-4 border border-gray-400">
                  {item.coDistribution.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
