import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();

  const gotocontact= ()=>{
    navigate("/contect");
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Welcome! I am a passionate developer who loves building amazing web applications.
          Here you can learn more about my journey, skills, and experience.
        </p>
      </section>

      {/* About Content */}
      <section className="py-20 px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
            alt="About"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600">Who I Am</h2>
          <p>
            I am a full-stack developer with experience in building modern web applications
            using React, Node.js, .NET Core, and more. I enjoy learning new technologies
            and turning ideas into functional products.
          </p>
          <p>
            My goal is to create clean, responsive, and user-friendly applications that
            provide value to users. I am always exploring new challenges to grow my skills
            and contribute to exciting projects.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-500 transition" onClick={gotocontact}>
            Contact Me
          </button>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="bg-white py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-600">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
            <p>React, HTML, CSS, Tailwind CSS, JavaScript</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Backend</h3>
            <p>Node.js, Express, .NET Core, MongoDB, SQL</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Other Tools</h3>
            <p>Git, GitHub, Docker, Firebase, REST APIs</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
