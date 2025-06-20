import React from 'react'

export default function Skills() {
  const skills = [
    'JavaScript (ES6+)',
    'React & Next.js',
    'Node.js & Express',
    'Git & Version Control',
    'Linux Command Line',
    'Tailwind CSS',
    'RESTful APIs',
    'MongoDB & SQL',
  ];

  return (
    <div className="h-[75vh] bg-gray-800 text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-orange-400">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-lg p-4 flex items-center justify-center shadow-md hover:shadow-orange-400 transition-shadow cursor-default"
          >
            <p className="text-lg font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
