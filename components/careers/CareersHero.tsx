'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, SparklesIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

export const CareersHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-blue border border-blue-100 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide">We&apos;re Hiring</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Shape the Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Enterprise AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Join our passionate team of innovators, researchers, and engineers building the next generation of AI solutions. At Cogniwide, we&apos;re not just writing code—we&apos;re redefining what&apos;s possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:bg-brand-blue-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                View Open Roles
              </button>
              <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                Learn About Our Culture
              </button>
            </div>
          </motion.div>

          {/* Right side interactive grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative"
          >
            {/* Culture Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Culture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A collaborative environment where innovation thrives, ideas are valued, and you can make a meaningful impact.
              </p>
            </div>

            {/* Growth Card - offset */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 sm:mt-8 group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous learning with access to cutting-edge tech, mentorship, and resources to reach your full potential.
              </p>
            </div>

            {/* Impact Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-brand-dark-grey transition-all duration-300">
                <RocketLaunchIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build products that transform enterprise operations for Fortune 500 companies around the world.
              </p>
            </div>

            {/* Wellbeing Card - offset */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 sm:mt-8 group">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wellbeing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive benefits, flexible working arrangements, and a focus on work-life harmony.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};