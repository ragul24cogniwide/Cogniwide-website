'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const integrations = [
  // Row 1
  { name: 'Google', src: 'https://cdn.simpleicons.org/google' },
  { name: 'Gmail', src: 'https://cdn.simpleicons.org/gmail' },
  { name: 'Google Calendar', src: 'https://cdn.simpleicons.org/googlecalendar' },
  { name: 'Google Drive', src: 'https://cdn.simpleicons.org/googledrive' },
  { name: 'App Store', src: 'https://cdn.simpleicons.org/appstore' },
  { name: 'Slack', src: '/images/external-integrations/slack_icon.webp' },
  { name: 'Google Forms', src: 'https://cdn.simpleicons.org/googleforms' },
  { name: 'Google Sheets', src: 'https://cdn.simpleicons.org/googlesheets' },
  { name: 'Discord', src: 'https://cdn.simpleicons.org/discord' },
  { name: 'Bing', src: 'https://img.icons8.com/color/48/bing.png' },
  { name: 'Zoom', src: 'https://cdn.simpleicons.org/zoom' },
  { name: 'Notion', src: 'https://cdn.simpleicons.org/notion' },
  { name: 'Linear', src: 'https://cdn.simpleicons.org/linear' },
  
  // Row 2
  { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp' },
  { name: 'Snowflake', src: 'https://cdn.simpleicons.org/snowflake' },
  { name: 'HubSpot', src: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Claude', src: 'https://cdn.simpleicons.org/anthropic' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python' },
  { name: 'Figma', src: 'https://cdn.simpleicons.org/figma' },
  { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Zendesk', src: 'https://cdn.simpleicons.org/zendesk' },
  { name: 'Calendly', src: 'https://cdn.simpleicons.org/calendly' },
  { name: 'OpenAI', src: 'https://img.icons8.com/color/48/chatgpt.png' },
  { name: 'Salesforce', src: 'https://img.icons8.com/color/48/salesforce.png' },
  { name: 'Intercom', src: 'https://cdn.simpleicons.org/intercom' },

  // Row 3
  { name: 'Monday', src: 'https://img.icons8.com/color/48/monday.png' },
  { name: 'Asana', src: 'https://cdn.simpleicons.org/asana' },
  { name: 'Teams', src: '/images/external-integrations/teams_icon.png' },
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook' },
  { name: 'Jira', src: '/images/external-integrations/jira_icon.jpg' },
  { name: 'Confluence', src: 'https://cdn.simpleicons.org/confluence' },
  { name: 'LinkedIn', src: 'https://img.icons8.com/color/48/linkedin.png' },
  { name: 'Azure', src: '/images/external-integrations/azure_icon.webp' },
  { name: 'Outlook', src: 'https://img.icons8.com/color/48/microsoft-outlook-2019.png' },
  { name: 'Mailchimp', src: 'https://cdn.simpleicons.org/mailchimp' },
  { name: 'Bitbucket', src: '/images/external-integrations/bitbucket_icon.webp' },
  { name: 'Shopify', src: 'https://cdn.simpleicons.org/shopify' },
  { name: 'ClickUp', src: 'https://cdn.simpleicons.org/clickup' },
];

export const IntegrationsSection = () => {
  // Split integrations into 3 roughly equal chunks
  const chunkSize = Math.ceil(integrations.length / 3);
  const row1 = integrations.slice(0, chunkSize);
  const row2 = integrations.slice(chunkSize, chunkSize * 2);
  const row3 = integrations.slice(chunkSize * 2);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="block text-xl md:text-2xl font-semibold text-blue-600 mb-3 uppercase tracking-wide">
              Seamless Ecosystem
            </span>
            Integrate AI Agents with 1000+ Business Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Connect your existing tools and workflows with our powerful AI agents. From CRM to communication channels, we support the platforms you use every day.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8 space-y-6">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1: Left to Right */}
        <div className="flex w-full">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...row1, ...row1].map((item, index) => (
              <div
                key={`row1-${item.name}-${index}`}
                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100 flex-shrink-0 hover:shadow-md transition-shadow duration-300"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-full">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...row2, ...row2].map((item, index) => (
              <div
                key={`row2-${item.name}-${index}`}
                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100 flex-shrink-0 hover:shadow-md transition-shadow duration-300"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="flex w-full">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...row3, ...row3].map((item, index) => (
              <div
                key={`row3-${item.name}-${index}`}
                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100 flex-shrink-0 hover:shadow-md transition-shadow duration-300"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
        >
          Explore All Integrations
        </Link>
      </motion.div>
    </section>
  );
};
