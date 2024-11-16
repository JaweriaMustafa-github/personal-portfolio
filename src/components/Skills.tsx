// components/Skills.tsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-purple-500 to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">TypeScript</h3>
          </div>
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Next.js</h3>
          </div>
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          </div>
          <div className="bg-white text-purple-500 m-3 hover:bg-pink-200 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Github</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;