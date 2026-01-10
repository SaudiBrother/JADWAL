import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        {/* Sun icon */}
        <i 
          className={`fas fa-sun absolute text-lg transition-all duration-300 ${
            isDark 
              ? 'opacity-0 rotate-180' 
              : 'opacity-100 rotate-0 text-amber-400'
          }`}
        />
        {/* Moon icon */}
        <i 
          className={`fas fa-moon absolute text-lg transition-all duration-300 ${
            isDark 
              ? 'opacity-100 rotate-0 text-blue-400' 
              : 'opacity-0 -rotate-180'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
