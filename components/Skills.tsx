'use client';
import { useState, useEffect } from 'react';
import {
  FaPython, FaDatabase, FaReact, FaNodeJs, FaMicrosoft, FaShip, FaFigma,
  FaHtml5, FaCss3Alt, FaCode, FaChalkboardTeacher, FaLaptopCode,
  FaPaintBrush, FaMobileAlt, FaLightbulb, FaFilm, FaCloud
} from "react-icons/fa";
import {
  SiDotnet, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,
  SiAdobeaftereffects, SiAdobeaudition, SiAdobexd, SiOpenai, SiDjango,
  SiAmazon, SiGooglecloud
} from "react-icons/si";

const skillCategories = {
  General: [
    { name: 'Shipping Ops', icon: <FaShip className="text-indigo-500" />, level: 95, desc: 'Hands-on expertise in port operations, documentation, vessel handling, and logistics workflows.' },
    { name: 'Creative Thinking', icon: <FaLightbulb className="text-yellow-400" />, level: 95, desc: 'Ability to ideate innovative solutions under real-world constraints.' },
    { name: 'Excel VBA', icon: <FaMicrosoft className="text-green-700" />, level: 95, desc: 'Automated dashboards using macros, formulas, and pivot tables.' },
  { name: 'Presentation Skills', icon: <FaChalkboardTeacher className="text-red-500" />, level: 85, desc: 'Clear, confident delivery in meetings, workshops, and client demos with storytelling edge.' },
  ],
  Programming: [
    { name: 'VB / C# / .NET', icon: <FaCode className="text-indigo-600" />, level: 90, desc: 'Built enterprise apps using WinForms and .NET APIs.' },
    { name: 'Python', icon: <FaPython className="text-yellow-500" />, level: 60, desc: 'Automation with Python scripts for personal tools.' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 70, desc: 'Basic scripts with Express and MongoDB.' },
    { name: 'Django', icon: <SiDjango className="text-green-900" />, level: 60, desc: 'Full-stack apps with Django admin, models, views.' },
    { name: 'Machine Learning', icon: <FaCloud className="text-gray-500" />, level: 40, desc: (
    <a
      href="https://www.kaggle.com/vijayvj17"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Explore my Kaggle projects
    </a>
) },
],
  Frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 90, desc: 'Semantic HTML and responsive design.' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90, desc: 'Styled layouts with Tailwind, Flexbox, media queries.' },
    { name: 'React / Next.js', icon: <FaReact className="text-cyan-500" />, level: 80, desc: 'Frontend + SSR apps with React and Next.js.' },
    { name: 'App Development', icon: <FaMobileAlt className="text-purple-500" />, level: 80, desc: 'Hybrid mobile apps using Bootstrap & Flutter basics.' },
  ],
  Cloud: [
    { name: 'Azure', icon: <FaMicrosoft className="text-blue-500" />, level: 55, desc: 'Managed Azure services for app hosting, storage, and identity.' },
    { name: 'AWS', icon: <SiAmazon className="text-orange-600" />, level: 55, desc: 'Experience with EC2, S3, Lambda, and SES for personal apps.' },
    { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" />, level: 55, desc: 'Used Firebase, Cloud Storage, and APIs in side projects.' },
  ],
  Creative: [
    { name: 'Whiteboard Animation', icon: <FaChalkboardTeacher className="text-gray-600" />, level: 90, desc: 'Created educational videos using Doodly, VideoScribe.' },
    { name: 'Web Designing', icon: <FaLaptopCode className="text-blue-600" />, level: 90, desc: 'Pixel-perfect UIs with responsive behavior.' },
    { name: 'UI/UX Design', icon: <FaFigma className="text-pink-500" />, level: 85, desc: 'Prototypes & wireframes in Figma, Adobe XD.' },
    { name: 'AI Tools Awareness', icon: <SiOpenai className="text-black" />, level: 85, desc: 'GPT, DALL·E and generative workflows in practice.' },
    { name: 'Graphic Designing', icon: <FaPaintBrush className="text-pink-600" />, level: 85, desc: 'Social graphics using templates and creative tools.' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-400" />, level: 80, desc: 'Thumbnails, posters, and visual cleanups.' },
    { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-purple-500" />, level: 80, desc: 'Cutting, transitions, titles for final video output.' },
    { name: 'Adobe Express', icon: <SiAdobexd className="text-red-400" />, level: 80, desc: 'Quick visual designs using pre-built templates.' },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-400" />, level: 75, desc: 'Vector logos and clean illustrations.' },
    { name: 'Audition', icon: <SiAdobeaudition className="text-green-600" />, level: 75, desc: 'Voiceovers and audio cleanup for video content.' },
    { name: 'After Effects', icon: <SiAdobeaftereffects className="text-blue-700" />, level: 70, desc: 'Motion design and logo animations.' },
    { name: 'Adobe Animate', icon: <FaFilm className="text-pink-500" />, level: 70, desc: 'Created animated banners, interactive visuals, and frame-by-frame character motion using Adobe Animate.' }
  ],
  Database: [
    { name: 'SQL / MySQL', icon: <FaDatabase className="text-blue-500" />, level: 80, desc: 'Complex joins, procedures, and relational schemas.' }
  ]
};

export default function Skills() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    setFlippedIndex(0);
    const timer = setTimeout(() => setFlippedIndex(null), 2500);
    return () => clearTimeout(timer);
  }, []);

  let skillIndex = 0;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 animate-fade">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 italic">
          🔁 Click on a skill card to view details
        </p>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold text-left text-purple-700 dark:text-purple-300 mb-3">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {skills.map((skill) => {
                const currentIndex = skillIndex++;
                return (
                  <div
                    key={currentIndex}
                    onClick={() => setFlippedIndex(flippedIndex === currentIndex ? null : currentIndex)}
                    className="relative w-full h-40 cursor-pointer perspective"
                  >
                    <div className={`transition-transform duration-500 transform-style preserve-3d w-full h-full ${flippedIndex === currentIndex ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className="absolute inset-0 bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center justify-center backface-hidden">
                        <div
                          className="absolute top-2 left-2 w-4 h-4 rounded-full"
                          style={{ background: `conic-gradient(#83888d ${skill.level}%, #E5E7EB ${skill.level}% 100%)` }}
                        ></div>
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <span className="text-sm font-medium text-gray-800 dark:text-white text-center">
                          {skill.name}
                        </span>
                        <span className="absolute bottom-2 text-xs text-gray-400 italic pointer-events-none">
                          Click to flip
                        </span>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 bg-purple-100 dark:bg-purple-800 p-4 rounded shadow flex items-center justify-center text-sm text-gray-900 dark:text-white text-center rotate-y-180 backface-hidden">
                        {skill.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
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