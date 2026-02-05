'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BankIcon } from '@/components/ui/icons';
import { Link } from 'lucide-react';

export function BankingHero() {

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Industry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
              <BankIcon className="w-6 h-6" />
            </div>
            <span className="text-gray-700 text-sm font-semibold uppercase tracking-wider">
              Banking & Financial Services
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
          >
            Transform Banking with{' '}
            <span className="text-blue-600">Intelligent AI</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Revolutionize your financial institution with AI-powered automation that enhances customer experience, ensures regulatory compliance, and drives operational excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/solutions/cognivibe">
            <Button 
              variant="primary" 
              size="lg" 
              className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 font-semibold"
            >
              Explore AI Solutions
            </Button>
            </Link>
            <Link href="/contact">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            >
              Book Consultation
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}