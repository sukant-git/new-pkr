export default function Questions() {
  const questionsData = [
    {
      course: "19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS",
      batch: "2022 - 2026",
      programme: "B.Tech IT",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Questions</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Question
        </button>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="batch" className="font-semibold">Batch</label>
            <select id="batch" className="p-2 border rounded-lg w-full">
              <option>Select Batch</option>
            </select>
          </div>
          <div>
            <label htmlFor="programme" className="font-semibold">Programme</label>
            <select id="programme" className="p-2 border rounded-lg w-full">
              <option>Select Programme</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="search-course" className="font-semibold">Search Course</label>
            <input id="search-course" type="text" className="p-2 border rounded-lg w-full" />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Search</button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Filter</button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Reset</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {questionsData.map((question, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{question.course}</h3>
              <p className="text-gray-600">{question.batch}</p>
              <p className="text-gray-600">{question.programme}</p>
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
