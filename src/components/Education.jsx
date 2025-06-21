import React from 'react'

export default function Education() {
  return (
    <div className="h-[75vh] bg-white text-black  dark:bg-gray-800 dark:text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-orange-400">Education</h1>

        <div className="space-y-10 text-lg text-justify">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-1">
              Bachelor of Computer Engineering – Sagarmatha Engineering College, TU
              <span className="block text-sm text-black dark:text-white">2025</span>
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Focused on Web Development, AI, Machine Learning, and System Design</li>
              <li>Projects include a Timetable Generator and a Filmzy App</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-1">
              Secondary School (+2) – Arniko Awasiya Secondary School
              <span className="block text-sm text-black dark:text-white">2020</span>
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Science Stream with a focus on Mathematics and Computer Science</li>
              <li>Developed strong foundational knowledge for engineering studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

