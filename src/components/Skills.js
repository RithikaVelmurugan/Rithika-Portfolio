import React from "react";

function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Git/GitHub",
  ];
  const devOpsSkills = ["Docker", "Kubernetes"];

  return (
    <section id="skills" className="relative py-20 overflow-hidden text-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradientBackground -z-10"></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow delay-500"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 animate-fadeIn">My Skills</h2>

      {/* Frontend Skills */}
      <div className="mb-12 animate-fadeIn delay-200">
        <h3 className="text-2xl font-semibold mb-6">Frontend Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {frontendSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/70 backdrop-blur-md text-gray-900 rounded-full font-medium shadow hover:scale-105 transition transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* DevOps Skills */}
      <div className="animate-fadeIn delay-400">
        <h3 className="text-2xl font-semibold mb-6">DevOps Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {devOpsSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/70 backdrop-blur-md text-gray-900 rounded-full font-medium shadow hover:scale-105 transition transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
