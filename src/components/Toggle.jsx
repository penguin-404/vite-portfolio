import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Toggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle color theme"
      className="flex items-center gap-1.5 rounded-md border border-black/[0.08] dark:border-white/[0.08] px-2 py-1.5 text-[#6B7280] dark:text-[#8A8F98] hover:text-[#1B1F27] dark:hover:text-[#E8E6DE] transition-colors"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
