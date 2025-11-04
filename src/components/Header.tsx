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
    <header className="bg-white border-b border-neutral-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary p-2 rounded-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-800">PKR</h1>
        </div>

        <nav className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className={`font-medium transition ${currentPage === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-600 hover:text-neutral-800'}`}>
            Home
          </button>
          <button onClick={() => setCurrentPage('exam')} className={`font-medium transition ${currentPage === 'exam' ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-600 hover:text-neutral-800'}`}>
            Exam
          </button>
          <button onClick={() => setCurrentPage('attainment')} className={`font-medium transition ${currentPage === 'attainment' ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-600 hover:text-neutral-800'}`}>
            Attainment
          </button>

          <div className="flex items-center gap-4 ml-8">
            <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-neutral-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:bg-neutral-100 px-3 py-2 rounded-lg transition"
              >
                <span className="font-medium text-neutral-700">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-neutral-600" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-medium py-2 z-50">
                  <div className="px-4 py-2 border-b border-neutral-200">
                    <p className="text-sm text-neutral-500">Role: {user.role}</p>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition"
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
