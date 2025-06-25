import { NavLink } from 'react-router';
import Toggle from './Toggle';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-sm font-medium ${
      isActive ? 'text-orange-400' : 'text-black dark:text-white'
    } hover:text-orange-400`;

  return (
    <header className="shadow sticky top-0 z-50 bg-white dark:bg-gray-800 text-black dark:text-white">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo or Hamburger */}
        <div className="flex items-center">
          {/* Hamburger only on small screens */}
          <button
            className="sm:hidden text-black dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo on larger screens */}
          <NavLink
            to="/"
            className="hidden sm:block text-lg font-bold text-orange-400 ml-2"
          >
            Kaushal
          </NavLink>
        </div>

        {/* Nav Links for large screens */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/education" className={navLinkClass}>Education</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/skills" className={navLinkClass}>Skills</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* Toggle always at right */}
        <div className="ml-4">
          <Toggle />
        </div>
      </nav>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 border-t dark:border-white px-4 pb-4">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/education" className={navLinkClass} onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" className={navLinkClass} onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
