"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit, Rocket, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const educationData = [
    {
      year: "2023 - Present",
      degree: "BSc (Hons) in Data Science",
      institution: "SLIIT",
      description: "Focused on Data Science, Data Engineering, Big Data technologies and AI. Building practical academic and personal projects using Python, SQL, cloud platforms, and modern data tools.",
    },
    {
      year: "2017 - 2019",
      degree: "G.C.E. Advanced Level",
      institution: "G/Vidyaloka College",
      description: "Completed Advanced Level studies in the Biological Science stream, developing a strong foundation in analytical thinking, problem solving, and scientific reasoning.",
    }
  ];

  const strengths = [
    { icon: <BrainCircuit className="text-cyan-600 dark:text-cyan-400" size={24} />, title: "Analytical Thinking", desc: "Solving complex problems with data-driven approaches." },
    { icon: <Code2 className="text-purple-600 dark:text-purple-400" size={24} />, title: "Clean Code", desc: "Writing scalable, maintainable, and efficient solutions." },
    { icon: <Rocket className="text-blue-600 dark:text-blue-400" size={24} />, title: "Fast Learner", desc: "Quickly adapting to new technologies and modern frameworks." },
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden" id="about">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/10 dark:bg-blue-900/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-4">Professional Introduction</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I am a passionate Data Science undergraduate with a strong focus on Data Engineering and Artificial Intelligence. 
                My career objective is to leverage modern cloud technologies and machine learning algorithms to build data pipelines that drive actionable insights. 
                I thrive in environments that challenge me to solve complex architectural problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-white/60 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors backdrop-blur-sm group shadow-sm dark:shadow-none"
                >
                  <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{strength.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-500">{strength.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-600 dark:text-blue-500" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-foreground">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-8 relative">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-background bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-500/20 mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.degree}</h4>
                  <h5 className="text-gray-700 dark:text-gray-400 font-medium mb-3 flex items-center gap-2">
                    <ChevronRight size={16} className="text-cyan-600 dark:text-cyan-500" />
                    {item.institution}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}