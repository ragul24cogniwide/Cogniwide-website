'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { CTASection } from '@/components/home/CTASection';
import {
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const CybersecurityServicesPage = () => {
  const heroData = {
    title: "AI-Enhanced Cybersecurity Services",
    subtitle: "Protect your digital assets with AI-enhanced enterprise security solutions and compliance services featuring intelligent threat detection and automated response.",
    features: [
      "AI-enhanced security solutions",
      "Intelligent threat detection",
      "Compliance automation",
      "Security orchestration",
      "24/7 monitoring & response"
    ]
  };

  const securityServices = [
    {
      title: "AI-Enhanced Threat Detection",
      description: "Advanced threat detection using machine learning algorithms to identify and respond to sophisticated cyber threats in real-time.",
      icon: EyeIcon,
      capabilities: [
        "ML-powered anomaly detection",
        "Behavioral analysis and profiling",
        "Advanced persistent threat (APT) detection",
        "Zero-day exploit identification"
      ]
    },
    {
      title: "Intelligent Security Orchestration",
      description: "Automate security operations with AI-driven orchestration, automated incident response, and intelligent threat hunting.",
      icon: CogIcon,
      capabilities: [
        "Automated incident response",
        "Security workflow orchestration",
        "Intelligent threat hunting",
        "Playbook automation and optimization"
      ]
    },
    {
      title: "Compliance Automation",
      description: "Streamline compliance management with automated monitoring, reporting, and remediation for regulatory frameworks.",
      icon: DocumentCheckIcon,
      capabilities: [
        "Automated compliance monitoring",
        "Real-time compliance reporting",
        "Policy enforcement automation",
        "Audit trail management"
      ]
    },
    {
      title: "Vulnerability Management",
      description: "Comprehensive vulnerability assessment and management with AI-powered risk prioritization and automated remediation.",
      icon: ExclamationTriangleIcon,
      capabilities: [
        "AI-powered vulnerability scanning",
        "Risk-based prioritization",
        "Automated patch management",
        "Continuous security assessment"
      ]
    },
    {
      title: "Identity & Access Management",
      description: "Advanced IAM solutions with AI-powered access controls, behavioral authentication, and zero-trust architecture.",
      icon: LockClosedIcon,
      capabilities: [
        "Zero-trust architecture implementation",
        "Behavioral authentication",
        "Privileged access management",
        "Identity governance and administration"
      ]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security solutions with AI-powered monitoring, configuration management, and threat protection.",
      icon: ServerIcon,
      capabilities: [
        "Cloud security posture management",
        "Container and serverless security",
        "Multi-cloud security orchestration",
        "DevSecOps integration"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for service providers",
      industries: ["SaaS", "Cloud Services", "Technology"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      industries: ["Enterprise", "Government", "Healthcare"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation for data privacy",
      industries: ["Global", "EU Operations", "Data Processing"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      industries: ["Healthcare", "Medical Devices", "Health Tech"]
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      industries: ["E-commerce", "Financial", "Retail"]
    },
    {
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program",
      industries: ["Government", "Public Sector", "Defense"]
    }
  ];

  const securityTechnologies = [
    {
      category: "AI & ML Security",
      technologies: ["TensorFlow Security", "PyTorch Security", "AI Model Protection", "ML Pipeline Security"]
    },
    {
      category: "Threat Intelligence",
      technologies: ["MITRE ATT&CK", "Threat Hunting", "IOC Analysis", "Threat Modeling"]
    },
    {
      category: "Security Tools",
      technologies: ["SIEM/SOAR", "EDR/XDR", "CASB", "Zero Trust Platforms"]
    },
    {
      category: "Cloud Security",
      technologies: ["CSPM", "CWPP", "Container Security", "Serverless Security"]
    }
  ];

  return (
    <PageLayout>
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-32 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Hero – same subtle gradient as all other pages */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-indigo-50 via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
          >
            {heroData.subtitle}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {heroData.features.map((f, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 300 }}
                className="px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {f}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Security Assessment
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37,99,235,0.1)" }}
              className="inline-flex items-center gap-2 border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Threat Analysis
            </motion.a>
          </div>
        </div>
      </section>

      {/* Security Services – Perfect 3×2 Grid, ALL CONTENT PRESERVED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your enterprise with AI-enhanced security solutions that adapt and evolve with emerging threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
                className="group relative bg-white p-8 rounded-2xl 
                          border border-gray-200 hover:border-[#2563eb]/50
                          transition-colors duration-300 
                          flex flex-col h-full min-h-[420px]"
              >

                <div className="w-14 h-14 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563eb] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-600 flex-1">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#2563eb] font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks – exactly as you had it */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help organizations achieve and maintain compliance across major regulatory frameworks and industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{framework.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{framework.description}</p>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Industries</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.industries.map((industry, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies – exactly as you had it */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Security Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge security technologies and AI-powered tools to provide comprehensive protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTechnologies.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="text-center p-2 bg-white rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Operations Center – exactly as you had it */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#2563eb]/10 rounded-full text-[#2563eb] font-semibold mb-6">
              <ShieldCheckIcon className="w-6 h-6" /> 24/7 Security Operations Center
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              24/7 Security Operations Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered SOC provides round-the-clock monitoring, threat detection, and incident response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Continuous Monitoring",
                description: "24/7 monitoring of your security infrastructure with AI-powered threat detection",
                icon: EyeIcon
              },
              {
                title: "Rapid Response",
                description: "Automated incident response with human expert escalation when needed",
                icon: ExclamationTriangleIcon
              },
              {
                title: "Threat Intelligence",
                description: "Real-time threat intelligence integration and proactive threat hunting",
                icon: GlobeAltIcon
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </PageLayout>
  );
};

export default CybersecurityServicesPage;