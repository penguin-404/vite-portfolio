import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Password Manager',
      description: 'A secure web app to safely store and manage passwords.',
      github: 'https://github.com/yourusername/password-manager',
    },
    {
      id: 2,
      title: 'Timetable Generator',
      description: 'Automates class schedules for engineering colleges.',
      github: 'https://github.com/yourusername/timetable-generator',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal website built with React and Tailwind CSS.',
      github: 'https://github.com/yourusername/portfolio-website',
    },
  ];

  return (
    <div className="h-[75vh] bg-white text-black  dark:bg-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-orange-400">Projects</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, github }) => (
            <a
              key={id}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500 transition-shadow duration-300"
            >
              <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
              <p className="text-gray-300">{description}</p>
              <p className="mt-4 text-orange-400 font-semibold hover:underline">
                View on GitHub →
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
