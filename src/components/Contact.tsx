'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Create a reference for the form
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Function to handle email sending
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_1oo50qx',   
          'template_l81a6w6',  
          form.current,
          '7D3qAVMb7Qc3iINWH'    
        );

        console.log('Email sent:', result.text);
        setIsSent(true);
        setError('');
        form.current.reset(); // Clear form fields after successful submission
      } catch (err) {
        console.error('Email sending error:', err);
        setError('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-gray-800">
      <div className="container mx-auto py-5 my-5 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out to me if you'd like to connect or collaborate!</p>

        {isSent && <p className="text-purple-900 mb-4">Thanks for Contacting Us.Message sent successfully!</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
        <input
            type='text'
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
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