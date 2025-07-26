"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

const EnhancedExperience = () => {
  const [selected, setSelected] = useState(0);
  const listRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  const experiences = [
    {
      company: 'InternPe',
      role: 'Artificial Intelligence and Machine Learning Intern',
      companyUrl: 'https://internpe.in/',
      dates: 'Jan 2024 – Feb 2024',
      details: [
        'Developed and deployed four end-to-end ML/DL projects including Diabetes Prediction, Car Price Estimation, and Breast Cancer Classification using Python, TensorFlow, and Keras, achieving high model accuracy',
        'Created interactive data apps with Streamlit to visualize model performance and insights; applied data preprocessing, feature engineering, and model evaluation using NumPy and pandas.',
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'CFPL',
      role: 'Frontend Developer',
      dates: 'February 2023 – August 2023',
      details: [
        'Spearheaded development of telecom infrastructure platform using React.js/Vite/Tailwind CSS, implementing responsive designs that boosted mobile engagement by 45% and reduced load times by 30% across 500+ daily visitors.',
        'Developed 20+ reusable components using React hooks and Context API, achieving 35% faster development cycles; implemented GitHub Actions CI/CD pipeline with 98% test coverage, reducing deployment time by 40%.',
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      company: 'MCT\'s RGIT',
      role: 'Frontend Developer',
      companyUrl: 'https://www.mctrgit.ac.in/',
      dates: 'February 2022 – March 2022',
      details: [
        'Designed and developed a full-stack faculty feedback system using React.js and MongoDB, implementing secure login/signup and an admin dashboard that improved user engagement and reduced manual data entry by 80%.',
        'The traditional pen-and-paper feedback method with a digital solution, increasing data collection efficiency by 70% and enabling real-time insights for over 200+ student feedback entries.',
      ],
      color: 'from-green-500 to-emerald-600'
    },
  ];

  useEffect(() => {
    if (listRef.current) {
      const liElements = Array.from(listRef.current.querySelectorAll('li'));
      const activeItem = liElements[selected];
      if (activeItem) {
        setIndicatorStyle({
          top: activeItem.offsetTop,
          height: activeItem.offsetHeight,
        });
      }
    }
  }, [selected]);

  const exp = experiences[selected];

  return (
    <section id="experience" className="relative min-h-screen py-20 bg-black">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Experience</span>
          <span className="text-purple-500">.</span>
        </h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          My professional journey and achievements
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Company List */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute left-0 w-1 bg-purple-500 rounded-full transition-all duration-300"
                style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
              />
              <ul className="space-y-4" ref={listRef}>
                {experiences.map((item, idx) => (
                  <motion.li
                    key={item.company}
                    className={`relative pl-8 py-4 cursor-pointer transition-all duration-300 ${
                      selected === idx 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                    onClick={() => setSelected(idx)}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-lg font-semibold">{item.company}</div>
                    <div className="text-sm opacity-75">{item.role}</div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4">
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        @ {exp.company}
                      </a>
                    ) : (
                      <span className="text-purple-400">@ {exp.company}</span>
                    )}
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {exp.company.charAt(0)}
                  </span>
                </div>
              </div>

              <p className="text-purple-300 mb-6">{exp.dates}</p>

              <ul className="space-y-4">
                {exp.details.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedExperience; 