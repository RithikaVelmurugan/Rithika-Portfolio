import React from "react";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React and TailwindCSS.",
      github: "https://github.com/your-github-username/portfolio",
    },
    {
      name: "Task Manager App",
      description: "A task management application with CRUD functionality.",
      github: "https://github.com/your-github-username/task-manager",
    },
    {
      name: "E-commerce Store",
      description:
        "A full-stack e-commerce project with shopping cart functionality.",
      github: "https://github.com/your-github-username/ecommerce-store",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden text-center"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradientBackground -z-10"></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatSlow delay-500"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 animate-fadeIn">My Projects</h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white/80 backdrop-blur-md rounded-xl border-2 border-black shadow-lg hover:shadow-xl transition transform duration-300 animate-fadeIn"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p className="text-gray-700 mb-6">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 hover:scale-105 transition transform duration-300 inline-block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
