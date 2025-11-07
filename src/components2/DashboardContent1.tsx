interface DashboardContentProps {
  user: { name: string; role: string };
  currentPage: string;
}

export default function DashboardContent({ user, currentPage }: DashboardContentProps) {
  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <div className="space-y-8">
          <div className="p-8 bg-white border-2 border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="mb-2 text-gray-600">
              Welcome to your dashboard. You're logged in as <span className="font-semibold text-gray-800">{user.name}</span>.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Courses</h3>
            <div className="p-6 bg-white border-2 border-gray-800">
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
              </h4>
              <p className="mb-4 text-gray-600">2022 - 2026</p>
              <button className="px-4 py-2 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800">
                View Course
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'exam') {
      return (
        <div className="space-y-8">
          <div className="p-8 bg-white border-2 border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Welcome to the Exam Dashboard</h2>
          </div>

          <div className="p-8 bg-white border-2 border-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Thinking Order Percentages</h3>
            <p className="mb-6 text-gray-600">Set the percentage of Higher Order and Lower Order Thinking Questions for the exam.</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="higher-order" className="block mb-2 text-sm font-medium text-gray-700">Higher Order Percentage</label>
                <input id="higher-order" type="number" value="60" className="w-full px-4 py-2 bg-gray-100 border border-gray-400 outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <div>
                <label htmlFor="lower-order" className="block mb-2 text-sm font-medium text-gray-700">Lower Order Percentage</label>
                <input id="lower-order" type="number" value="40" className="w-full px-4 py-2 bg-gray-100 border border-gray-400 outline-none focus:bg-white focus:border-gray-500" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'attainment') {
      return (
        <div className="space-y-8">
          <div className="p-8 bg-white border-2 border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Attainment</h2>
            <p className="text-gray-600">
              Welcome to the Attainment section. You're logged in as <span className="font-semibold text-gray-800">{user.name}</span>.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Courses</h3>
            <div className="p-6 bg-white border-2 border-gray-800">
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
              </h4>
              <p className="mb-4 text-gray-600">2022 - 2026</p>
              <button className="px-4 py-2 font-semibold text-white bg-gray-700 border-2 border-gray-800 hover:bg-gray-800">
                View Course
              </button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return renderContent();
}
