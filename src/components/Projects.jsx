import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Filmzy',
      description: 'Filmzy is a React app that lets users search for movies by keywords using the OMDb API. It displays a list of matching movies with posters, titles, and ratings in a clean, card-based layout. You can check movies by going to the link below.',
      github: 'https://filmzy.netlify.app/',
    },
    {
      id: 2,
      title: 'Timetable Generator',
      description: 'Automates class schedules for engineering colleges using Genetic (GA) and Particle Swarm Optimization (PSO) algorithm.',
      github: 'https://github.com/penguin-404/ATG_pso',
    },
    {
      id: 3,
      title: 'Youtube Backend Clone',
      description: 'YouTube Backend Clone is a Node.js and Express-based project built by following a tutorial. It replicates core backend functionalities of YouTube, such as handling video data and user endpoints. Through this project, I learned how to structure RESTful APIs and used Postman for API testing and integration.',
      github: 'https://github.com/penguin-404/youtube_backend_clone',
    },
    {
      id: 4,
      title: 'Text-to-QR webapp',
      description: 'Text to QR Code Generator is a basic JavaScript project I built while learning JS. It takes user input text and generates a QR code instantly using a QR code API or library. It helped me understand DOM manipulation and event handling in JavaScript.',
      github: 'https://github.com/penguin-404/text-to-qr',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Simple Weather App is a JavaScript project I built while learning JS. It fetches real-time weather data using the OpenWeatherMap API based on the users input. I also learned how to turn it into a browser extension, gaining hands-on experience with API integration, DOM manipulation, and extension deployment.',
      github: 'https://github.com/penguin-404/weather-app/',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black  dark:bg-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl mb-8 font-bold text-orange-400">Projects</h1>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
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
