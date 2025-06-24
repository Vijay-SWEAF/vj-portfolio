// Skills.tsx with Small Top-Left Fill Circle as Skill Level Indicator

'use client';
import {
  FaPython, FaDatabase, FaReact, FaNodeJs, FaMicrosoft, FaShip, FaFigma,
  FaHtml5, FaCss3Alt, FaCode, FaChalkboardTeacher, FaLaptopCode,
  FaPaintBrush, FaMobileAlt, FaLightbulb
} from "react-icons/fa";
import {
  SiDotnet, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,
  SiAdobeaftereffects, SiAdobeaudition, SiAdobedreamweaver, SiOpenai
} from "react-icons/si";

const skills = [
  
  { name: 'Shipping Ops', icon: <FaShip className="text-indigo-500" />, level: 95 },
  { name: 'Creative Thinking', icon: <FaLightbulb className="text-yellow-400" />, level: 95 },
  { name: 'Excel VBA', icon: <FaMicrosoft className="text-green-700" />, level: 95 },
  { name: 'VB / C# / .NET', icon: <FaCode className="text-indigo-600" />, level: 90 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: 'Whiteboard Animation', icon: <FaChalkboardTeacher className="text-gray-600" />, level: 90 },
  { name: 'Web Designing', icon: <FaLaptopCode className="text-blue-600" />, level: 90 },
  { name: 'UI/UX Design', icon: <FaFigma className="text-pink-500" />, level: 85 },
  { name: 'AI Tools Awareness', icon: <SiOpenai className="text-black" />, level: 85 },
  { name: 'Graphic Designing', icon: <FaPaintBrush className="text-pink-600" />, level: 85 },
  { name: 'React / Next.js', icon: <FaReact className="text-cyan-500" />, level: 80 },
  { name: 'SQL / MySQL', icon: <FaDatabase className="text-blue-500" />, level: 80 },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-400" />, level: 80 },
  { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-purple-500" />, level: 80 },
  { name: 'Adobe Express', icon: <SiAdobedreamweaver className="text-red-400" />, level: 80 },
  { name: 'App Development', icon: <FaMobileAlt className="text-purple-500" />, level: 80 },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-400" />, level: 75 },
  { name: 'Audition', icon: <SiAdobeaudition className="text-green-600" />, level: 75 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 70 },
  { name: 'After Effects', icon: <SiAdobeaftereffects className="text-blue-700" />, level: 70 },
  { name: 'Python', icon: <FaPython className="text-yellow-500" />, level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 animate-fade">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-center flex-col bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition w-full"
            >
              <div
                className="absolute top-2 left-2 w-4 h-4 rounded-full"
                style={{
                  background: `conic-gradient(#83888d ${skill.level}%, #E5E7EB ${skill.level}% 100%)`
                }}
              ></div>
              <div className="text-3xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-800 dark:text-white text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}