export default function PSO() {
  const psoData = [
    { degree: "B.E - CSE", department: "Computer Science and Engineering" },
    { degree: "B.Tech - IT", department: "Information Technology" },
    { degree: "B.E - EEE", department: "Electrical and Electronics Engineering" },
    { degree: "B.E - ECE", department: "Electronics and Communication Engineering" },
    { degree: "B.E - BME", department: "Bio Medical Engineering" },
    { degree: "B.E - CSD", department: "COMPUTER SCIENCE AND DESIGN" },
    { degree: "B.E - EIE", department: "Electronics and instrumentation engineering" },
    { degree: "B.E - CSE", department: "MATHEMATICS" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Programme Specific Outcomes</h2>
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add PSO
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {psoData.map((pso, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{pso.degree}</h3>
              <p className="text-gray-600">{pso.department}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 self-start">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
