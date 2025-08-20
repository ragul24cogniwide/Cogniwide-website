import React from 'react';

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
      <div className="relative z-10 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
         {/* Hero Section - Perfect First View Alignment */}
<div className="relative pt-6 pb-4 px-4 -mt-8 overflow-hidden min-h-[500px] max-h-[680px] flex flex-col justify-center">
  {/* Animated Background Grid */}
  <div className="absolute inset-0 opacity-[0.02]">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  {/* Floating Orbs - Purple Only */}
  <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full opacity-20 blur-lg animate-pulse"></div>
  <div className="absolute bottom-8 right-6 w-7 h-7 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>

  <div className="max-w-5xl mx-auto text-center">
    {/* Status Indicator */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-4">
      <div className="relative">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
        <div className="absolute inset-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
      </div>
      <span className="text-xs font-medium text-green-700">Live & Ready to Transform</span>
    </div>

    {/* Headline - INTELLIGENT Black, AUTOMATION Purple */}
    <div className="space-y-1 mb-4">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
        <span className="block text-black leading-[0.9]">INTELLIGENT</span>
        <span className="block text-transparent bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text leading-[0.9] -mt-1">
          AUTOMATION
        </span>
      </div>
      <div className="text-sm sm:text-base md:text-lg text-gray-700 font-light tracking-wide mt-2">
        That Amplifies Human Potential
      </div>
    </div>

    {/* Description */}
    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-5 font-normal">
      Transform your enterprise with AI-powered orchestration that adapts, learns, and scales with your business needs.
    </p>

    {/* Action Buttons - Purple Theme */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
      <button className="group relative bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all duration-200 transform hover:scale-105 shadow hover:shadow-lg overflow-hidden min-w-[160px]">
        <span className="relative z-10 flex items-center justify-center gap-2">
          Start Building Now
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>
      <button className="group flex items-center gap-2 text-gray-700 hover:text-purple-700 font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-150 hover:bg-purple-50 border border-transparent hover:border-purple-200">
        <div className="w-7 h-7 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all">
          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        See It In Action
      </button>
    </div>
  </div>

  {/* Feature Cards Grid - Perfectly Aligned */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto w-full">
    {[
      {
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow ring-1 ring-purple-500/20">
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
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow ring-1 ring-indigo-500/20">
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
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow ring-1 ring-purple-500/20">
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
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow ring-1 ring-indigo-500/20">
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
        className="group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl py-4 px-3 hover:bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-150 hover:scale-[1.02] flex flex-col items-center text-center space-y-2"
      >
        <div className="mb-1 transition-transform duration-150 group-hover:scale-105">
          {feature.icon}
        </div>
        <div className="space-y-1">
          <h3 className="text-gray-900 font-bold text-sm leading-snug">{feature.title}</h3>
          <p className="text-purple-700 font-semibold text-xs">{feature.subtitle}</p>
          <p className="text-gray-600 text-xs leading-tight">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>






          {/* Product Portfolio - Cleaned Up with Better Spacing */}
<div className="mb-20 px-20">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        <span className="text-gray-900">Our Product </span>
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>
      
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        Four powerful platforms designed to transform every aspect of your enterprise operations.
      </p>
    </div>

    {/* Product Cards Grid - Clean and Well-Spaced */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {[
        {
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-purple-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          ),
          title: "CogniXcelerate",
          description: "Unified workflow automation platform that intelligently coordinates complex workflows and automates decision-making processes.",
          features: ["Advanced Process Mining", "Intelligent Decision Making", "Real-time Monitoring"],
          gradient: "from-purple-500 to-indigo-600"
        },
        {
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          ),
          title: "CogniLearn",
          description: "Unified data fabric platform that revolves enterprises' wide data into a cohesive, secure and intelligent layer.",
          features: ["Smart Data Integration", "Automated Lineage", "Enterprise Ontology"],
          gradient: "from-indigo-500 to-purple-700"
        },
        {
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-purple-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          ),
          title: "CogniAssist",
          description: "Enterprise-grade conversational AI framework tailored for business-specific tasks, deployed securely at scale.",
          features: ["Enterprise-grade NLP", "Orchestrated Role", "Full Control and Privacy"],
          gradient: "from-purple-500 to-indigo-600"
        },
        {
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          ),
          title: "CogniAgent",
          description: "Autonomous agents equipped with reasoning and planning that carry out tasks and processes through minimal human input.",
          features: ["Autonomous Workflows", "Tool Augmented Reasoning", "Human-in-the-loop Control"],
          gradient: "from-indigo-500 to-purple-700"
        }
      ].map((product, index) => (
        <div 
          key={index}
          className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 hover:bg-white hover:border-purple-200/80 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col h-full"
          style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>

          <div className="relative z-10 flex flex-col items-center text-center h-full">
            {/* Icon */}
            <div className="transition-transform duration-300 group-hover:scale-105 mb-5">
              {product.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-gray-900 font-bold text-base leading-tight mb-4">
              {product.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5 h-20 flex items-center">
              {product.description}
            </p>

            {/* Features List */}
            <div className="space-y-3 w-full mb-6 flex-grow">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 text-xs">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-auto">
              Explore Solution
            </button>
          </div>

          {/* Modern glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</div>










          {/* AI-Powered SDLC Life Cycle Section - Feature Cards Styling with Full Content */}
<div className="mb-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 bg-clip-text text-transparent">AI-Powered</span>
        <span className="text-gray-900"> SDLC Life Cycle</span>
      </h2>
      
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        Experience intelligent automation throughout every phase of software development
      </p>
    </div>

    {/* SDLC Process Flow - Feature Cards Styling with Full Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
      {[
        {
          phase: "Planning & Design",
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-purple-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          ),
          items: [
            { title: "AI-assisted requirements", desc: "Intelligent requirement analysis" },
            { title: "Performance tracking", desc: "Continuous monitoring setup" }
          ],
          gradient: "from-purple-500 to-indigo-600"
        },
        {
          phase: "Development & Testing", 
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          ),
          items: [
            { title: "AI code generation", desc: "Intelligent development assistance" },
            { title: "Automated testing", desc: "Smart defect detection" }
          ],
          gradient: "from-indigo-500 to-purple-700"
        },
        {
          phase: "Deployment & Feedback",
          icon: (
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-purple-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
          ),
          items: [
            { title: "CI/CD release", desc: "Automated deployment pipeline" },
            { title: "Continuous improvement", desc: "Real-time feedback loops" }
          ],
          gradient: "from-purple-500 to-indigo-600"
        }
      ].map((stage, index) => (
        <div 
          key={index}
          className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-5 hover:bg-white hover:border-purple-200/80 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
          style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
          
          <div className="relative z-10 text-center space-y-4">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="transition-transform duration-300 group-hover:scale-105">
                {stage.icon}
              </div>
            </div>
            
            {/* Phase Title */}
            <h3 className="text-gray-900 font-bold text-base leading-tight">
              {stage.phase}
            </h3>
            
            {/* Features List - Full Content Preserved */}
            <div className="space-y-3">
              {stage.items.map((item, idx) => (
                <div key={idx} className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
                    <span className="text-gray-900 font-medium text-sm">{item.title}</span>
                  </div>
                  <p className="text-gray-600 text-xs ml-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</div>









          {/* AI-Powered SDLC Benefits & CogniXcellerate Section - Gradient Reference Updated */}
<div className="mb-20 px-4">
  <div className="max-w-7xl mx-auto">
    
    {/* Benefits Card - Updated with Reference Gradient */}
    <div className="relative mb-16 bg-white border border-gray-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
      {/* Minimal Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            SDLC?
          </h2>
          
          <div className="space-y-5">
            {[
              { 
                text: "Accelerate development cycles by 50%", 
                color: "bg-orange-500" 
              },
              { 
                text: "Reduce bugs and security vulnerabilities", 
                color: "bg-green-500" 
              },
              { 
                text: "Improve code quality and maintainability", 
                color: "bg-purple-500" 
              },
              { 
                text: "Enhance team collaboration and productivity", 
                color: "bg-pink-500" 
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
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 text-lg">
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
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              gradient: "from-purple-500 to-indigo-600"
            },
            {
              title: "Intelligent Decision Automation", 
              description: "AI-powered decision making for optimal outcomes",
              gradient: "from-indigo-500 to-purple-600"
            },
            {
              title: "Real-time Performance Monitoring",
              description: "Continuous monitoring and optimization of all processes",
              gradient: "from-purple-500 to-pink-600"
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
          <button className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-lg transform hover:scale-105 shadow-md hover:shadow-lg">
            Learn More about CogniXcellerate
          </button>
        </div>
      </div>

      {/* Clean Illustration Section */}
      <div className="relative">
        <div className="bg-white border border-gray-200 rounded-3xl p-10 relative overflow-hidden shadow-xl">
          {/* Minimal Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Central AI Hub */}
          <div className="relative z-10 flex items-center justify-center h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central AI Icon */}
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84C10.18 10.84 9.86 10.84 9.5 11L4.93 6.43L3.5 7.86L8.07 12.43C8.07 12.79 8.07 13.14 8.07 13.5L2.5 19.07L3.93 20.5L9.5 14.93C9.86 14.93 10.18 14.93 10.5 14.93L16.17 20.6L17.6 19.17L12.03 13.6C12.03 13.24 12.03 12.89 12.03 12.53L17.6 6.96L21 9Z"/>
                </svg>
              </div>
            </div>
            
            {/* Floating Connection Points */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="absolute top-12 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '1s'}}>
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-12 left-12 w-18 h-18 bg-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '2s'}}>
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-8 right-12 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '3s'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            {/* Simple Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>











          

          {/* CogniLoom & CogniAgent Section - Purple Theme Consistent */}
{/* CogniLoom Section - Fresh Design */}
<div className="mb-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="space-y-8" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">CogniLoom:</span>
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
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-800 text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
            Learn More about CogniLoom
          </button>
        </div>

        {/* DevOps Cycle Visualization */}
        <div className="flex justify-center">
          <div className="bg-purple-50 border border-purple-200 rounded-3xl p-10 w-full max-w-md">
            <div className="flex items-center justify-center relative h-48">
              {/* DevOps Infinity Loop */}
              <svg className="w-full h-full max-w-xs" viewBox="0 0 240 120">
                <defs>
                  <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="50%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#6366f1"/>
                  </linearGradient>
                </defs>
                <path d="M 60,60 A 30,30 0 1,1 180,60 A 30,30 0 1,1 60,60" 
                      fill="none" 
                      stroke="url(#devopsGradient)" 
                      strokeWidth="5"
                      strokeLinecap="round"/>
              </svg>
              
              {/* DevOps Labels */}
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">DEV</span>
                  </div>
                  <div className="text-gray-600 text-center text-sm">
                    <div>code</div>
                    <div>build</div>
                    <div>test</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">OPS</span>
                  </div>
                  <div className="text-gray-600 text-center text-sm">
                    <div>deploy</div>
                    <div>operate</div>
                    <div>monitor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* CogniAgent Section - Fresh Design */}
<div className="mb-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* AI Agent Visualization */}
        <div className="flex justify-center lg:order-1">
          <div className="relative w-64 h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 flex items-center justify-center overflow-hidden">
            {/* Central AI Core */}
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl z-10">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84C10.18 10.84 9.86 10.84 9.5 11L4.93 6.43L3.5 7.86L8.07 12.43C8.07 12.79 8.07 13.14 8.07 13.5L2.5 19.07L3.93 20.5L9.5 14.93C9.86 14.93 10.18 14.93 10.5 14.93L16.17 20.6L17.6 19.17L12.03 13.6C12.03 13.24 12.03 12.89 12.03 12.53L17.6 6.96L21 9Z"/>
              </svg>
            </div>

            {/* Orbiting Agent Nodes */}
            <div className="absolute top-6 left-12 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="absolute top-12 right-6 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '1s'}}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-12 left-6 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '2s'}}>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-6 right-12 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '3s'}}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>

            {/* Connecting Neural Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#neuralGradient)" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#neuralGradient)" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="url(#neuralGradient)" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="3" strokeDasharray="5,5"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 lg:order-2" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">CogniAgent:</span>
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
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-800 text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
            Learn More about CogniAgent
          </button>
        </div>
      </div>
    </div>
  </div>
</div>










          {/* Enterprise Solutions Section - Fresh Enterprise Design */}
<div className="mb-24 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        <span className="text-gray-900">Enterprise Solutions </span>
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Powering Tangible ROI
        </span>
      </h2>
      
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        Real-world AI solutions delivering measurable business impact across industries
      </p>
    </div>

    {/* Enterprise Solutions Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
          gradient: "from-purple-500 to-indigo-600"
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
          gradient: "from-indigo-500 to-purple-600"
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
          gradient: "from-purple-500 to-pink-600"
        }
      ].map((solution, index) => (
        <div 
          key={index}
          className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
        >
          {/* Background Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
          
          {/* Icon */}
          <div className="relative z-10 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-gray-100`}>
              {solution.icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
              {solution.title}
            </h3>
            
            <div className="space-y-4">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
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
      <button className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 text-lg transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
  Learn More about our Solutions
</button>

    </div>
  </div>
</div>







          {/* Final CTA Section - Purple Theme */}
<div className="py-12 px-4 bg-gray-50">
  <div className="max-w-3xl mx-auto text-center" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      <span className="text-gray-900">Ready to </span>
      <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
        Transform Your Enterprise?
      </span>
    </h2>
    
    <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
      Start your AI journey with CogniVide's intelligent automation platform.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <button className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-base shadow-lg">
        Start Your AI Journey
      </button>
      
      <button className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-900 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-base">
        Schedule Demo
      </button>
    </div>
  </div>
</div>







        </div>
      </div>
    </div>
  );
};

export default Home;
