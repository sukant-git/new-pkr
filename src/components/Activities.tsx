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
        <h2 className="text-2xl font-bold text-neutral-800">Activities</h2>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          Add Activity
        </button>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-soft">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-100">
              <th className="p-4 font-semibold text-neutral-800">Name</th>
              <th className="p-4 font-semibold text-neutral-800">Max Marks</th>
            </tr>
          </thead>
          <tbody>
            {activitiesData.map((activity, index) => (
              <tr key={index} className="border-b border-neutral-200">
                <td className="p-4 text-neutral-600">{activity.name}</td>
                <td className="p-4 text-neutral-600">{activity.maxMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
