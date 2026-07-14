"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50/90 dark:bg-gray-950/80 border-t border-gray-200 dark:border-gray-900 pt-12 pb-6 z-20">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Thanuja Lakshan
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Data Science Undergraduate.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <button onClick={scrollToTop} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</button>
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/lakshan698" className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/thanuja-lakshan-50411b386/" className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all">
              <FaLinkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:scale-110 transition-transform shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

        <div className="text-center border-t border-gray-200 dark:border-gray-900 pt-6">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Thanuja Lakshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}