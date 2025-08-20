import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden text-center"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradientBackground -z-10"></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow delay-500"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 animate-fadeIn">Get In Touch</h2>

      {/* Contact Form */}
      <form className="flex flex-col gap-6 max-w-2xl mx-auto animate-fadeIn delay-200">
        <input
          type="text"
          placeholder="Your Name"
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 shadow-sm transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 shadow-sm transition"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 shadow-sm transition"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-6 animate-fadeIn delay-400">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
