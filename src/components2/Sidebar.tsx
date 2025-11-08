import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  role: string;
  currentPage: string;
}

const facultyMenuItems = [
  { id: 'home', label: 'Home', path: '/dashboard' },
  { id: 'regulations', label: 'Regulations', path: '/dashboard/regulations' },
  { id: 'batches', label: 'Batches', path: '/dashboard/batches' },
  { id: 'departments', label: 'Departments', path: '/dashboard/departments1' },
  { id: 'classes', label: 'Classes', path: '/dashboard/classes' },
  { id: 'courses', label: 'Courses', path: '/dashboard/courses' },
];

const examMenuItems = [
  { id: 'home', label: 'Home', path: '/dashboard' },
  { id: 'blooms-levels', label: 'Blooms Levels', path: '/dashboard/blooms-levels' },
  { id: 'activities', label: 'Activities', path: '/dashboard/activities' },
  { id: 'exam-types', label: 'Exam Types', path: '/dashboard/exam-types' },
  { id: 'question-patterns', label: 'Question Patterns', path: '/dashboard/question-patterns' },
  { id: 'questions', label: 'Questions', path: '/dashboard/questions' },
  { id: 'question-papers', label: 'Question Papers', path: '/dashboard/question-papers' },
  { id: 'student-marks', label: 'Student Marks', path: '/dashboard/student-marks' },
  { id: 'course-end-survey', label: 'Course End Survey', path: '/dashboard/course-end-survey' },
];

const attainmentMenuItems = [
  { id: 'home', label: 'Home', path: '/dashboard' },
  { id: 'po', label: 'PO', path: '/dashboard/po' },
  { id: 'co', label: 'CO', path: '/dashboard/co' },
  { id: 'pso', label: 'PSO', path: '/dashboard/pso' },
  { id: 'calculation-metrics', label: 'Calculation Metrics', path: '/dashboard/calculation-metrics' },
  { id: 'attainment-calculation', label: 'Attainment Calculation', path: '/dashboard/attainment-calculation' },
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
