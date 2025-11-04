import { useState } from "react";
import BatchDetails from "./BatchDetails";

interface Batch {
  years: string;
  regulation: string;
  students: number;
}

export default function Batches() {
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);

  const batchesData: Batch[] = [
    { years: "2021 - 2025", regulation: "R-2019", students: 128 },
    { years: "2022 - 2026", regulation: "R-2019", students: 63 },
    { years: "2023 - 2027", regulation: "R-2023", students: 128 },
    { years: "2024 - 2028", regulation: "R-2023", students: 0 },
  ];

  if (selectedBatch) {
    return (
      <BatchDetails
        batch={selectedBatch}
        onBack={() => setSelectedBatch(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Batches</h2>
        {/* <button className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary/90">
          Add Batch
        </button> */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {batchesData.map((batch, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-8 transition-shadow bg-gray-200 rounded-lg shadow-soft hover:shadow-medium"
          >
            <div>
              <h3 className="text-lg font-bold text-neutral-800">
                {batch.years}
              </h3>
              <p className="text-neutral-600">{batch.regulation}</p>
              <p className="text-neutral-600">{batch.students} Students</p>
            </div>
            <button
              onClick={() => setSelectedBatch(batch)}
              className="self-start px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-primary/90"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}