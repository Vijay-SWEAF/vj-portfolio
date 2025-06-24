export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
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
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
