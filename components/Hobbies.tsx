// Hobbies & Interests Section (before Contact)
import { JSX } from 'react';
import {
  FaLaptopCode,
  FaBookOpen,
  FaPaintBrush,
  FaHeadphones,
  FaChessKnight,
  FaPlane,
  FaUsers
} from 'react-icons/fa';

type Hobby = {
  icon: JSX.Element;
  label: string;
};

const HOBBIES: Hobby[] = [
  { icon: <FaLaptopCode className="text-3xl" />, label: 'Computer & Technology' },
  { icon: <FaBookOpen className="text-3xl" />, label: 'Reading & Writing' },
  { icon: <FaPaintBrush className="text-3xl" />, label: 'Art & Painting' },
  { icon: <FaHeadphones className="text-3xl" />, label: 'Listening Music' },
  { icon: <FaChessKnight className="text-3xl" />, label: 'Chess' },
  { icon: <FaPlane className="text-3xl" />, label: 'Travel' },
  {
    icon: <FaUsers className="text-3xl" />,
    label: 'Behavioural Intelligence'}
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="animate-hobbies py-20 bg-white dark:bg-gray-800"
      aria-labelledby="hobbies-heading"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          id="hobbies-heading"
          className="text-3xl font-bold mb-8"
        >
          Hobbies &amp; Interests
        </h2>

        {/* One row, equal columns on sm+ screens */}
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-8 justify-items-center">
          {HOBBIES.map((hobby) => (
            <div
              key={hobby.label}
              className="flex flex-col items-center"
            >
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