"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm currently open to new opportunities in Data Engineering and AI. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20"
        >
          <a href="mailto:thanuja.lak20k@gmail.com" className="flex flex-col items-center gap-4 group">
            <div className="p-6 rounded-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-all duration-300 group-hover:border-cyan-400/50 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Mail size={32} />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-1">Email</h4>
              <p className="text-gray-600 dark:text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">thanuja.lak20k@gmail.com</p>
            </div>
          </a>

          <a href="tel:+94761157047" className="flex flex-col items-center gap-4 group">
            <div className="p-6 rounded-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-300 group-hover:border-purple-400/50 shadow-sm dark:shadow-[0_0_20px_rgba(192,132,252,0.2)]">
              <Phone size={32} />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-1">Phone</h4>
              <p className="text-gray-600 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">+94 76 1157047</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-4 group cursor-default">
            <div className="p-6 rounded-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-400/50 shadow-sm dark:shadow-[0_0_20px_rgba(96,165,250,0.2)]">
              <MapPin size={32} />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Colombo, Sri Lanka</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}