import { useEffect, useState } from 'react';

export default function Toggle() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
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
  );
}
