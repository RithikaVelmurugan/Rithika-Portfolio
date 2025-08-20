import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 max-w-6xl mx-auto px-6 text-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradientBackground -z-10"></div>

      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow delay-500"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-8 animate-fadeIn">About Me</h2>

      {/* Intro Text */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 animate-fadeIn delay-200">
        I’m an IT student specializing in{" "}
        <span className="font-semibold text-indigo-600">
          Frontend Development
        </span>
        . I enjoy transforming creative ideas into functional web applications
        and building responsive, user-friendly interfaces. You can check out my
        projects and contributions on GitHub and LinkedIn.
      </p>

      {/* GitHub & LinkedIn Buttons */}
      <div className="flex justify-center gap-6 animate-fadeIn delay-400">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-xl hover:bg-gray-800 hover:scale-105 transition transform duration-300"
        >
          View My GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 hover:scale-105 transition transform duration-300"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default About;
