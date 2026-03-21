'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  GlobeAltIcon, 
  AcademicCapIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const benefits = [
  {
    id: 'tech',
    title: 'Cutting-Edge Technology',
    description: "Work with the latest AI technologies, frameworks, and tools. From machine learning models to cloud infrastructure, you'll have access to cutting-edge resources that push the boundaries of what's possible in artificial intelligence.",
    icon: CpuChipIcon,
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'flexibility',
    title: 'Flexible Work Environment',
    description: "Embrace a remote-first culture with flexible work arrangements that support work-life balance. Collaborate with talented professionals from around the world while maintaining the flexibility to work where you're most productive.",
    icon: GlobeAltIcon,
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'growth',
    title: 'Growth & Development',
    description: "Invest in your future with continuous learning opportunities, mentorship programs, and career development paths. We're committed to helping you grow professionally and reach your full potential in the rapidly evolving field of AI.",
    icon: AcademicCapIcon,
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: 'benefits',
    title: 'Comprehensive Benefits',
    description: "Enjoy competitive compensation packages including health insurance, retirement plans, generous PTO, and wellness programs. We believe in taking care of our team members so they can focus on doing their best work.",
    icon: HeartIcon,
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    iconColor: 'text-rose-600',
  }
];

export const WhyWorkWithUs = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-wide text-brand-blue uppercase mb-3">Life at Cogniwide</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Why Join Us</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience a workplace where innovation meets opportunity, and your work directly shapes the future of enterprise AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.bgLight} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};