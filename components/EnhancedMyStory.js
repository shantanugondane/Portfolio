"use client";
import React from 'react';
import { motion } from "framer-motion";

const EnhancedMyStory = () => {
  const storyParts = [
    "My journey as a front-end developer began during my time at RGIT, where I discovered a passion for building intuitive web experiences.",
    "After a few academic projects and internships, I started working as a front-end developer at Communicore Fiberinfra, where I led the development of responsive interfaces using React, Vite, and Tailwind CSS.",
    "Driven to explore further, I transitioned into the world of AI at InternPe, where I worked on impactful ML projects using Python, TensorFlow, and Streamlit.",
    "My projects like Learnify, LegAIly, and AyurLeaf AI helped me blend AI and front-end seamlessly, earning recognition at hackathons and within the developer community.",
    "These opportunities fueled my passion for tech and learning. I now focus on building innovative, real-world solutions—and you know what? I love what I do! 💜"
  ];

  return (
    <section className="relative min-h-screen py-20 bg-black">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">My Story</span>
          <span className="text-purple-500">.</span>
        </h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          The journey that shaped my passion for technology
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {storyParts.map((part, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
                
                {/* Timeline Line */}
                {index < storyParts.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-16 bg-purple-500/30"></div>
                )}
                
                <div className="pl-8">
                  <motion.p 
                    className="text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {part}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:shantanugondane44@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedMyStory; 