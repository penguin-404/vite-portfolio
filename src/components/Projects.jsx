import React from 'react'

export default function Projects() {
  const featured = {
    title: 'Timetable Generator',
    tag: 'System Design',
    description:
      'A scheduling engine for engineering colleges that resolves conflicting constraints (rooms, teachers, sections) using Genetic Algorithms and Particle Swarm Optimization. The interesting part was modeling the problem itself, not the UI.',
    tech: ['Node.js', 'Genetic Algorithm', 'PSO'],
    github: 'https://github.com/penguin-404/ATG_pso',
  };

  const other = [
    {
      id: 1,
      title: 'YouTube Backend Clone',
      description:
        'Core backend of a video platform: auth, video/user data models, and RESTful endpoints, built in Express and tested end-to-end with Postman.',
      tech: ['Node.js', 'Express', 'MongoDB', 'REST'],
      github: 'https://github.com/penguin-404/youtube_backend_clone',
    },
    {
      id: 2,
      title: 'Filmzy',
      description:
        'Movie search app consuming the OMDb API. Started as a frontend exercise, kept around as a reference for clean API consumption and error handling on the client side.',
      tech: ['React', 'OMDb API'],
      github: 'https://filmzy.netlify.app/',
    },
    {
      id: 3,
      title: 'Weather App',
      description:
        'Small tool fetching live weather from OpenWeatherMap, later packaged as a browser extension — a first pass at working with third-party APIs and rate limits.',
      tech: ['JavaScript', 'OpenWeatherMap API'],
      github: 'https://github.com/penguin-404/weather-app/',
    },
    {
      id: 4,
      title: 'Text-to-QR',
      description:
        'Generates QR codes from user input text. Basic project from early on, useful for practicing DOM manipulation and event handling.',
      tech: ['JavaScript'],
      github: 'https://github.com/penguin-404/text-to-qr',
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-2">
          GET /projects
        </p>
        <h2 className="text-2xl font-bold text-[#1B1F27] dark:text-[#E8E6DE] mb-10">Projects</h2>

        <a
          href={featured.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 mb-6 rounded-lg border border-[#B45309]/30 dark:border-[#FBBF24]/30 bg-white dark:bg-[#151719] hover:border-[#16A34A]/70 dark:hover:border-[#4ADE80]/70 transition-colors"
        >
          <span className="font-mono text-xs uppercase tracking-wide text-[#B45309] dark:text-[#FBBF24]">
            Featured · {featured.tag}
          </span>
          <h3 className="text-lg font-semibold text-[#1B1F27] dark:text-[#E8E6DE] mt-2 mb-2">{featured.title}</h3>
          <p className="text-[#1B1F27]/70 dark:text-[#E8E6DE]/70 mb-4 text-sm">{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {featured.tech.map((t) => (
              <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-black/[0.05] dark:bg-white/[0.06] text-[#6B7280] dark:text-[#8A8F98]">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[#16A34A] dark:text-[#4ADE80] font-medium text-sm">View on GitHub →</p>
        </a>

        <div className="grid gap-4 sm:grid-cols-2">
          {other.map(({ id, title, description, tech, github }) => (
            <a
              key={id}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] hover:border-[#16A34A]/50 dark:hover:border-[#4ADE80]/50 transition-colors"
            >
              <h3 className="text-base font-semibold text-[#1B1F27] dark:text-[#E8E6DE] mb-2">{title}</h3>
              <p className="text-sm text-[#1B1F27]/60 dark:text-[#E8E6DE]/60 mb-3">{description}</p>
              <div className="flex flex-wrap gap-2 mb-1">
                {tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.06] text-[#6B7280] dark:text-[#8A8F98]">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-1 text-[#16A34A] dark:text-[#4ADE80] font-medium text-sm">View on GitHub →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
