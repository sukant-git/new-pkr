export default function PO() {
  const poData = [
    {
      name: "PO1",
      title: "Engineering knowledge",
      description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    },
    {
      name: "PO2",
      title: "Problem analysis",
      description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    },
    {
      name: "PO3",
      title: "Design/development of solutions",
      description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    },
    {
      name: "PO4",
      title: "Conduct investigations of complex problems",
      description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    },
    {
      name: "PO5",
      title: "Modern tool usage",
      description: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    },
    {
      name: "PO6",
      title: "The engineer and society",
      description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    },
    {
      name: "PO7",
      title: "Environment and sustainability",
      description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    },
    {
      name: "PO8",
      title: "Ethics",
      description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    },
    {
      name: "PO9",
      title: "Individual and team work",
      description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    },
    {
      name: "PO10",
      title: "Communication",
      description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    },
    {
      name: "PO11",
      title: "Project management and finance",
      description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    },
    {
      name: "PO12",
      title: "Life-long learning",
      description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    },
  ];
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Program Outcome</h2>
        {/* <button className="px-6 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-800 border-2 border-gray-800">
          Add PO
        </button> */}
      </div>
      <div className="bg-white border-2 border-gray-800 p-8">
        <table className="w-full text-left border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold border border-gray-400">PO</th>
              <th className="p-4 font-semibold border border-gray-400">Title</th>
              <th className="p-4 font-semibold border border-gray-400">Description</th>
            </tr>
          </thead>
          <tbody>
            {poData.map((po, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="p-4 border border-gray-400">{po.name}</td>
                <td className="p-4 border border-gray-400">{po.title}</td>
                <td className="p-4 border border-gray-400">{po.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
