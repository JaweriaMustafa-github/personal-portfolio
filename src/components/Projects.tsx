import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Project 1 : Countdown Timer</h3>
            <Image src="/images/cdt-1.png" alt='Cowntdown-timer' width={342} height={342}></Image>
            <p className="text-white">
              A COUNTDOWN TIMER built using Next.js and Tailwind CSS, showcasing dynamic content and responsiveness.
            </p>
            <a className='text-purple-800' target='blank' href="https://id-card-ui.vercel.app">Visit</a>
            <br />
            <a className='text-purple-800' target='blank' href="https://github.com/JaweriaMustafa-github/countdown-timer.git">Github Repo</a>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Project 2 : Todo List</h3>
            <Image src="/images/todo.png" alt='Cowntdown-timer' width={342} height={342}></Image>
            <p className="text-white">
              A TODO LIST APP built using Next.js and Tailwind CSS, showcasing dynamic content and responsiveness.
            </p>
            <a className='text-purple-800' target='blank' href="https://countdown-timer-nu-one.vercel.app">Visit</a>
            <br />
            <a className='text-purple-800' target='blank' href="https://github.com/JaweriaMustafa-github/countdown-timer.git">Github Repo</a>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Project 2 : Todo List</h3>
            <Image src="/images/Id card.png" alt='Cowntdown-timer' width={342} height={342}></Image>
            <p className="text-white">
              An ID CARD UI built using Next.js and Tailwind CSS, showcasing dynamic content and responsiveness.
            </p>
            <a className='text-purple-800' target='blank' href="https://my-todo-list-app-nine.vercel.app">Visit</a>
            <br />
            <a className='text-purple-800' target='blank' href="https://github.com/JaweriaMustafa-github/countdown-timer.git">Github Repo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;