'use client';
import { useState, useEffect } from 'react';
import { FaLanguage } from 'react-icons/fa';

const languageSkills = [
  {
    flag: '🇬🇧',
    name: 'English',
    level: 60,
    desc: 'Self-assessed intermediate proficiency, used in professional correspondence and presentations.',
    proficiency: 'Intermediate (B1/B2)',
  },
  {
    flag: '🇫🇷',
    name: 'French',
    level: 30,
    desc: 'Self-assessed basic proficiency, studied via Duolingo for reading and basic conversation.',
    proficiency: 'Basic (A1)',
  },
  {
    flag: '🇩🇪',
    name: 'German',
    level: 30,
    desc: 'Self-assessed basic proficiency, studied via Duolingo for reading and basic conversation.',
    proficiency: 'Basic (A1)',
  },
  {
    flag: '🇮🇳',
    name: 'Hindi',
    level: 100,
    desc: 'Fluent, used in professional and personal communication.',
    proficiency: 'Fluent (C2)',
  },
];

export default function Languages() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    setFlippedIndex(0);
    const timer = setTimeout(() => setFlippedIndex(null), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="languages" className="py-10 bg-gray-50 dark:bg-gray-800 animate-fade">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-2">Languages</h2>
        {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 italic">
          🔁 Hover over a language card to view details
        </p> */}

        <div className="flex flex-wrap justify-center gap-6">
          {languageSkills.map((lang, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
              className="relative w-48 h-40 cursor-pointer perspective" // Increased width to w-48
              role="button"
              aria-label={`Language card for ${lang.name}`}
            >
              <div
                className={`transition-transform duration-500 transform-style preserve-3d w-full h-full ${
                  flippedIndex === idx ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center justify-center backface-hidden">
                  <div
                    className="absolute top-2 left-2 w-4 h-4 rounded-full"
                    style={{ background: `conic-gradient(#83888d ${lang.level}%, #E5E7EB ${lang.level}% 100%)` }}
                  ></div>
                  <span className="text-2xl mb-2" aria-hidden="true">
                    {lang.flag}
                  </span>
                  <div className="text-3xl mb-2">
                    <FaLanguage className="text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white text-center">
                    {lang.name}
                  </span>
                  <span className="absolute bottom-2 text-xs text-gray-400 italic pointer-events-none">
                    Hover to flip
                  </span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-800 p-4 rounded shadow flex flex-col items-center justify-center text-sm text-gray-900 dark:text-white text-center rotate-y-180 backface-hidden">
                  <span className="font-medium">{lang.proficiency}</span>
                  <span className="mt-2 text-xs leading-tight">{lang.desc}</span> {/* Adjusted text-xs and leading-tight for better fit */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}