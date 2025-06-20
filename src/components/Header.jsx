import { NavLink } from 'react-router';
import Toggle from './Toggle';

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-2 py-1 text-sm font-medium ${
      isActive ? 'text-orange-400' : 'text-black dark:text-white'
    } hover:text-orange-400`;

  return (
    <header className="shadow sticky top-0 z-50 bg-white dark:bg-gray-800 text-black dark:text-shadow-white transition-colors duration-500">
      <nav className="max-w-screen-xl mx-auto px-8 lg:px-60 py-7 flex items-center justify-between">
        {/* Centered content container */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-3 text-sm font-medium">
            {/* Name (home link) */}
            <span className="text-black dark:text-white">const</span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-bold ${
                  isActive ? 'text-orange-400' : 'text-gray-800 dark:text-white'
                } hover:text-orange-400`
              }
            >
              Kaushal
            </NavLink>

            {/* = sign */}
            <span className="text-black dark:text-white">=</span>

            {/* [ Links | ... ] */}
            <span className="flex items-center space-x-1 text-black dark:text-white">
              <span>[</span>
              <NavLink to="/education" className={navLinkClass}>
                Education
              </NavLink>
              <span>,</span>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <span>,</span>
              <NavLink to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
              <span>,</span>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
              <span>]</span>
            </span>
          </div>
        </div>

        {/* Dark Mode Toggle on the far right */}
        <div className="ml-auto">
          <Toggle />
        </div>
      </nav>
    </header>
  );
}
