import React from 'react';

const projectsData = [
  // {
  //   title: "College Management System",
  //   description: "A full-featured College Management System using ASP.NET Core MVC with Identity, CRUD operations, and role-based authentication.",
  //   image: "https://via.placeholder.com/400x250",
  //   link: "#",
  // },
  // {
  //   title: "Book Seller App",
  //   description: "A full-stack book selling application with Node.js backend, JWT authentication, and integrated payment checkout system.",
  //   image: "https://via.placeholder.com/400x250",
  //   link: "#",
  // },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    image: "https://i.ytimg.com/vi/nuJFjx44ILM/maxresdefault.jpg",
    link: "#",
  },
  {
    title: "WhatsApp Web Clone",
    description: "A real-time chat application built using MERN stack and Socket.IO for messaging functionality.",
    image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-5eb4-61f9-a4b6-c6300b5978b9/raw?se=2025-08-25T10%3A43%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=9239a3eb-3061-5b60-8cf4-207ed6775e70&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-24T22%3A36%3A21Z&ske=2025-08-25T22%3A36%3A21Z&sks=b&skv=2024-08-04&sig=Is00JgWAD0i3c8gCf2u3sbQcKKwQUPhYQ5uwgV8bnwI%3D",
    link: "https://fullstack-web-app-l6v9.onrender.com/",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Here are some of the projects I have worked on. Each project demonstrates my skills in full-stack development and problem-solving.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-500 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
