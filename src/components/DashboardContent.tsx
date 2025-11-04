interface DashboardContentProps {
  user: { name: string; role: string };
  currentPage: string;
}

export default function DashboardContent({ user, currentPage }: DashboardContentProps) {
  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Dashboard</h2>
            <p className="text-neutral-600 mb-2">
              Welcome to your dashboard. You're logged in as <span className="font-semibold text-primary">{user.name}</span>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Courses</h3>
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
              </h4>
              <p className="text-neutral-600 mb-4">2022 - 2026</p>
              <button className="text-primary hover:underline font-medium">
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
          <div className="bg-white rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Welcome to the Exam Dashboard</h2>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-soft">
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Thinking Order Percentages</h3>
            <p className="text-neutral-600 mb-6">Set the percentage of Higher Order and Lower Order Thinking Questions for the exam.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="higher-order" className="block text-sm font-medium text-neutral-700 mb-2">Higher Order Percentage</label>
                <input id="higher-order" type="number" value="60" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="lower-order" className="block text-sm font-medium text-neutral-700 mb-2">Lower Order Percentage</label>
                <input id="lower-order" type="number" value="40" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'attainment') {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Attainment</h2>
            <p className="text-neutral-600">
              Welcome to the Attainment section. You're logged in as <span className="font-semibold text-primary">{user.name}</span>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Courses</h3>
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS
              </h4>
              <p className="text-neutral-600 mb-4">2022 - 2026</p>
              <button className="text-primary hover:underline font-medium">
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
