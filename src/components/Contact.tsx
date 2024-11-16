// components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-gray-800">
      <div className="container mx-auto py-5 my-5 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out to me if you'd like to connect or collaborate!</p>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-purple-500 text-white py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;