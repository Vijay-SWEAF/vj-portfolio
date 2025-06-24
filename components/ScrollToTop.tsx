'use client';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to Top"
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-400`}
    >
      <ChevronUp size={20} />
    </button>
  );
}