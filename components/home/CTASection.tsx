'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export const CTASection = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Tight Centered Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Ready to <span className="text-blue-600">Scale with AI?</span>
          </motion.h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            Select an entry point to begin your digital transformation journey.
          </p>
        </div>

        {/* Action Row with Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Demo Option */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <CalendarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <Link href="/contact">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Schedule Demo</h3>
              </Link>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Watch our AI agents solve industry-specific complex workflows in real-time.
            </p>
            <Link href="/contact" className="inline-flex items-center text-sm font-bold text-blue-600 group">
              Book a Time <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Consultation Option */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Consultation</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Speak with our solution architects to design your custom AI roadmap.
            </p>
            <Link href="/contact" className="inline-flex items-center text-sm font-bold text-blue-600 group">
              Free Strategy Call <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Get Started - Focus Action */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-3xl border-2 border-blue-600 shadow-lg shadow-blue-500/10 transition-all"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Get Started</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Ready to deploy? Access our enterprise platform and begin onboarding.
            </p>
            <Link href="/get-started">
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors">
                Quick Setup
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};