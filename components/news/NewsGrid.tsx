'use client';

import React from 'react';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'The Future of AI in Enterprise',
    excerpt: 'Exploring how artificial intelligence is transforming business operations and decision-making processes.',
    date: '2025-12-15',
    category: 'AI',
    image: '/images/blog/ai-enterprise.jpg'
  },
  {
    title: 'Cloud-Native Development Best Practices',
    excerpt: 'Learn about modern cloud architecture and how to build scalable, resilient applications.',
    date: '2025-11-28',
    category: 'Cloud Computing',
    image: '/images/blog/cloud-native.jpg'
  },
  {
    title: 'Cybersecurity in the Age of IoT',
    excerpt: 'Protecting connected devices and networks from emerging threats in the Internet of Things.',
    date: '2025-11-10',
    category: 'Cybersecurity',
    image: '/images/blog/iot-security.jpg'
  },
  {
    title: 'Cybersecurity in the Age of IoT',
    excerpt: 'Protecting connected devices and networks from emerging threats in the Internet of Things.',
    date: '2025-11-10',
    category: 'Cybersecurity',
    image: '/images/blog/iot-security.jpg'
  },
  {
    title: 'Cybersecurity in the Age of IoT',
    excerpt: 'Protecting connected devices and networks from emerging threats in the Internet of Things.',
    date: '2025-11-10',
    category: 'Cybersecurity',
    image: '/images/blog/iot-security.jpg'
  },
  {
    title: 'Cybersecurity in the Age of IoT',
    excerpt: 'Protecting connected devices and networks from emerging threats in the Internet of Things.',
    date: '2025-11-10',
    category: 'Cybersecurity',
    image: '/images/blog/iot-security.jpg'
  }
];

export const NewsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Latest Blog Posts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full inline-block mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{article.title}</h3>
                <p className="text-brand-medium-grey mb-4 flex-1">{article.excerpt}</p>
                <div className="text-sm text-brand-medium-grey">{article.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};