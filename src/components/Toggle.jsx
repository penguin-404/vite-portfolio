import { useEffect, useState } from 'react';

export default function Toggle() {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  // Update dark class and save preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">☀️</span>
      
      <div
        onClick={() => setIsDark(!isDark)}
        className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition duration-300"
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>

      <span className="text-sm">🌙</span>
    </div>
  );
}
