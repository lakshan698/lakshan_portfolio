"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
    {
        title: "End-to-End Azure NYC Taxi Data Engineering Pipeline",
        description: "Designed and implemented an end-to-end ELT pipeline following the Medallion Architecture to process NYC Taxi data. Automated data ingestion, transformation, and analytics using Azure cloud services, PySpark, and Delta Lake.",
        image: "/taxi.png",
        techStack: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "ADLS Gen2"],
        githubUrl: "https://github.com/lakshan698/TaxiNYCAnalysis-Azure-End-to-End-Data-Engineering-pipeline",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "Enterprise Data Engineering Pipeline – Netflix Catalog Analytics",
        description: "Built an enterprise-grade ELT pipeline for Netflix catalog analytics featuring incremental ingestion, dimensional data modeling, and historical data tracking. Implemented Medallion Architecture, Star Schema, SCD Types, and automated orchestration for scalable analytics.",
        image: "/netflix.png",
        techStack: ["Azure Databricks", "PySpark", "Delta Lake", "Autoloader", "Unity Catalog", "Medallion Architecture", "ADLS Gen2"],
        githubUrl: "https://github.com/lakshan698/Enterprise-Azure-EndtoEnd-Data-Engineering-pipeline-Netflix-catalog-analytics",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "Sri Lankan University Admission AI Copilot",
        description: "Built a Retrieval-Augmented Generation (RAG) system that provides bilingual guidance on Sri Lankan university admissions, Z-Score cut-offs, and degree programs by retrieving information from official UGC and private university documents.",
        image: "/rag.png",
        techStack: ["Google Gemini", "LlamaIndex", "ChromaDB", "LlamaParse", "Streamlit"],
        githubUrl: "https://github.com/lakshan698/Uni-Copilot-RAG-System",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "AI-Powered Tea Leaf Disease Detection",
        description: "Developed an AI-powered web application that detects tea leaf diseases from images and provides bilingual treatment recommendations using a custom-trained YOLOv8 model and an interactive web interface.",
        image: "/tea.png",
        techStack: ["Python", "YOLOv8", "Flask", "React", "Tailwind CSS"],
        githubUrl: "https://github.com/lakshan698/tea-leaves-disease-predictor",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "customer_shoppingBehaviour-Dashboard",
        description: "End-to-end pipeline analyzing customer shopping trends. Cleaned and feature-engineered data with Pandas, stored and queried it in SQL Server, then visualized purchasing patterns and customer segmentation in an interactive Power BI dashboard.",
        image: "/dash.png",
        techStack: ["Python", "Pandas", "SQL Server", "PowerBI"],
        githubUrl: "https://github.com/lakshan698/customer_shoppingBehaviour-SQL-PYTHON-POWERBI",
        liveUrl: "#",
        featured: false,
    },
    {
        title: "Customer Support Data Warehouse (ETL)",
        description: "Built a complete Data Warehouse for a customer support system. Extracted and cleaned raw data from CSV and Excel files using SSIS, tracked historical changes, and loaded the final data into a Star Schema database in SQL Server.",
        image: "/etl-pipeline.png",
        techStack: ["SQL Server", "SSIS", "SSMS", "EXCEL", "JUPYTER-NOTEBOOK"],
        githubUrl: "https://github.com/lakshan698/Customer-Support-Data-Warehouse---ETL-Project",
        liveUrl: "#",
        featured: true,
    },
    {
        title: "CampusNexus | Smart Campus Operations Hub",
        description: "Built a centralized web platform digitizing university operations including facility management, resource booking, maintenance ticketing, and notifications. Engineered the security architecture with stateless JWT authentication, OAuth2 login (Google & GitHub), and strict role-based access control, plus a centralized Announcement API and real-time notification engine with a React read/unread tracking UI.",
        image: "/campusnexus.jpg",
        techStack: ["React.js", "Tailwind CSS", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL", "JWT", "OAuth2"],
        githubUrl: "https://github.com/Manuthi24/CampusNexus",
        liveUrl: "#",
        featured: true,
    }
];

export default function ProjectsSection() {
    return (
        <section className="relative py-24 bg-transparent overflow-hidden" id="projects">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Projects</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full mx-auto lg:mx-0"></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg lg:text-right">
                        A selection of my best work in Data Engineering, Machine Learning, and Software Development.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col rounded-3xl bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800/50 overflow-hidden backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700/80 transition-colors shadow-sm dark:shadow-none"
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center -z-10">
                                    <FolderGit2 className="text-gray-400 dark:text-gray-600" size={48} />
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 dark:from-gray-900 dark:via-gray-900/20 to-transparent opacity-90 dark:opacity-80"></div>
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col flex-grow p-6 z-10 -mt-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/30 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Buttons */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        <FaGithub size={18} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}