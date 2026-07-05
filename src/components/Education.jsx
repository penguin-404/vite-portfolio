import React from 'react'
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-2">
            GET /education
          </p>
          <h2 className="text-2xl font-bold text-[#1B1F27] dark:text-[#E8E6DE]">Education</h2>
        </div>

        <div className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] p-6 rounded-lg space-y-3">
          <div className="flex items-center gap-3 text-[#B45309] dark:text-[#FBBF24]">
            <AcademicCapIcon className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[#1B1F27] dark:text-[#E8E6DE]">Bachelor of Computer Engineering</h3>
          </div>
          <p className="text-sm text-[#6B7280] dark:text-[#8A8F98]">
            Sagarmatha Engineering College, Tribhuvan University — <span className="font-medium">2025</span>
          </p>
          <ul className="list-disc list-inside ml-2 text-[#1B1F27]/90 dark:text-[#E8E6DE]/90 space-y-1">
            <li>Coursework centered on system design, databases, and backend architecture</li>
            <li>Notable projects:
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="text-[#B45309] dark:text-[#FBBF24]">Timetable Generator</span> — constraint-solving engine using GA and PSO</li>
                <li><span className="text-[#B45309] dark:text-[#FBBF24]">YouTube Backend Clone</span> — REST API and data modeling in Express</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] p-6 rounded-lg space-y-3">
          <div className="flex items-center gap-3 text-[#B45309] dark:text-[#FBBF24]">
            <BookOpenIcon className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[#1B1F27] dark:text-[#E8E6DE]">Secondary (+2) Education</h3>
          </div>
          <p className="text-sm text-[#6B7280] dark:text-[#8A8F98]">
            Arniko Awasiya Secondary School — <span className="font-medium">2020</span>
          </p>
          <ul className="list-disc list-inside ml-2 text-[#1B1F27]/90 dark:text-[#E8E6DE]/90 space-y-1">
            <li>Science stream with a focus on mathematics and computer science</li>
            <li>Foundation in logical reasoning that carried directly into algorithms and system design</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
