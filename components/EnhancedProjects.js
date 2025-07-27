"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const EnhancedProjects = () => {
  const projects = [
    {
      title: 'Learnify',
      subtitle: 'Smart Learning Platform',
      description: 'Learnify is a smart placement preparation and learning platform designed to streamline student upskilling.',
      image: '/learnify1.png',
      link: '/projects/learnify',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      features: ['24/7 Help', '93% Success Rate', 'Highly Vetted'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'LegAIly',
      subtitle: 'AI-Powered Legal Solutions',
      description: 'LegAIly bridges the gap between legal practice and modern AI solutions.',
      image: '/legaai1.png',
      link: '/projects/ecocart',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      features: ['Document Analysis', 'Legal Translation', 'AI Summaries'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'NextGen Police Complaint System',
      subtitle: 'Blockchain-Based Justice',
      description: 'The NextGen Police Complaint System revolutionizes the traditional complaint filing process by leveraging blockchain technology.',
      image: '/next1.png',
      link: '/projects/eventplanner',
      tech: ['Blockchain', 'React', 'Solidity', 'Web3'],
      features: ['Secure', 'Transparent', 'Accountable'],
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'AyurLeaf AI',
      subtitle: 'AI for Ayurvedic Medicine',
      description: 'AyurLeaf AI is an innovative platform that combines deep learning with traditional Ayurvedic knowledge to provide accurate identification and information about medicinal plants.',
      image: '/leaf1.png',
      link: '/projects/foodiefinder',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      features: ['Plant Recognition', 'Medicinal Info', 'AI Analysis'],
      color: 'from-green-500 to-emerald-600'
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-black safe-top safe-bottom">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Projects</span>
          <span className="text-purple-500">.</span>
        </h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explore my latest work and innovative solutions
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)"
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        title={tech}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjects; 