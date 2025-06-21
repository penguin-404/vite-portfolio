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
    <div className="h-[75vh] bg-white text-black  dark:bg-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-orange-400 text-left">My Skills</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg p-4 flex items-center justify-center shadow-md hover:shadow-orange-400 transition-shadow cursor-default"
            >
              <p className="text-lg text-white font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
