import { GraduationCap, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  user: { name: string; role: string };
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ user, onLogout, currentPage, setCurrentPage }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white border-b-2 border-gray-800 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-700 p-2">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">PKR</h1>
        </div>

        <nav className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className={`font-semibold transition ${currentPage === 'home' ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Home
          </button>
          <button onClick={() => setCurrentPage('exam')} className={`font-semibold transition ${currentPage === 'exam' ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Exam
          </button>
          <button onClick={() => setCurrentPage('attainment')} className={`font-semibold transition ${currentPage === 'attainment' ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-600 hover:text-gray-800'}`}>
            Attainment
          </button>

          <div className="flex items-center gap-4 ml-8">
            <button className="relative p-2 hover:bg-gray-200 transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:bg-gray-200 px-3 py-2 transition"
              >
                <span className="font-medium text-gray-700">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-gray-800 py-2 z-50">
                  <div className="px-4 py-2 border-b-2 border-gray-800">
                    <p className="text-sm text-gray-500">Role: {user.role}</p>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
