import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  role: string;
  currentPage: string;
}

const facultyMenuItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'regulations', label: 'Regulations', path: '/regulations' },
  { id: 'batches', label: 'Batches', path: '/batches' },
  { id: 'departments', label: 'Departments', path: '/departments1' },
  { id: 'classes', label: 'Classes', path: '/classes' },
  { id: 'courses', label: 'Courses', path: '/courses' },
];

const examMenuItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'blooms-levels', label: 'Blooms Levels', path: '/blooms-levels' },
  { id: 'activities', label: 'Activities', path: '/activities' },
  { id: 'exam-types', label: 'Exam Types', path: '/exam-types' },
  { id: 'question-patterns', label: 'Question Patterns', path: '/question-patterns' },
  { id: 'questions', label: 'Questions', path: '/questions' },
  { id: 'question-papers', label: 'Question Papers', path: '/question-papers' },
  { id: 'student-marks', label: 'Student Marks', path: '/student-marks' },
  { id: 'course-end-survey', label: 'Course End Survey', path: '/course-end-survey' },
];

const attainmentMenuItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'po', label: 'PO', path: '/po' },
  { id: 'co', label: 'CO', path: '/co' },
  { id: 'pso', label: 'PSO', path: '/pso' },
  { id: 'calculation-metrics', label: 'Calculation Metrics', path: '/calculation-metrics' },
  { id: 'attainment-calculation', label: 'Attainment Calculation', path: '/attainment-calculation' },
];

export default function Sidebar({ role, currentPage }: SidebarProps) {
  const location = useLocation();
  let menuItems = [];
  if (currentPage === 'exam') {
    menuItems = examMenuItems;
  } else if (currentPage === 'attainment') {
    menuItems = attainmentMenuItems;
  } else {
    menuItems = role === 'faculty' ? facultyMenuItems : attainmentMenuItems;
  }

  return (
    <aside className="w-64 bg-white border-r-2 border-gray-800 min-h-[calc(100vh-73px)]">
      <div className="p-6">
        <h2 className="text-gray-800 font-semibold text-lg mb-6">Dashboard</h2>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`block w-full text-left px-4 py-3 transition ${
                location.pathname === item.path
                  ? 'bg-gray-200 text-gray-800 font-medium border-l-4 border-gray-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
