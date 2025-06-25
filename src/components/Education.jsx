import React from 'react'
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function Education() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="max-w-3xl w-full space-y-12">
        <h1 className="text-3xl font-bold text-orange-400">🎓 Education</h1>

        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-3 transition-colors duration-300">
          <div className="flex items-center gap-3 text-orange-400">
            <AcademicCapIcon className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Bachelor of Computer Engineering</h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Sagarmatha Engineering College, Tribhuvan University — <span className="font-medium">2025</span>
          </p>
          <ul className="list-disc list-inside ml-2 text-base space-y-1">
            <li>Focused on Web Development, AI, Machine Learning, and System Design</li>
            <li>Notable Projects:
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-medium text-orange-400">Timetable Generator</span> — Automated schedule generator for universities</li>
                <li><span className="font-medium text-orange-400">Filmzy App</span> — React app for browsing movies via OMDB API</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-3 transition-colors duration-300">
          <div className="flex items-center gap-3 text-orange-400">
            <BookOpenIcon className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Secondary (+2) Education</h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Arniko Awasiya Secondary School — <span className="font-medium">2020</span>
          </p>
          <ul className="list-disc list-inside ml-2 text-base space-y-1">
            <li>Science stream with focus on Mathematics and Computer Science</li>
            <li>Strong foundation in logical reasoning and programming basics</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
