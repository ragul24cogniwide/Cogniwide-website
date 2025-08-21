import React from 'react';
import cognixceleratePic from '../assets/cognixcelerate-pic.png';
import cogniLoomPic from '../assets/cogniloom-pic.png';
import cogniAgentPic from '../assets/cogniagent-pic.png';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0), 
                           radial-gradient(circle at 75px 75px, #06b6d4 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section - Perfect First View Alignment */}
          <section className="relative pt-12 pb-16 -mt-4 overflow-hidden min-h-[600px] flex flex-col justify-center">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(129, 0, 215, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 0, 215, 0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Floating Orbs - Enhanced Purple Theme */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-[#a533f0] to-[#8100d7] rounded-full opacity-20 blur-lg animate-pulse"></div>
            <div className="absolute bottom-8 right-6 w-7 h-7 bg-gradient-to-r from-[#8100d7] to-[#5c009b] rounded-full opacity-20 blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="max-w-5xl mx-auto text-center px-4">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-8">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-medium text-green-700">Live & Ready to Transform</span>
              </div>

              {/* Headline - INTELLIGENT Black, AUTOMATION Enhanced Purple */}
              <div className="space-y-2 mb-8">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                  <span className="block text-black leading-[0.9]">INTELLIGENT</span>
                  <span className="block text-transparent bg-gradient-to-r from-[#8100d7] via-[#5c009b] to-[#3d006b] bg-clip-text leading-[0.9] -mt-1">
                    AUTOMATION
                  </span>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-700 font-light tracking-wide mt-4">
                  That Amplifies Human Potential
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                Transform your enterprise with AI-powered orchestration that adapts, learns, and scales with your business needs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button className="group relative bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden min-w-[160px]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Building Now
                    <div className="w-1.5 h-1.5 bg-[#00d7a3] rounded-full animate-pulse"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8100d7] to-[#5c009b] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
                <button className="group relative bg-gradient-to-r from-[#f5f3ff] to-[#faf9ff] hover:from-[#8100d7] hover:to-[#a533f0] border border-[#8100d7]/20 hover:border-[#8100d7] text-[#8100d7] hover:text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 transform hover:scale-105 shadow hover:shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-[#8100d7]/10 to-[#a533f0]/10 group-hover:from-white/20 group-hover:to-white/20 rounded-xl flex items-center justify-center transition-all duration-200">
                      <svg className="w-3 h-3 text-[#8100d7] group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    See It In Action
                  </span>
                </button>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto w-full">
              {[
                {
                  icon: (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#8100d7] via-[#5c009b] to-[#3d006b] rounded-xl flex items-center justify-center shadow-lg ring-1 ring-[#8100d7]/20 group-hover:shadow-xl group-hover:ring-[#8100d7]/40 group-hover:scale-105 transition-all duration-250">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  ),
                  title: "Process Automation",
                  subtitle: "87% efficiency",
                  description: "Streamlined workflows"
                },
                {
                  icon: (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#a533f0] via-[#8100d7] to-[#5c009b] rounded-xl flex items-center justify-center shadow-lg ring-1 ring-[#a533f0]/20 group-hover:shadow-xl group-hover:ring-[#a533f0]/40 group-hover:scale-105 transition-all duration-250">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  ),
                  title: "Smart Analytics", 
                  subtitle: "Real-time Insights",
                  description: "Data-driven decisions"
                },
                {
                  icon: (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#8100d7] via-[#00d7a3] to-[#009b7a] rounded-xl flex items-center justify-center shadow-lg ring-1 ring-[#00d7a3]/20 group-hover:shadow-xl group-hover:ring-[#00d7a3]/40 group-hover:scale-105 transition-all duration-250">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  ),
                  title: "AI Conversations",
                  subtitle: "Natural Interactions", 
                  description: "Human-AI collaboration"
                },
                {
                  icon: (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#5c009b] via-[#8100d7] to-[#a533f0] rounded-xl flex items-center justify-center shadow-lg ring-1 ring-[#5c009b]/20 group-hover:shadow-xl group-hover:ring-[#5c009b]/40 group-hover:scale-105 transition-all duration-250">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  ),
                  title: "Intelligent Agents",
                  subtitle: "Autonomous execution",
                  description: "Self-managing workflows"
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl py-4 px-3 hover:bg-gradient-to-br hover:from-white hover:to-[#f5f3ff] hover:border-[#8100d7]/35 hover:shadow-lg transition-all duration-250 hover:scale-[1.03] flex flex-col items-center text-center space-y-2 cursor-pointer"
                >
                  {/* Purple accent overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8100d7]/0 via-transparent to-[#8100d7]/0 group-hover:from-[#8100d7]/8 group-hover:via-[#8100d7]/4 group-hover:to-transparent transition-all duration-250"></div>
                  
                  <div className="relative z-10 mb-1 transition-all duration-250">
                    {feature.icon}
                  </div>
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-gray-900 group-hover:text-gray-800 font-bold text-sm leading-snug transition-colors duration-200">{feature.title}</h3>
                    <p className="text-[#8100d7] group-hover:text-[#5c009b] font-semibold text-xs transition-colors duration-200">{feature.subtitle}</p>
                    <p className="text-gray-600 group-hover:text-gray-700 text-xs leading-tight transition-colors duration-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

         {/* Product Portfolio Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Product <span className="text-purple-600">Portfolio</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Four powerful platforms designed to transform every aspect of your enterprise operations.
      </p>
    </div>

    {/* Product Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          ),
          title: "CogniXcelerate",
          description: "Unified workflow automation platform that intelligently coordinates complex workflows and automates decision-making processes across your enterprise.",
          features: [
            "Advanced Process Mining",
            "Intelligent Decision Making", 
            "Real-time Monitoring"
          ]
        },
        {
          icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 21H2V3h3v2H4v14h16V5h-1V3h3v18zM7 9h10v2H7V9zm0 4h7v2H7v-2z"/>
              <rect x="6" y="6" width="4" height="2"/>
              <rect x="12" y="6" width="6" height="2"/>
            </svg>
          ),
          title: "CogniLearn",
          description: "Unified data fabric platform that transforms enterprise-wide data into a cohesive, secure and intelligent foundation for decision making.",
          features: [
            "Smart Data Integration",
            "Automated Data Lineage", 
            "Enterprise Knowledge Graph"
          ]
        },
        {
          icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          ),
          title: "CogniAssist",
          description: "Enterprise-grade conversational AI framework tailored for business-specific tasks, deployed securely at scale across your organization.",
          features: [
            "Enterprise-grade NLP",
            "Role-based Orchestration",
            "Full Control & Privacy"
          ]
        },
        {
          icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 14V5h16v9H4z"/>
              <circle cx="12" cy="9" r="2"/>
            </svg>
          ),
          title: "CogniAgent",
          description: "Autonomous AI agents equipped with advanced reasoning and planning capabilities that execute complex tasks with minimal human intervention.",
          features: [
            "Autonomous Task Execution",
            "Advanced Reasoning Engine",
            "Human-in-the-Loop Control"
          ]
        }
      ].map((product, index) => (
        <div
          key={index}
          className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-1 hover:border-[#8100d7]/35 flex flex-col h-full overflow-hidden cursor-pointer"
        >
          {/* Enhanced gradient overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8100d7]/0 via-transparent to-[#8100d7]/0 group-hover:from-[#8100d7]/8 group-hover:via-[#8100d7]/4 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-[#f5f3ff]/0 group-hover:from-white/50 group-hover:to-[#f5f3ff]/80 transition-all duration-500 pointer-events-none rounded-2xl"></div>
          
          {/* Subtle ring effect on hover */}
          <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-[#8100d7]/20 transition-all duration-500"></div>
          
          {/* Card Content - Center Aligned and Compact */}
          <div className="p-5 flex flex-col flex-grow relative z-10 text-center">
            {/* Enhanced Icon - Centered & Stable */}
            <div className="mx-auto mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8100d7] via-[#5c009b] to-[#3d006b] flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl ring-1 ring-[#8100d7]/20 group-hover:ring-[#8100d7]/40">
                {product.icon}
              </div>
            </div>

            {/* Title - Centered and Compact */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8100d7] transition-all duration-300 leading-tight">
              {product.title}
            </h3>

            {/* Description - Centered and Compact */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow group-hover:text-gray-700 transition-colors duration-300">
              {product.description}
            </p>

            {/* Enhanced Features List - Centered */}
            <ul className="space-y-2 mb-5">
              {product.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 bg-gradient-to-r from-[#8100d7] to-[#5c009b] group-hover:scale-125 group-hover:shadow-md transition-all duration-300"></div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Explore Button - Compact */}
          <div className="p-5 pt-0 relative z-10">
            <button className="w-full bg-gradient-to-r from-[#8100d7] to-[#5c009b] hover:from-[#6b17d4] hover:to-[#4a0080] text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] hover:shadow-xl text-sm ring-1 ring-white/20 hover:ring-white/40">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Solution
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>










          {/* AI-Powered SDLC Section */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                  <span className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">AI-Powered</span>
                  <span className="text-gray-900"> SDLC Life Cycle</span>
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                  Experience intelligent automation throughout every phase of software development
                </p>
              </div>

              {/* SDLC Process Flow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    phase: "Planning & Design",
                    icon: (
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-violet-500/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    ),
                    items: [
                      { title: "AI-assisted requirements", desc: "Intelligent requirement analysis" },
                      { title: "Performance tracking", desc: "Continuous monitoring setup" }
                    ],
                    gradient: "from-violet-500 to-violet-700"
                  },
                  {
                    phase: "Development & Testing", 
                    icon: (
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-violet-500/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    ),
                    items: [
                      { title: "AI code generation", desc: "Intelligent development assistance" },
                      { title: "Automated testing", desc: "Smart defect detection" }
                    ],
                    gradient: "from-violet-500 to-violet-700"
                  },
                  {
                    phase: "Deployment & Feedback",
                    icon: (
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-violet-500/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      </div>
                    ),
                    items: [
                      { title: "CI/CD release", desc: "Automated deployment pipeline" },
                      { title: "Continuous improvement", desc: "Real-time feedback loops" }
                    ],
                    gradient: "from-violet-500 to-violet-700"
                  }
                ].map((stage, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 hover:bg-white hover:border-violet-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                    
                    <div className="relative z-10 text-center space-y-6">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <div className="transition-transform duration-300 group-hover:scale-105">
                          {stage.icon}
                        </div>
                      </div>
                      
                      {/* Phase Title */}
                      <h3 className="text-gray-900 font-bold text-lg leading-tight">
                        {stage.phase}
                      </h3>
                      
                      {/* Features List */}
                      <div className="space-y-4">
                        {stage.items.map((item, idx) => (
                          <div key={idx} className="text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-2 h-2 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full`}></div>
                              <span className="text-gray-900 font-medium text-sm">{item.title}</span>
                            </div>
                            <p className="text-gray-600 text-sm ml-5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Modern glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-violet-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI-Powered SDLC Benefits & CogniXcellerate Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto">
              
              {/* Benefits Card */}
              <div className="relative mb-20 bg-white border border-gray-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                {/* Minimal Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f0386]/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4f0386]/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
                      Why Choose Our{" "}
                      <span className="bg-gradient-to-r from-[#4f0386] via-[#6300a8] to-[#7a00ca] bg-clip-text text-transparent">
                        AI-Powered
                      </span>{" "}
                      SDLC?
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        { 
                          text: "Accelerate development cycles by 50%", 
                          color: "bg-[#4f0386]" 
                        },
                        { 
                          text: "Reduce bugs and security vulnerabilities", 
                          color: "bg-[#6300a8]" 
                        },
                        { 
                          text: "Improve code quality and maintainability", 
                          color: "bg-[#7a00ca]" 
                        },
                        { 
                          text: "Enhance team collaboration and productivity", 
                          color: "bg-[#4f0386]" 
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                          <span className="text-gray-800 text-lg font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <button className="bg-gradient-to-r from-[#4f0386] via-[#6300a8] to-[#7a00ca] hover:from-[#6300a8] hover:to-[#8a00dc] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 text-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Get Started with AI SDLC
                    </button>
                  </div>
                </div>
              </div>

              {/* CogniXcellerate Platform Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Content Section */}
                <div className="space-y-8" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-[#4f0386] via-[#6300a8] to-[#7a00ca] bg-clip-text text-transparent">
                        CogniXcellerate:
                      </span>
                      <span className="text-gray-900"> AI Orchestration Platform</span>
                    </h2>
                    
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      CogniXcellerate is our flagship AI orchestration platform, designed to intelligently coordinate complex workflows and automate decision-making across your enterprise. It acts as the central nervous system for your AI initiatives, ensuring seamless integration and optimal performance.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-6">
                    {[
                      {
                        title: "Automated Workflow Management",
                        description: "Streamline complex processes with intelligent automation",
                        gradient: "from-[#4f0386] to-[#6300a8]"
                      },
                      {
                        title: "Intelligent Decision Automation", 
                        description: "AI-powered decision making for optimal outcomes",
                        gradient: "from-[#6300a8] to-[#7a00ca]"
                      },
                      {
                        title: "Real-time Performance Monitoring",
                        description: "Continuous monitoring and optimization of all processes",
                        gradient: "from-[#4f0386] to-[#7a00ca]"
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg leading-tight">{feature.title}</h4>
                          <p className="text-gray-600 text-base mt-1 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="border-2 border-[#4f0386] text-[#4f0386] hover:bg-gradient-to-r hover:from-[#4f0386] hover:to-[#7a00ca] hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-lg transform hover:scale-105 shadow-md hover:shadow-lg">
                      Learn More about CogniXcellerate
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative">
                  <div className="bg-white border border-gray-200 rounded-3xl p-10 relative overflow-hidden shadow-xl">
                    {/* Minimal Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, #4f0386 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                      }}></div>
                    </div>
                    
                    {/* Real CogniXcellerate Image */}
                    <div className="relative z-10 flex items-center justify-center h-80">
  <img 
    src={cognixceleratePic} 
    alt="CogniXcellerate AI Orchestration Platform" 
    className="w-full h-full object-contain"
  />
</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CogniLoom Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="space-y-8" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">CogniLoom:</span>
              <span className="text-gray-900"> Intelligent Process Automation</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              CogniLoom revolutionizes your business processes by intelligently 
              automating repetitive tasks and integrating disparate systems. It 
              weaves together complex operational flows, enhancing efficiency 
              and reducing manual effort across your organization.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {[
              "Automated Task Execution",
              "Seamless System Integration", 
              "Adaptive Process Optimization"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-gray-800 text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="border-2 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-700 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
            Learn More about CogniLoom
          </button>
        </div>

        {/* Image Section - Replaced DevOps Visualization */}
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden shadow-xl w-full max-w-md">
            <div className="relative z-10 h-80 rounded-2xl overflow-hidden bg-gray-50">
              <img
                src={cogniLoomPic}
                alt="CogniLoom Intelligent Process Automation"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* CogniAgent Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section - Replaced AI Agent Visualization */}
        <div className="flex justify-center lg:order-1">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden shadow-xl w-full max-w-md">
            <div className="relative z-10 h-80 rounded-2xl overflow-hidden bg-gray-50">
              <img
                src={cogniAgentPic}
                alt="CogniAgent Intelligent Agent Framework"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 lg:order-2" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">CogniAgent:</span>
              <span className="text-gray-900"> Intelligent Agent Framework</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              CogniAgent provides a robust framework for deploying intelligent, 
              autonomous agents that can execute complex tasks, learn from their 
              environment, and adapt to changing business requirements. 
              Empower your operations with self-sufficient AI entities.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {[
              "Autonomous Task Execution",
              "Adaptive Learning Capabilities",
              "Complex Task Orchestration"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-gray-800 text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="border-2 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-700 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
            Learn More about CogniAgent
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Enterprise Solutions Section */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                  <span className="text-gray-900">Enterprise Solutions </span>
                  <span className="bg-gradient-to-r from-[#960ef7] via-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent">
                    Powering Tangible ROI
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
                  Real-world AI solutions delivering measurable business impact across industries
                </p>
              </div>

              {/* Enterprise Solutions Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {[
                  {
                    title: "Insurance Underwriting Agent",
                    icon: (
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    benefits: [
                      "Reduced risk evaluation from 24 hrs → 2 minutes",
                      "Integrated claim history, policy rules, external data"
                    ],
                    gradient: "from-[#960ef7] to-[#8b5cf6]"
                  },
                  {
                    title: "RFP Response Agent",
                    icon: (
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    ),
                    benefits: [
                      "Generated 90% of proposal content automatically",
                      "Ensured consistent tone, compliance & rapid turnaround"
                    ],
                    gradient: "from-[#8b5cf6] to-[#960ef7]"
                  },
                  {
                    title: "Three-Way Invoice Matching Agent",
                    icon: (
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    ),
                    benefits: [
                      "98% accuracy in PO-invoice-receipt comparisons", 
                      "Saved 60% in manual AP/AR review effort"
                    ],
                    gradient: "from-[#960ef7] to-[#a855f7]"
                  }
                ].map((solution, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
                  >
                    {/* Background Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-gray-100`}>
                        {solution.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-8 leading-tight">
                        {solution.title}
                      </h3>
                      
                      <div className="space-y-6">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-gray-700 text-base leading-relaxed">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subtle Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-[#960ef7] to-[#8b5cf6] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 text-lg transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Learn More about our Solutions
                </button>
              </div>
            </div>
          </section>

          {/* Final CTA Section - Clean & Compact */}
<section className="py-16 px-4 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30"></div>
  
  {/* Subtle Pattern Overlay */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 30% 20%, #8b5cf6 1px, transparent 1px), radial-gradient(circle at 70% 80%, #8b5cf6 1px, transparent 1px)`,
      backgroundSize: '60px 60px, 80px 80px'
    }}></div>
  </div>

  {/* Floating Accent Elements */}
  <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-full blur-xl"></div>
  <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-r from-purple-600/10 to-purple-700/10 rounded-full blur-xl"></div>

  <div className="max-w-3xl mx-auto text-center relative z-10">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
      <span className="text-gray-900">Ready to </span>
      <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
        Transform Your Enterprise?
      </span>
    </h2>
    
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
      Start your AI journey with CogniVide's intelligent automation platform.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="group relative bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden">
        <span className="relative z-10 flex items-center justify-center gap-2">
          Start Your AI Journey
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>
      
      <button className="group relative bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 text-base shadow hover:shadow-lg transform hover:scale-105">
        <span className="relative z-10 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Schedule Demo
        </span>
      </button>
    </div>
  </div>

</section>


</div>

        </div>
      </div>
  );
};

export default Home;
