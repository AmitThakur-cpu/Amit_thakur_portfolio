import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-full max-w-lg">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">Contact Us</h2>
        <p className="text-center text-gray-200 mb-8">
          Have a question or want to work together? Fill out the form below 👇
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
