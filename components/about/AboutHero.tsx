'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AnimatedNumber = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = target / 50;
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(counter);
    }, delay);
    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1">
        {count}{value.includes('+') ? '+' : ''}
        {value.includes('/') && '/7'}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium">{label}</div>
    </div>
  );
};

export const AboutHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Curved background shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            About Us
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transforming Business with AI
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered innovation, secure solutions, and delivery excellence for modern enterprises.
          </p>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <EyeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To Transform with Technology by enabling Customer Success, Strengthening Partnerships, fostering Employee growth, and delivering Societal Value.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To transform Businesses with AI-powered future-ready Technology Products, Secure Solutions & Services built on Innovation and Delivery Excellence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <AnimatedNumber value="40+" label="Projects" delay={200} />
              <AnimatedNumber value="15+" label="Clients" delay={400} />
              <AnimatedNumber value="7+" label="Years" delay={600} />
              <AnimatedNumber value="24/7" label="Support" delay={800} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};