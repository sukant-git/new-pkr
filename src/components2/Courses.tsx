export default function Courses() {
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
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add Course
        </button>
      </div>

      <div className="bg-white border-2 border-gray-800 p-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="programme" className="font-semibold">Programme</label>
            <select id="programme" className="p-2 border border-gray-400 bg-gray-100 focus:bg-white focus:border-gray-500 outline-none">
              <option>Select Programme</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Search</button>
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Filter</button>
            <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">Reset</button>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">Course Type</th>
              <th className="p-4 font-semibold border border-gray-400">Course Code</th>
              <th className="p-4 font-semibold border border-gray-400">Title</th>
              <th className="p-4 font-semibold border border-gray-400">Programme</th>
              <th className="p-4 font-semibold border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{course.courseType}</td>
                <td className="p-4 border border-gray-400">{course.courseCode}</td>
                <td className="p-4 border border-gray-400">{course.title}</td>
                <td className="p-4 border border-gray-400">{course.programme}</td>
                <td className="p-4 border border-gray-400">
                  <button className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
