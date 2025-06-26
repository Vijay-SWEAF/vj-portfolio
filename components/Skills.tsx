'use client';
import { useState } from 'react';
import {
  FaPython, FaDatabase, FaReact, FaNodeJs, FaMicrosoft, FaShip, FaFigma,
  FaHtml5, FaCss3Alt, FaCode, FaChalkboardTeacher, FaLaptopCode,
  FaPaintBrush, FaMobileAlt, FaLightbulb
} from "react-icons/fa";
import {
  SiDotnet, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,
  SiAdobeaftereffects, SiAdobeaudition, SiAdobedreamweaver, SiOpenai
} from "react-icons/si";

// Add descriptions here
const skills = [
  { name: 'Shipping Ops', icon: <FaShip className="text-indigo-500" />, level: 95, desc: 'Hands-on expertise in port operations, documentation, vessel handling, and logistics workflows.' },
  { name: 'Creative Thinking', icon: <FaLightbulb className="text-yellow-400" />, level: 95, desc: 'Ability to ideate fresh, innovative solutions under real-world constraints and business needs.' },
  { name: 'Excel VBA', icon: <FaMicrosoft className="text-green-700" />, level: 95, desc: 'Automated multiple reports and dashboards using VBA macros, formulas, pivot tables, and scripts.' },
  { name: 'VB / C# / .NET', icon: <FaCode className="text-indigo-600" />, level: 90, desc: 'Built enterprise-level applications with WinForms, .NET APIs, and Windows-based utilities.' },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 90, desc: 'Strong foundation in semantic HTML, responsive structures, and accessibility practices.' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90, desc: 'Styled modern UI with Tailwind, Flexbox, and media queries for consistent layouts.' },
  { name: 'Whiteboard Animation', icon: <FaChalkboardTeacher className="text-gray-600" />, level: 90, desc: 'Created story-driven educational videos using tools like Doodly and VideoScribe.' },
  { name: 'Web Designing', icon: <FaLaptopCode className="text-blue-600" />, level: 90, desc: 'Crafted aesthetically pleasing, fully responsive modern UI using layers and shapes.' },
  { name: 'UI/UX Design', icon: <FaFigma className="text-pink-500" />, level: 85, desc: 'Designed interactive prototypes and user journeys using Figma and Adobe XD.' },
  { name: 'AI Tools Awareness', icon: <SiOpenai className="text-black" />, level: 85, desc: 'Comfortable using GPT, DALL·E, and other AI APIs to enhance workflows.' },
  { name: 'Graphic Designing', icon: <FaPaintBrush className="text-pink-600" />, level: 85, desc: 'Generated sleek, aesthetic content using templates for posters, thumbnails, and banners.' },
  { name: 'React / Next.js', icon: <FaReact className="text-cyan-500" />, level: 80, desc: 'Built frontend apps with React and server-rendered apps using Next.js for speed.' },
  { name: 'SQL / MySQL', icon: <FaDatabase className="text-blue-500" />, level: 80, desc: 'Efficient with joins, queries, and indexing for relational data management.' },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-400" />, level: 80, desc: 'Created social media graphics, logos, and content visuals.' },
  { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-purple-500" />, level: 80, desc: 'Video editing with transitions, subtitles, and export-ready formats.' },
  { name: 'Adobe Express', icon: <SiAdobedreamweaver className="text-red-400" />, level: 80, desc: 'Designed content quickly using pre-built templates.' },
  { name: 'App Development', icon: <FaMobileAlt className="text-purple-500" />, level: 80, desc: 'Built hybrid mobile apps using Bootstrap, Flutter and basic scripts.' },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-400" />, level: 75, desc: 'Created vector logos, illustrations, and icon sets.' },
  { name: 'Audition', icon: <SiAdobeaudition className="text-green-600" />, level: 75, desc: 'Audio cleanup for voiceovers, podcasts, and recordings professionally.' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 70, desc: 'Built scripts using Node.js with Express and MongoDB basics.' },
  { name: 'After Effects', icon: <SiAdobeaftereffects className="text-blue-700" />, level: 70, desc: 'Animated graphics and text sequences for intros, logos, and motion visuals.' },
  { name: 'Python', icon: <FaPython className="text-yellow-500" />, level: 60, desc: 'Automation using Python for personal productivity tools.' },
];

export default function Skills() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 animate-fade">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
              className="relative w-full h-40 cursor-pointer perspective"
            >
              <div className={`transition-transform duration-500 transform-style preserve-3d w-full h-full ${flippedIndex === idx ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center justify-center backface-hidden">
                  <div
                    className="absolute top-2 left-2 w-4 h-4 rounded-full"
                    style={{ background: `conic-gradient(#83888d ${skill.level}%, #E5E7EB ${skill.level}% 100%)` }}
                  ></div>
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white text-center">
                    {skill.name}
                  </span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-800 p-4 rounded shadow flex items-center justify-center text-sm text-gray-900 dark:text-white text-center rotate-y-180 backface-hidden">
                  {skill.desc}
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