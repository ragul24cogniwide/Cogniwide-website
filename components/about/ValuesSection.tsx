'use client';

import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Value Creation',
    letter: 'V',
    description: 'Value-driven solutions that create tangible results for our clients through innovative technology and strategic thinking.',
  },
  {
    title: 'Innovation Excellence',
    letter: 'I',
    description: 'Innovation at our core, constantly pushing boundaries with new ideas and cutting-edge methodologies.',
  },
  {
    title: 'Respect & Responsibility',
    letter: 'R',
    description: 'Responsibility in every action, treating all stakeholders with respect and maintaining our commitments.',
  },
  {
    title: 'Transparency & Trust',
    letter: 'T',
    description: 'Transparency in all dealings, maintaining highest ethical standards and building lasting trust with clients.',
  },
  {
    title: 'Unity & Collaboration',
    letter: 'U',
    description: 'Unity through collaboration, fostering teamwork among our teams and creating strong partnerships with clients.',
  },
  {
    title: 'Excellence in Delivery',
    letter: 'E',
    description: 'Excellence as our standard, delivering superior quality and exceptional results in every project.',
  },
];

export const ValuesSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values - <span className="text-blue-600">VIRTUE</span>
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            {values.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md"
              >
                {value.letter}
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Core principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index
                }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
              >
                {/* Content with large first letter */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span className="text-4xl text-blue-600 font-bold mr-1">{value.letter}</span>
                  {value.title.substring(1)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};