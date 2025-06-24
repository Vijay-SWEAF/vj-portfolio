'use client';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="animate-hero py-20 text-center relative bg-gradient-to-t from-[#C8E6C9] via-white to-[#FFE0B2] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <img
          src="/assets/profile.jpg"
          alt="Vijay Kadam"
          className="mx-auto mb-6 w-32 h-32 rounded-full object-cover border-4 border-purple-600 shadow-lg"
        />

        <h1 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
          Hello! I’m Vijay
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6">
          🤝 Connecting People • 🧪 Testing Skills • 💡 Creating Solutions
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#experience" className="bg-[#4F46E5] text-white px-6 py-2 rounded hover:bg-indigo-700 transition">Experience</a>
          <a href="#skills" className="bg-[#10B981] text-white px-6 py-2 rounded hover:bg-emerald-700 transition">Skills</a>
          <a href="#projects" className="bg-[#F59E0B] text-white px-6 py-2 rounded hover:bg-amber-700 transition">Projects</a>
          <button onClick={() => setShowContact(true)} className="bg-[#EF4444] text-white px-6 py-2 rounded hover:bg-red-700 transition">Contact</button>
          <a
            href="#hobbies"
            className="ml-8 px-3 py-1 border border-dashed border-purple-500 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-700 rounded transition"
          >
            🎯 Hobbies
          </a>
        </div>

        {/* Email block */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
          <HiOutlineMail className="text-lg" />
          <a
            href="mailto:melon.01.plots@icloud.com"
            className="underline hover:text-purple-500 transition"
          >
            melon.01.plots@icloud.com
          </a>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
          onClick={() => setShowContact(false)} // close modal on backdrop click
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
          >
           
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <form action="https://formspree.io/f/mwkggvgr" method="POST" className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                required
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                required
              />
              <div className="flex justify-end gap-3 mt-4">
  <button
    type="submit"
    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
  >
    Send Message
  </button>
  <button
    type="button"
    onClick={() => setShowContact(false)}
    className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition"
  >
    Close
  </button>
</div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}