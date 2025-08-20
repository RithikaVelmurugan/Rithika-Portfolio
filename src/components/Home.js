import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradientBackground -z-10"></div>

      {/* Animated Intro Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fadeIn">
        Hi, I'm <span className="text-blue-600">Rithika Velmurugan </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 animate-fadeIn delay-200">
        A passionate{" "}
        <span className="font-semibold text-gray-800">Frontend Developer </span>
        crafting{" "}
        <span className="text-blue-600 font-medium">clean, modern</span> and
        <span className="text-purple-600 font-medium"> user-friendly</span> web
        applications. Focused on delivering professional designs with
        high-quality code.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-6 animate-fadeIn delay-400">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 hover:scale-105 transition transform duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white hover:scale-105 transition transform duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Professional Floating Shapes */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-floatSlow"></div>
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-floatSlow delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-floatSlow delay-300"></div>
    </section>
  );
}

export default Home;
