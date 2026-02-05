'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, BuildingOfficeIcon, ClockIcon } from '@heroicons/react/24/outline';

const positionsData = {
  engineering: [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build cutting-edge AI solutions and work with the latest machine learning frameworks.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop scalable web applications using modern technologies and best practices.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for our AI products.'
    }
  ],
  research: [
    {
      title: 'Data Scientist',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze complex datasets and develop predictive models to drive business insights.'
    },
    {
      title: 'ML Research Scientist',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      description: 'Conduct research in machine learning and publish findings in top-tier conferences.'
    }
  ],
  product: [
    {
      title: 'Product Manager - AI',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead product strategy and roadmap for our AI-powered solutions.'
    },
    {
      title: 'UX Designer',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive user experiences for complex AI applications.'
    }
  ],
  operations: [
    {
      title: 'Customer Success Manager',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure client satisfaction and drive adoption of our AI solutions.'
    },
    {
      title: 'Sales Executive',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Drive revenue growth by building relationships with enterprise clients.'
    }
  ]
};

const tabs = [
  { id: 'engineering', label: 'Engineering', count: positionsData.engineering.length },
  { id: 'research', label: 'Research', count: positionsData.research.length },
  { id: 'product', label: 'Product', count: positionsData.product.length },
  { id: 'operations', label: 'Operations', count: positionsData.operations.length }
];

export const OpenPositions = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const currentPositions = positionsData[activeTab as keyof typeof positionsData];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Open Positions
          </motion.h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore opportunities across different teams and find your perfect role
          </motion.p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Currently No Open Positions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We are currently not hiring for any positions. Please check back later.</p>
        </div>

        {/* Tab Navigation */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div> */}

        {/* Positions Grid */}
        {/* <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {currentPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 lg:flex-shrink-0">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};