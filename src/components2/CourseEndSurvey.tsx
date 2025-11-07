export default function CourseEndSurvey() {
  const surveyData = [
    {
      course: "19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS",
      batch: "2022 - 2026",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Course End Survey</h2>
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Survey
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {surveyData.map((survey, index) => (
          <div key={index} className="bg-white border-2 border-gray-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{survey.course}</h3>
              <p className="text-gray-600">{survey.batch}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800 self-start">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
