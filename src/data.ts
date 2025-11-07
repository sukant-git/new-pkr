export interface Student {
  id: string;
  name: string;
  email: string;
}

export interface Section {
  name: string;
  students: Student[];
}

export interface Class {
  name: string;
  batch: string;
  regulation: string;
  department: string;
  faculty: string;
  sections: Section[];
}

export interface Regulation {
  name: string;
  startYear: number;
  endYear: number;
}

export interface Department {
  name: string;
  code: string;
  hod: string;
  regulations: Regulation[];
}

export const departmentsData: Department[] = [
  {
    name: "Information Technology",
    code: "IT",
    hod: "Dr. Smith",
    regulations: [
      {
        name: "R-2019",
        startYear: 2019,
        endYear: 2023,
      },
      {
        name: "R-2023",
        startYear: 2023,
        endYear: 2027,
      },
    ],
  },
  {
    name: "Computer Science and Engineering",
    code: "CSE",
    hod: "Dr. Jones",
    regulations: [
      {
        name: "R-2019",
        startYear: 2019,
        endYear: 2023,
      },
    ],
  },
];

export const classesData: Class[] = [
  {
    name: "B.Tech IT - Section A",
    batch: "2022 - 2026",
    regulation: "R-2019",
    department: "Information Technology",
    faculty: "Mr. John",
    sections: [
      {
        name: "A",
        students: [
          { id: "IT19A01", name: "Student A1", email: "a1@it.com" },
          { id: "IT19A02", name: "Student A2", email: "a2@it.com" },
        ],
      },
    ],
  },
  {
    name: "B.Tech IT - Section B",
    batch: "2022 - 2026",
    regulation: "R-2019",
    department: "Information Technology",
    faculty: "Mrs. Jane",
    sections: [
      {
        name: "B",
        students: [
          { id: "IT19B01", name: "Student B1", email: "b1@it.com" },
          { id: "IT19B02", name: "Student B2", email: "b2@it.com" },
        ],
      },
    ],
  },
  {
    name: "B.Tech CSE - Section A",
    batch: "2022 - 2026",
    regulation: "R-2019",
    department: "Computer Science and Engineering",
    faculty: "Mr. Doe",
    sections: [
      {
        name: "A",
        students: [
          { id: "CSE19A01", name: "Student C1", email: "c1@cse.com" },
          { id: "CSE19A02", name: "Student C2", email: "c2@cse.com" },
        ],
      },
    ],
  },
  {
    name: "B.Tech IT - Section A",
    batch: "2023 - 2027",
    regulation: "R-2023",
    department: "Information Technology",
    faculty: "Mr. Bean",
    sections: [
      {
        name: "A",
        students: [
          { id: "IT23A01", name: "Student D1", email: "d1@it.com" },
          { id: "IT23A02", name: "Student D2", email: "d2@it.com" },
        ],
      },
    ],
  },
];
