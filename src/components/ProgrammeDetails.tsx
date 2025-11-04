import React from 'react';

interface Programme {
  name: string;
  department: string;
}

interface Course {
  courseType: string;
  courseCode: string;
  title: string;
  programme: string;
}

interface ProgrammeDetailsProps {
  programme: Programme;
  onBack: () => void;
}

const sampleCourses: Course[] = [
  {
    courseType: "Theory",
    courseCode: "19ECY07",
    title: "SENSORS FOR ENGINEERING APPLICATIONS",
    programme: "B.Tech - IT",
  },
  {
    courseType: "Lab",
    courseCode: "19ECY08",
    title: "IOT AND EMBEDDED SYSTEMS LAB",
    programme: "B.Tech - IT",
  },
  {
    courseType: "Theory",
    courseCode: "19MAB01",
    title: "CALCULUS AND LINEAR ALGEBRA",
    programme: "B.Tech - IT",
  },
];

const ProgrammeDetails: React.FC<ProgrammeDetailsProps> = ({ programme, onBack }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">{programme.name}</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary/90"
        >
          Back to Programmes
        </button>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-neutral-800">Courses</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sampleCourses.map((course, index) => (
            <div key={index} className="flex flex-col justify-between p-8 transition-shadow bg-gray-200 rounded-lg shadow-soft hover:shadow-medium">
              <div>
                <h3 className="text-lg font-bold text-neutral-800">{course.title}</h3>
                <p className="text-neutral-600">{course.courseCode}</p>
                <p className="text-neutral-600">{course.courseType}</p>
              </div>
              <button className="self-start px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-primary/90">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeDetails;
