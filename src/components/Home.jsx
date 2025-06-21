import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <div className="h-[75vh] flex items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white px-6">
        <ul className="list-none space-y-7 text-xl lg:text-2xl text-justify max-w-xl">
          <li className="before:content-['-'] before:mr-2">
            Hi, I’m <span className="text-orange-400 font-bold">Kaushal</span> — I turn coffee into JavaScript.
          </li>
          <li className="before:content-['-'] before:mr-2">
            Reacting to bugs with <span className="font-semibold">React</span>.
          </li>
          <li className="before:content-['-'] before:mr-2">
            <span className="font-semibold">Next.js</span> developer by day, debugger by night.
          </li>
          <li className="before:content-['-'] before:mr-2">
            <span className="font-semibold">Linux</span> user: because I like living on the edge.
          </li>
          <li className="before:content-['-'] before:mr-2">
            <span className="font-semibold text-orange-400">JavaScript</span> is my love language.
          </li>
          <li className="before:content-['-'] before:mr-2">
            Debugging: my favorite extreme sport.
          </li>
          <li className="before:content-['-'] before:mr-2">
            CSS and I are in a love-hate relationship.
          </li>
          <li className="mt-6">
            <Link to="/updates" className="text-orange-400 font-semibold hover:underline">
              See what I'm working on right now →
            </Link>
          </li>
        </ul>
      </div>

    </>

  )
}

export default Home
