"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const EnhancedFooter = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shantanu.spaceship/?igsh=ZW1qN3g4bWtoNnQ2&utm_source=qr#',
      icon: '/instagram-svgrepo-com.svg',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shantanu-gondane-46456822b/',
      icon: '/linkedin-svgrepo-com.svg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/shantanugondane',
      icon: '/github-svgrepo-com.svg',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/shantanugondane',
      icon: '/dribbble-svgrepo-com.svg',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#experience' },
    { name: 'Contact', href: 'mailto:shantanugondane44@gmail.com' }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Navigation Links */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <nav className="flex flex-wrap justify-center lg:justify-start gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                    link.active ? 'text-purple-400' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Interested in working together<span className="text-purple-500">?</span>
            </motion.h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:shantanugondane44@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div 
            className="flex flex-col items-center lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300`}>
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      width={20} 
                      height={20}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {social.name}
                  </motion.div>
                </motion.a>
              ))}
            </div>
            <motion.div 
              className="text-center lg:text-right text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p>©2024 All Rights Reserved.</p>
              <p className="mt-1">
                Made with <span className="text-purple-500">💜</span> by Shantanu Gondane
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Border Animation */}
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-gray-500 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Building the future, one pixel at a time ✨
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default EnhancedFooter; 