import React from 'react';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-xl max-w-2xl mx-auto">
          I am a passionate Full-Stack Developer with expertise in .NET, React, and modern web technologies.
          Here’s a detailed look at the skills I’ve mastered over the years.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-10  max-w-6xl  mx-auto">
        <div className="grid md:grid-cols-3 gap-10 ">
          {/* Frontend */}
          <div className="p-6 bg-[#414141] rounded-xl shadow hover:scale-105 transition transform">
            <h3 className="text-2xl font-semibold text-black-600 mb-3">Frontend Development</h3>
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>React.js</li>
              <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
              <li>JavaScript (ES6+)</li>
              <li>Responsive & Mobile-First Design</li>
              <li>UI/UX best practices</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 bg-[#414141] rounded-xl shadow hover:scale-105 transition transform">
            <h3 className="text-2xl font-semibold text-black-600 mb-3">Backend Development</h3>
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>.NET Core / ASP.NET Core MVC / Web API</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB, SQL Server</li>
              <li>Authentication & Authorization (JWT, Identity)</li>
              <li>RESTful API Development</li>
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="p-6 bg-[#414141] rounded-xl shadow hover:scale-105 transition transform">
            <h3 className="text-2xl font-semibold text-black-600 mb-3">Tools & DevOps</h3>
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>Git & GitHub / Version Control</li>
              <li>Docker </li>
              <li>Visual Studio / VS Code</li>
              <li>REST APIs, Postman</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extra Section: Summary */}
      <section className="bg-white py-12 px-10 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Summary</h2>
        <p className="max-w-3xl mx-auto text-lg">
          I specialize in building full-stack applications with clean code and scalable architecture.
          I focus on bridging frontend and backend seamlessly to deliver smooth user experiences.
          Continuously learning and adapting to new technologies is my passion.
        </p>
      </section>
    </div>
  );
};

export default Skills;
