
'use client';
import { useState, useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsPatchCheckFill } from 'react-icons/bs';


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showExperienceRequest, setShowExperienceRequest] = useState(false);
  const [experienceFormData, setExperienceFormData] = useState({ email: '', reason: '' });
  const [experienceSent, setExperienceSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/mblypkby', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('❌ Failed to send message. Please try again later.');
      }
    } catch {
      alert('⚠️ An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="animate-hero py-20 text-center relative bg-gradient-to-t from-[#C8E6C9] via-white to-[#FFE0B2] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <img
          src="/assets/profile.png"
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
          <button
            onClick={() => setShowExperienceRequest(true)}
            className="bg-[#4F46E5] text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Experience
          </button>
          <a href="#skills" className="bg-[#10B981] text-white px-6 py-2 rounded hover:bg-emerald-700 transition">Skills</a>
          <a href="#projects" className="bg-[#F59E0B] text-white px-6 py-2 rounded hover:bg-amber-700 transition">Projects</a>
          <button onClick={() => setShowContact(true)} className="bg-[#EF4444] text-white px-6 py-2 rounded hover:bg-red-700 transition">Contact</button>
          <a href="#hobbies" className="ml-8 px-3 py-1 border border-dashed border-purple-500 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-700 rounded transition">
            🎯 Hobbies
          </a>
        </div>

        {/* LinkedIn Badge */}
        <div className="absolute bottom-4 left-4 text-sm text-purple-700 dark:text-purple-300">
          <div className="text-xs mb-1">🔗 LinkedIn</div>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="vk-01110110"
            data-version="v1"
          >
            <a
              href="https://in.linkedin.com/in/vk-01110110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white transition"
            >
              <FaLinkedin className="text-xl text-blue-600" />
              <BsPatchCheckFill className="text-blue-500 text-xl" title="Verified Profile" />
              <span className="underline font-medium">Vijay Kadam</span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
          <HiOutlineMail className="text-lg" />
          <a href="mailto:melon.01.plots@icloud.com" className="underline hover:text-purple-500 transition">
            melon.01.plots@icloud.com
          </a>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 py-10 overflow-y-auto min-h-screen" onClick={() => { setShowContact(false); setSubmitted(false); }}>
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center mb-4 text-purple-700 dark:text-purple-400">Let's Connect 🤝</h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-purple-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 p-3 w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-purple-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 p-3 w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-400 outline-none"
                />

                <div className="mt-1 text-left">
                  <a
                    href="https://paypal.me/sweaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 transition"
                  >
                    <span className="text-yellow-500 text-lg">💛</span>
                    <span className="underline">Optional: Support this initiative via PayPal.</span>
                  </a>
                </div>

                <div className="flex justify-between mt-4">
                  <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition flex items-center gap-2">
                    <FaPaperPlane /> Send
                  </button>
                  <button type="button" onClick={() => setShowContact(false)} className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition">
                    Close
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center p-6">
                <p className="text-green-600 font-bold text-lg">✅ Thank you! Message Sent Successfully.</p>

                <a
                  href="https://paypal.me/sweaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-yellow-400 text-white px-5 py-2 rounded hover:bg-yellow-500 transition animate-pulse"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'paypal_click', {
                        event_category: 'engagement',
                        event_label: 'PayPal Support',
                      });
                    }
                  }}
                >
                  <img src="/assets/pp258.png" alt="PayPal" className="w-6 h-6" />
                  Support via PayPal
                </a>

                <p className="text-xs text-gray-500 mt-2">
                  🇮🇳 Indian users: UPI QR support coming soon.
                </p>

                <button
                  onClick={() => {
                    setShowContact(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
  

      {/* Experience Modal */}
      {showExperienceRequest && (
  <div
    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 py-10"
    onClick={() => {
      setShowExperienceRequest(false);
      setExperienceSent(false);
    }}
  >
    <div
      className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full shadow-2xl relative animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700 dark:text-indigo-400">
        Request Access to My Experience
      </h2>

      {!experienceSent ? (
        <form
  action="https://formspree.io/f/mpwrbedd" // <== use your new form ID
  method="POST"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          setExperienceSent(true);
        } else {
          alert('❌ Failed to submit request.');
        }
      })
      .catch(() => alert('⚠️ Error submitting form.'));
  }}
  className="flex flex-col gap-4"
>
          <input
            type="email"
            name="_replyto"
            required
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Why would you like to view my experience?"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Request Access
            </button>
            <button
              type="button"
              onClick={() => setShowExperienceRequest(false)}
              className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center p-6">
          <p className="text-green-600 font-bold text-lg">✅ Request submitted successfully!</p>
          <p className="text-sm mt-2 text-gray-500">You’ll hear from me soon if approved.</p>
          <button
            onClick={() => setShowExperienceRequest(false)}
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  </div>
)}
    </section>
  );
}
