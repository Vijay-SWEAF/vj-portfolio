'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode state based on document
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  
  // Theme toggle function
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-end transition-all ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md'
          : ''
      }`}
    >
      <div className="flex items-center gap-2">
        {/* Language Switcher */}
        {[
          { flag: '🇬🇧', code: 'EN' },
         // { flag: '🇫🇷', code: 'FR' },
// { flag: '🇪🇸', code: 'ES' },
// { flag: '🇵🇹', code: 'PT' }
        ].map(({ flag, code }) => (
          <button
            key={code}
            className="flex items-center gap-1 text-sm px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {flag} {code}
          </button>
        ))}

        {/* Theme Toggle Icon */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center text-sm px-3 py-1 border border-gray-600 dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}