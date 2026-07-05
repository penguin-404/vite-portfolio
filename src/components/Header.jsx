import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Toggle from './Toggle';

const links = [
  { id: 'home', label: 'GET /' },
  { id: 'education', label: 'GET /education' },
  { id: 'projects', label: 'GET /projects' },
  { id: 'stack', label: 'GET /stack' },
  { id: 'contact', label: 'GET /contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F6F2]/90 dark:bg-[#0B0C0E]/90 backdrop-blur border-b border-black/[0.08] dark:border-white/[0.08]">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
        <button
          onClick={() => handleClick('home')}
          className="font-mono font-semibold text-[#B45309] dark:text-[#FBBF24] text-sm"
        >
          kaushal.dev
        </button>

        <div className="hidden sm:flex space-x-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`px-3 py-2 font-mono text-xs tracking-wide transition-colors ${
                active === l.id
                  ? 'text-[#16A34A] dark:text-[#4ADE80]'
                  : 'text-[#6B7280] dark:text-[#8A8F98] hover:text-[#1B1F27] dark:hover:text-[#E8E6DE]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Toggle />
          <button
            className="sm:hidden text-[#1B1F27] dark:text-[#E8E6DE]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="sm:hidden border-t border-black/[0.08] dark:border-white/[0.08] px-4 py-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`block w-full text-left py-2 font-mono text-xs tracking-wide ${
                active === l.id
                  ? 'text-[#16A34A] dark:text-[#4ADE80]'
                  : 'text-[#6B7280] dark:text-[#8A8F98]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
