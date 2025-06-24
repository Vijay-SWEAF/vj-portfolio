// Hobbies & Interests Section (before Contact)
import { FaLaptopCode, FaBookOpen, FaPaintBrush, FaHeadphones, FaChessKnight, FaPlane } from 'react-icons/fa';

export default function Hobbies() {
  const hobbies = [
    { icon: <FaLaptopCode className="text-3xl" />, label: 'Computer & Technology' },
    { icon: <FaBookOpen className="text-3xl" />, label: 'Reading & Writing' },
    { icon: <FaPaintBrush className="text-3xl" />, label: 'Art & Painting' },
    { icon: <FaHeadphones className="text-3xl" />, label: 'Listening Music' },
    { icon: <FaChessKnight className="text-3xl" />, label: 'Chess' },
    { icon: <FaPlane className="text-3xl" />, label: 'Travel' }
  ];

  return (
    <section id="hobbies" className="animate-hobbies py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Hobbies / Interest</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {hobby.icon}
              <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                {hobby.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}