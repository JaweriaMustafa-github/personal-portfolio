'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  // State to toggle the navbar visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
      
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 md:p-10 z-10">
        <h1 className="text-3xl font-extrabold font-serif">JM</h1>
        <h1 className="hidden md:block text-3xl font-semibold">PERSONAL PORTFOLIO</h1>
        
        {/* Hamburger Button for Mobile */}
        <button className={`md:hidden text-2xl ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <li><a href="#about" className="hover:text-purple-800">About</a></li>
          <li><a href="#projects" className="hover:text-purple-800">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-800">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 pt-56">
        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-200">Hello, I&apos;m</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold">Jaweria Mustafa</h1>
          <p className="mt-4 text-gray-200 max-w-md">
            I create beautiful and functional web experiences.
          </p>
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Download CV Button */}
            <a
              href="/Jaweria Resume_CV.pdf"  // The link to my CV file
              download="Jaweria Mustafa Resume_CV"  // This will trigger the download with the given file name
              className="border-2 border-purple-600 hover:bg-purple-600 px-6 py-3 rounded-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-64 h-64">
          <Image
            src="/images/dp1 (1).png"
            alt="Hero Image"
            width={256}
            height={256}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
}