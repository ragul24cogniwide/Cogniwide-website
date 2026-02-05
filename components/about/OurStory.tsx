'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const OurStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A journey of transformation, innovation, and excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Story Block 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Founded with Purpose</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Cogniwide was established as an AI-based IT products and services company, committed to delivering high-performance solutions. We started with a vision to transform businesses through cutting-edge technology and innovative thinking.
            </p>
          </motion.div>

          {/* Story Block 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 md:text-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation at Scale</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We deliver market-shaping AI and self-optimizing systems that support rapid business transformation across all industries. Our solutions empower organizations to harness the power of artificial intelligence and drive meaningful change.
            </p>
          </motion.div>

          {/* Story Block 3 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Future Ready, Always</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our curiosity to learn the newest technology never wavers, ensuring you stay ahead of the competition in the post-digital age. We continuously evolve, adapt, and innovate to meet the challenges of tomorrow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};