import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent1';
import Departments from './Departments1';
import Regulations from './Regulations';
import Classes from './Classes';
import ClassDetails from './ClassDetails';
import StudentMarks from './StudentMarks';
import Batches from './Batches';
import Courses from './Courses';
import BloomsLevels from './BloomsLevels';
import Activities from './Activities';
import ExamTypes from './ExamTypes';
import QuestionPatterns from './QuestionPatterns';
import Questions from './Questions';
import QuestionPapers from './QuestionPapers';
import CourseEndSurvey from './CourseEndSurvey';
import PO from './PO';
import CO from './CO';
import PSO from './PSO';
import CalculationMetrics from './CalculationMetrics';
import AttainmentCalculation from './AttainmentCalculation';

interface DashboardProps {
  user: { name: string; role: string };
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-200">
      <Header user={user} onLogout={onLogout} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex flex-row">
        <Sidebar role={user.role} currentPage={currentPage} />
        <main className="flex-1 p-8">
          <Routes>
            <Route index element={<DashboardContent user={user} currentPage={currentPage} />} />
            <Route path="departments1" element={<Departments />} />
            <Route path="departments1/:departmentName/regulations" element={<Regulations />} />
            <Route path="regulations" element={<Regulations />} />
            <Route path="classes" element={<Classes />} />
            <Route path="classes/:departmentName/:regulationName" element={<Classes />} />
            <Route path="classes/:departmentName/:regulationName/:className" element={<ClassDetails />} />
            <Route path="classes/:departmentName/:regulationName/:className/:sectionName/students" element={<StudentMarks />} />
            <Route path="batches" element={<Batches />} />
            <Route path="courses" element={<Courses />} />
            <Route path="blooms-levels" element={<BloomsLevels />} />
            <Route path="activities" element={<Activities />} />
            <Route path="exam-types" element={<ExamTypes />} />
            <Route path="question-patterns" element={<QuestionPatterns />} />
            <Route path="questions" element={<Questions />} />
            <Route path="question-papers" element={<QuestionPapers />} />
            <Route path="student-marks" element={<StudentMarks />} />
            <Route path="course-end-survey" element={<CourseEndSurvey />} />
            <Route path="po" element={<PO />} />
            <Route path="co" element={<CO />} />
            <Route path="pso" element={<PSO />} />
            <Route path="calculation-metrics" element={<CalculationMetrics />} />
            <Route path="attainment-calculation" element={<AttainmentCalculation />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
