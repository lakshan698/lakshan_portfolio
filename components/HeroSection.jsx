"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function HeroSection() {
  // Interstellar Quote Auto-Typing Effect State
  const [quoteText, setQuoteText] = useState("");
  const fullQuote = "CASE: IT'S NOT POSSIBLE. COOPER: NO, IT'S NECESSARY.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setQuoteText(fullQuote.slice(0, index));
      index++;
      if (index > fullQuote.length) {
        clearInterval(timer);
      }
    }, 80); // ටයිප් වෙන වේගය (Speed)
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Split Layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
          >
            {/* Auto Typing Interstellar Quote */}
            <div className="mb-6 h-6 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                {quoteText}
              </span>
              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-tight">
              I'm
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
              Thanuja Lakshan
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
              <span>A <span className="font-bold text-white">Data Science Undergraduate</span></span>
              <span className="hidden sm:block text-gray-600">|</span>
              <span className="text-gray-400 font-normal">based in Sri Lanka</span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Aspiring Data Engineer and AI Enthusiast. I specialize in building robust data pipelines, scalable cloud solutions, and integrating artificial intelligence into modern applications.
            </p>

            {/* Actions: Resume + Glowing Social Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10">
              
              {/* Premium Resume Button */}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <Download size={18} />
                Download Resume
              </a>

              {/* Glowing LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/thanuja-lakshan-50411b386/" // මෙතනට ඔයාගේ LinkedIn URL එක දාන්න
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900/50 border border-gray-800 text-blue-500 rounded-2xl hover:scale-110 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} className="group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Glowing GitHub Button */}
              <a 
                href="https://github.com/lakshan698" // මෙතනට ඔයාගේ GitHub URL එක දාන්න
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900/50 border border-gray-800 text-gray-400 rounded-2xl hover:scale-110 hover:border-gray-500/50 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] group"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>

            </div>
          </motion.div>

          {/* Right Side: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 blur-3xl rounded-full scale-110 -z-10" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-2 rounded-[2rem] bg-gray-900/40 border border-gray-800/50 backdrop-blur-sm shadow-2xl"
            >
              <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] rounded-[1.5rem] overflow-hidden">
                <img 
                  src="/profile.png" 
                  alt="Thanuja Lakshan" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}