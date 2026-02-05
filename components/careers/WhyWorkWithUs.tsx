'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyWorkWithUs = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Join Cogniwide</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience a workplace where innovation meets opportunity
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Benefit Block 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cutting-Edge Technology</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Work with the latest AI technologies, frameworks, and tools. From machine learning models to cloud infrastructure, you'll have access to cutting-edge resources that push the boundaries of what's possible in artificial intelligence.
            </p>
          </motion.div>

          {/* Benefit Block 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 md:text-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Flexible Work Environment</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Embrace a remote-first culture with flexible work arrangements that support work-life balance. Collaborate with talented professionals from around the world while maintaining the flexibility to work where you're most productive.
            </p>
          </motion.div>

          {/* Benefit Block 3 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth & Development</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Invest in your future with continuous learning opportunities, mentorship programs, and career development paths. We're committed to helping you grow professionally and reach your full potential in the rapidly evolving field of AI.
            </p>
          </motion.div>

          {/* Benefit Block 4 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 md:text-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Benefits</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Enjoy competitive compensation packages including health insurance, retirement plans, generous PTO, and wellness programs. We believe in taking care of our team members so they can focus on doing their best work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};