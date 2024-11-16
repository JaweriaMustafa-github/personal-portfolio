// components/About.tsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-purple-500 to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I'm a passionate web developer with a love for creating interactive and dynamic user experiences. I specialize in
          building responsive websites and applications using modern technologies like HTML, CSS,Typescript, Next.js, and Tailwind CSS.
        </p>
        <h3 className='text-2xl'>My Links</h3>
        <a className='text-purple-800 font-semibold' target='blank' href="https://www.linkedin.com/in/jaweria-mustafa-a727b22b5">My Linkedin</a>
        <br />
        <a className='text-purple-800 font-semibold' href="mailto:jaweriamustafa01nov@gmail.com">My Email</a>
        <br />
        <a className='text-purple-800 font-semibold' target='blank' href="https://github.com/JaweriaMustafa-github">My Github</a>
      </div>
    </section>
  );
};

export default About;