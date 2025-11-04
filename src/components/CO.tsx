export default function CO() {
  const courseData = [
    {
      courseType: "Theory",
      courseCode: "19ECY07",
      title: "SENSORS FOR ENGINEERING APPLICATIONS",
      programme: "B.Tech - IT",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Courses</h2>
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add CO
        </button> */}
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="programme" className="font-semibold">Programme</label>
            <select id="programme" className="p-2 border rounded-lg">
              <option>Select Programme</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Search</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Filter</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Reset</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold">Course Type</th>
              <th className="p-4 font-semibold">Course Code</th>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Programme</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{course.courseType}</td>
                <td className="p-4">{course.courseCode}</td>
                <td className="p-4">{course.title}</td>
                <td className="p-4">{course.programme}</td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
