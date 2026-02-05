'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  CodeBracketIcon, 
  SparklesIcon,
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  ServerIcon,
  UserGroupIcon,
  CloudIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const CleanHero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 'platform',
      badge: 'Cogniwide Ecosystem',
      title: 'Accelerate Your AI Transformation',
      subtitle: 'The complete enterprise AI ecosystem. From Agentic AI to Unified DevOps and Data Intelligence—all in one place.',
      cta: { text: 'Explore Platform', href: '/products' },
      color: 'blue',
      theme: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-100',
        aurora1: 'bg-blue-100/50',
        aurora2: 'bg-indigo-100/50',
        pulse: 'bg-blue-500'
      },
      gradient: 'from-blue-600 to-indigo-600',
      icon: SparklesIcon
    },
    {
      id: 'cogniassist',
      badge: 'CogniAssist',
      title: 'Agentic AI That Works For You',
      subtitle: 'Deploy intelligent agents that automate complex workflows and decision-making with human-like reasoning.',
      cta: { text: 'Discover Agents', href: '/products/cogniassist' },
      color: 'green',
      theme: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-100',
        aurora1: 'bg-emerald-100/50',
        aurora2: 'bg-teal-100/50',
        pulse: 'bg-green-500'
      },
      gradient: 'from-emerald-500 to-teal-600',
      icon: CpuChipIcon
    },
    {
      id: 'cogniloom',
      badge: 'CogniLoom',
      title: 'Unify, Secure & Automate DevSecOps',
      subtitle: 'Unify development, security, and operations with AI-driven automation and autonomous infrastructure management.',
      cta: { text: 'View CogniLoom', href: '/products/cogniloom' },
      color: 'purple',
      theme: {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-100',
        aurora1: 'bg-violet-100/50',
        aurora2: 'bg-purple-100/50',
        pulse: 'bg-purple-500'
      },
      gradient: 'from-violet-600 to-purple-600',
      icon: CodeBracketIcon
    },
    {
      id: 'cogniaura',
      badge: 'CogniAura',
      title: 'Turn Data Into Intelligence',
      subtitle: 'Transform your data landscape with seamless BI migration and Master Data Management. Unlock the true value of your enterprise assets.',
      cta: { text: 'Explore Data', href: '/products/cogniaura' },
      color: 'orange',
      theme: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-100',
        aurora1: 'bg-orange-100/50',
        aurora2: 'bg-amber-100/50',
        pulse: 'bg-orange-500'
      },
      gradient: 'from-orange-500 to-amber-600',
      icon: ChartBarIcon
    },
    {
      id: 'cognitest',
      badge: 'CogniTest',
      title: 'Unified AI Testing Platform',
      subtitle: 'Manage your entire testing lifecycle—from AI generation to automated execution and orchestration—within a single, unified platform.',
      cta: { text: 'See CogniTest', href: '/solutions/cognitest' },
      color: 'teal',
      theme: {
        bg: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-100',
        aurora1: 'bg-teal-100/50',
        aurora2: 'bg-cyan-100/50',
        pulse: 'bg-teal-500'
      },
      gradient: 'from-teal-500 to-cyan-600',
      icon: BeakerIcon
    },
    {
      id: 'cognivibe',
      badge: 'CogniVibe',
      title: 'Accelerate with AI-Powered SDLC',
      subtitle: 'Leverage AI to fast-track development, streamline workflows, and ship high-quality deliverables ahead of schedule with confidence.',
      cta: { text: 'Discover CogniVibe', href: '/solutions/cognivibe' },
      color: 'fuchsia',
      theme: {
        bg: 'bg-fuchsia-50',
        text: 'text-fuchsia-700',
        border: 'border-fuchsia-100',
        aurora1: 'bg-fuchsia-100/50',
        aurora2: 'bg-violet-100/50',
        pulse: 'bg-fuchsia-500'
      },
      gradient: 'from-fuchsia-500 to-violet-600',
      icon: BoltIcon
    }
  ]

  const current = slides[activeSlide]

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden">
      
      {/* 1. Aurora Background Effect (CSS-based, smooth, clean) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full ${current.theme.aurora1} blur-[120px] animate-pulse-slow transition-colors duration-1000`} />
        <div className={`absolute top-[20%] -right-[20%] w-[60%] h-[80%] rounded-full ${current.theme.aurora2} blur-[120px] animate-pulse-slower transition-colors duration-1000`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Badge */}
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${current.theme.bg} ${current.theme.text} border ${current.theme.border} mb-6`}>
                  <current.icon className="w-4 h-4" />
                  {current.badge}
                </span>

                {/* Title */}
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {current.title.split(' ').map((word, i) => (
                    <span key={i}>
                       <span className={i === 1 || i === 2 ? `text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}` : ''}>
                          {word}
                       </span>
                       {i !== current.title.split(' ').length - 1 && ' '}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                  {current.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={current.cta.href}
                    className="px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold text-lg shadow-xl shadow-slate-200 hover:shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-2 group"
                  >
                    {current.cta.text}
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 transition-all"
                  >
                    Contact Sales
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex gap-3 mt-12">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphic Composition */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeSlide}
                 initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
                 animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                 exit={{ opacity: 0, rotateY: -10, scale: 0.95 }}
                 transition={{ duration: 0.6 }}
                 className="relative w-full h-full flex items-center justify-center"
               >
                 {/* Background Blob for Depth */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr ${current.gradient} opacity-10 rounded-full blur-[100px]`} />

                 {/* Main Glass Card */}
                <div className="relative w-[450px] h-[550px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 flex flex-col justify-between z-10">
                   
                   {/* Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                         <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white shadow-lg`}>
                           <current.icon className="w-6 h-6" />
                         </div>
                         <div>
                           <div className="text-lg font-bold text-slate-800">{current.badge}</div>
                         </div>
                      </div>
                      <div className="flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-400" />
                         <div className="w-2 h-2 rounded-full bg-amber-400" />
                         <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                   </div>

                    {/* DYNAMIC CONTENT BASED ON SLIDE */}
                    <div className="flex-1 relative">
                      
                      {/* 1. PLATFORM (Enterprise AI Command Center - Refined) */}
                      {current.id === 'platform' && (
                        <div className="flex flex-col h-full gap-3 text-slate-800">
                           
                           {/* Top Status Bar */}
                           <div className="flex justify-between items-center px-1">
                              <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Enterprise AI Platform</span>
                              </div>
                              <div className="flex gap-2">
                                 <span className="text-[9px] font-mono text-slate-500 bg-white/50 px-1.5 py-0.5 rounded border border-slate-200">v4.2.0 Stable</span>
                                 <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">System Healthy</span>
                              </div>
                           </div>

                           {/* Metric Cards Row */}
                           <div className="grid grid-cols-3 gap-2">
                              {[
                                 { label: 'Active Agents', val: '24', icon: CpuChipIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                                 { label: 'Secure Pipelines', val: '100%', icon: ShieldCheckIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
                                 { label: 'Data Quality', val: '99.9%', icon: ChartBarIcon, color: 'text-blue-600', bg: 'bg-blue-50' }
                              ].map((stat, i) => (
                                 <div key={i} className="bg-white/60 p-2.5 rounded-xl border border-white/60 shadow-sm flex flex-col gap-1 hover:bg-white/80 transition-colors">
                                    <div className="flex justify-between items-start">
                                       <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                                          <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                                       </div>
                                       <ArrowTrendingUpIcon className="w-3 h-3 text-emerald-500" />
                                    </div>
                                    <div>
                                       <div className="text-lg font-bold text-slate-800 leading-none mb-0.5">{stat.val}</div>
                                       <div className="text-[9px] text-slate-500 font-medium">{stat.label}</div>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* Main Topology Monitor */}
                           <div className="flex-1 bg-white/50 rounded-xl border border-white/60 p-1 relative overflow-hidden flex flex-col shadow-sm group">
                              <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,transparent)]" />
                              
                              {/* Header */}
                              <div className="flex justify-between items-center px-3 py-2 relative z-10 border-b border-slate-100/50">
                                 <span className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5">
                                    <GlobeAltIcon className="w-3 h-3 text-slate-400" />
                                    Live Ecosystem Map
                                 </span>
                                 <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                 </div>
                              </div>

                              {/* Visualization */}
                              <div className="flex-1 relative z-10">
                                 {/* Central Hub */}
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="relative">
                                       <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow" />
                                       <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-indigo-50 flex items-center justify-center relative z-10">
                                          <SparklesIcon className="w-8 h-8 text-indigo-600" />
                                       </div>
                                       {/* Orbiting Ring */}
                                       <svg className="absolute inset-0 w-full h-full -m-4 overflow-visible animate-spin-slow-reverse">
                                          <circle cx="48" cy="48" r="32" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                                       </svg>
                                    </div>
                                    <div className="mt-2 text-[10px] font-bold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">Unified Core</div>
                                 </div>

                                 {/* Connected Nodes */}
                                 {[
                                    { label: 'ERP', icon: ServerIcon, x: '20%', y: '20%', color: 'text-blue-600', bg: 'bg-blue-50' },
                                    { label: 'CRM', icon: UserGroupIcon, x: '80%', y: '20%', color: 'text-rose-600', bg: 'bg-rose-50' },
                                    { label: 'Cloud', icon: CloudIcon, x: '20%', y: '80%', color: 'text-cyan-600', bg: 'bg-cyan-50' },
                                    { label: 'DevOps', icon: CommandLineIcon, x: '80%', y: '80%', color: 'text-purple-600', bg: 'bg-purple-50' },
                                 ].map((node, i) => (
                                    <motion.div
                                       key={i}
                                       className="absolute flex flex-col items-center gap-1"
                                       style={{ left: node.x, top: node.y }}
                                       initial={{ scale: 0 }}
                                       animate={{ scale: 1 }}
                                       transition={{ delay: i * 0.1 }}
                                    >
                                       {/* Connection Line (CSS Trick for simplicity) */}
                                       <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
                                          <line 
                                             x1="100" y1="100" 
                                             x2={node.x === '20%' ? (node.y === '20%' ? '160' : '160') : (node.y === '20%' ? '40' : '40')} 
                                             y2={node.y === '20%' ? (node.x === '20%' ? '160' : '160') : (node.x === '20%' ? '40' : '40')} 
                                             stroke="#cbd5e1" 
                                             strokeWidth="1" 
                                             strokeDasharray="4 4"
                                          />
                                          {/* Animated Packet */}
                                          <motion.circle 
                                             r="3" 
                                             fill="#6366f1"
                                             animate={{ 
                                                cx: ["100", node.x === '20%' ? (node.y === '20%' ? '160' : '160') : (node.y === '20%' ? '40' : '40')],
                                                cy: ["100", node.y === '20%' ? (node.x === '20%' ? '160' : '160') : (node.x === '20%' ? '40' : '40')],
                                                opacity: [0, 1, 0]
                                             }}
                                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                          />
                                       </svg>

                                       <div className={`w-10 h-10 ${node.bg} rounded-xl border border-white shadow-sm flex items-center justify-center relative group-hover:scale-110 transition-transform`}>
                                          <node.icon className={`w-5 h-5 ${node.color}`} />
                                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                                       </div>
                                       <span className="text-[9px] font-semibold text-slate-600 bg-white/50 px-1.5 py-0.5 rounded backdrop-blur-sm">{node.label}</span>
                                    </motion.div>
                                 ))}
                              </div>
                           </div>

                           {/* Enterprise Readiness Footer */}
                           <div className="bg-white/60 rounded-xl p-3 border border-white/60 shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="flex items-center gap-1.5">
                                    <ShieldCheckIcon className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="text-[10px] font-semibold text-slate-600">Enterprise Ready</span>
                                 </div>
                                 <div className="h-3 w-[1px] bg-slate-300" />
                                 <div className="flex gap-2">
                                    <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">SOC2 Type II</span>
                                    <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">ISO 27001</span>
                                    <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">GDPR</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className="text-[9px] text-slate-400 font-medium">Uptime</span>
                                 <span className="text-[10px] font-bold text-emerald-600">99.99%</span>
                              </div>
                           </div>

                        </div>
                      )}

                      {/* 2. COGNIASSIST (Agentic Control Plane) */}
                      {current.id === 'cogniassist' && (
                        <div className="flex flex-col h-full gap-3 text-slate-800">
                           {/* 1. Agent Control Center (List of Live Agents) */}
                           <div className="flex flex-col gap-2">
                              <div className="flex justify-between items-center px-1 mb-1">
                                 <div className="text-[10px] font-semibold text-teal-700 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                    Live Agents (5)
                                 </div>
                                 <div className="text-[9px] text-slate-500 font-mono bg-white/50 px-1.5 py-0.5 rounded">Orchestrator: Active</div>
                              </div>
                              {[
                                { name: 'IT Incident Resolution Agent', status: 'Analyzing Logs', state: 'thinking', conf: '98%', type: 'Pro-Code' },
                                { name: 'Procurement Intel Agent', status: 'Verifying Vendor', state: 'acting', conf: '100%', type: 'No-Code' },
                                { name: 'HR Policy Agent', status: 'Drafting Response', state: 'acting', conf: '95%', type: 'No-Code' }
                              ].map((agent, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="group bg-white/60 p-2.5 rounded-xl border border-white/60 hover:bg-white/80 transition-all shadow-sm flex items-center gap-3"
                                >
                                   <div className={`w-8 h-8 rounded-lg ${agent.state === 'thinking' ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600'} flex items-center justify-center relative`}>
                                      {agent.state === 'thinking' ? <SparklesIcon className="w-4 h-4 animate-pulse" /> : <BoltIcon className="w-4 h-4" />}
                                      <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${agent.state === 'thinking' ? 'bg-indigo-500' : 'bg-teal-500'}`} />
                                   </div>
                                   <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-center mb-0.5">
                                         <span className="text-xs font-bold text-slate-800 truncate">{agent.name}</span>
                                         <span className={`text-[8px] px-1.5 rounded border ${agent.type === 'No-Code' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-purple-50 text-purple-600 border-purple-100'}`}>
                                            {agent.type}
                                         </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                         <span className="text-[10px] text-slate-500 truncate">{agent.status}</span>
                                         <span className="text-[9px] font-mono text-slate-400">Conf: <span className="text-slate-600 font-bold">{agent.conf}</span></span>
                                      </div>
                                   </div>
                                </motion.div>
                              ))}
                           </div>

                           {/* 2. Orchestration & Intelligence Grid */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              {/* Orchestration Layer */}
                              <div className="col-span-2 bg-gradient-to-r from-slate-50 to-white p-2.5 rounded-xl border border-white/60 shadow-sm flex items-center justify-between gap-4">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-slate-100 rounded-md">
                                       <ArrowPathIcon className="w-3.5 h-3.5 text-slate-500" />
                                    </div>
                                    <div className="flex flex-col">
                                       <span className="text-[10px] font-bold text-slate-700">Workflow Handoff</span>
                                       <span className="text-[9px] text-slate-500">IT Agent → Approval Bot</span>
                                    </div>
                                 </div>
                                 <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                       initial={{ width: "0%" }}
                                       animate={{ width: "60%" }}
                                       transition={{ duration: 2, repeat: Infinity }}
                                       className="h-full bg-slate-400 rounded-full"
                                    />
                                 </div>
                              </div>

                              {/* Prompt & LLM Layer */}
                              <div className="bg-white/60 p-3 rounded-xl border border-white/60 shadow-sm flex flex-col gap-2">
                                 <div className="flex items-center gap-1.5 mb-1">
                                    <ChatBubbleLeftRightIcon className="w-3.5 h-3.5 text-indigo-600" />
                                    <span className="text-[10px] font-bold text-slate-700">Multi-LLM Runtime</span>
                                 </div>
                                 <div className="flex gap-1.5">
                                    <div className="h-1.5 flex-1 bg-indigo-500 rounded-full opacity-80" />
                                    <div className="h-1.5 w-4 bg-slate-200 rounded-full" />
                                    <div className="h-1.5 w-4 bg-slate-200 rounded-full" />
                                 </div>
                                 <div className="text-[9px] text-slate-500 mt-auto">
                                    Using <span className="font-semibold text-indigo-600">GPT-4o</span> (Primary)
                                 </div>
                              </div>

                              {/* Guardrails & Governance */}
                              <div className="bg-white/60 p-3 rounded-xl border border-white/60 shadow-sm flex flex-col gap-2">
                                 <div className="flex items-center gap-1.5 mb-1">
                                    <LockClosedIcon className="w-3.5 h-3.5 text-emerald-600" />
                                    <span className="text-[10px] font-bold text-slate-700">Guardrails</span>
                                 </div>
                                 <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center text-[9px] text-slate-600 bg-emerald-50/50 px-1.5 py-1 rounded border border-emerald-100/50">
                                       <span>PII Filter</span>
                                       <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                                    </div>
                                    <div className="flex justify-between items-center text-[9px] text-slate-600 bg-emerald-50/50 px-1.5 py-1 rounded border border-emerald-100/50">
                                       <span>Policy Check</span>
                                       <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}

                      {/* 3. COGNILOOM (Detailed Pipeline) */}
                      {current.id === 'cogniloom' && (
                        <div className="flex flex-col h-full gap-4 text-slate-800">
                           {/* 1. Unified Pipeline Timeline */}
                           <div className="bg-white/60 rounded-xl p-3 border border-white/60 shadow-sm">
                              <div className="flex justify-between items-center mb-2">
                                 <div className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                    Pipeline Active
                                 </div>
                                 <div className="text-[10px] text-slate-500 font-mono">ID: #8392-AC</div>
                              </div>
                              <div className="flex justify-between items-center relative px-1">
                                 {['Build', 'Test', 'Secure', 'Deploy', 'Operate'].map((step, i) => (
                                    <div key={step} className="flex flex-col items-center z-10 gap-1">
                                       <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border transition-all duration-300 ${
                                          i <= 2 ? 'bg-purple-500 border-purple-400 text-white shadow-md' : 
                                          i === 3 ? 'bg-purple-50 border-purple-400 text-purple-600 animate-pulse shadow-sm' : 
                                          'bg-white border-slate-200 text-slate-400'
                                       }`}>
                                          {i <= 2 ? <CheckCircleIcon className="w-3.5 h-3.5" /> : i === 3 ? <ArrowPathIcon className="w-3.5 h-3.5 animate-spin" /> : i + 1}
                                       </div>
                                       <span className={`text-[8px] font-medium tracking-wide ${i <= 3 ? 'text-slate-700' : 'text-slate-400'}`}>{step}</span>
                                    </div>
                                 ))}
                                 {/* Connecting Line */}
                                 <div className="absolute top-3 left-0 w-full h-0.5 bg-slate-200 -z-0">
                                    <motion.div 
                                       initial={{ width: "0%" }}
                                       animate={{ width: "75%" }}
                                       transition={{ duration: 1.5, ease: "easeInOut" }}
                                       className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" 
                                    />
                                 </div>
                              </div>
                           </div>
                       
                           {/* 2. AI Insights & Security (Grid) */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              {/* AI Insights */}
                              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100 flex flex-col gap-2 relative overflow-hidden group shadow-sm">
                                 <div className="absolute inset-0 bg-indigo-50/50 group-hover:bg-indigo-100/50 transition-colors" />
                                 <div className="flex items-center gap-2 mb-1 relative z-10">
                                    <SparklesIcon className="w-4 h-4 text-indigo-600" />
                                    <span className="text-xs font-semibold text-indigo-700">AI Insights</span>
                                 </div>
                                 <div className="bg-white/80 rounded p-2 border border-white/60 relative z-10 hover:border-indigo-200 transition-colors shadow-sm">
                                    <div className="flex justify-between items-start mb-1">
                                       <span className="text-[10px] text-slate-700 font-medium">Optimization</span>
                                       <span className="text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200">98% Conf.</span>
                                    </div>
                                    <div className="text-[9px] text-slate-600 leading-tight">Docker image size reduction possible (-40%)</div>
                                 </div>
                                 <div className="bg-white/80 rounded p-2 border border-white/60 relative z-10 hover:border-amber-200 transition-colors shadow-sm">
                                    <div className="flex justify-between items-start">
                                       <span className="text-[10px] text-amber-700 font-medium">Policy Drift</span>
                                       <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200">High</span>
                                    </div>
                                 </div>
                              </div>
                       
                              {/* Security Intelligence */}
                              <div className="bg-white/60 rounded-xl p-3 border border-white/60 flex flex-col gap-2 relative group shadow-sm">
                                 <div className="flex items-center gap-2 mb-1">
                                    <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
                                    <span className="text-xs font-semibold text-teal-700">Security</span>
                                 </div>
                                 <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100 group-hover:border-teal-100 transition-colors">
                                    <div className="flex flex-col items-center">
                                       <span className="text-xl font-bold text-slate-800">0</span>
                                       <span className="text-[8px] text-slate-500 uppercase tracking-wider">Critical</span>
                                    </div>
                                    <div className="h-8 w-[1px] bg-slate-200" />
                                    <div className="flex flex-col items-center">
                                       <span className="text-xl font-bold text-teal-600">100%</span>
                                       <span className="text-[8px] text-slate-500 uppercase tracking-wider">Secure</span>
                                    </div>
                                 </div>
                                 <div className="flex gap-1.5 mt-auto">
                                    <span className="text-[8px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 flex-1 text-center shadow-sm">SOC2</span>
                                    <span className="text-[8px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 flex-1 text-center shadow-sm">ISO</span>
                                 </div>
                              </div>
                       
                              {/* Infrastructure */}
                              <div className="bg-white/60 rounded-xl p-3 border border-white/60 col-span-2 flex items-center justify-between group hover:bg-white/80 transition-colors shadow-sm">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                       <GlobeAltIcon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                       <div className="text-xs font-semibold text-slate-700">Infrastructure</div>
                                       <div className="text-[10px] text-slate-500 flex items-center gap-1">
                                          Provisioning: 
                                          <span className="text-green-600 font-medium">Auto-Remediated</span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">us-east-1</div>
                                    <div className="text-[10px] text-green-600 flex items-center gap-1.5 justify-end mt-1">
                                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-sm" />
                                       Healthy
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}

                      {/* 4. COGNIAURA (Intelligent Data Platform) */}
                      {current.id === 'cogniaura' && (
                        <div className="flex flex-col h-full gap-3 text-slate-800">
                           
                           {/* 1. PortBI: Intelligent Migration */}
                           <div className="bg-white/60 rounded-xl p-3 border border-white/60 shadow-sm relative overflow-hidden group">
                              <div className="flex justify-between items-center mb-2">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-orange-100 rounded-lg">
                                       <ArrowPathIcon className="w-3.5 h-3.5 text-orange-600" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">PortBI</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                                    <SparklesIcon className="w-3 h-3 text-orange-500 animate-pulse" />
                                    <span className="text-[9px] font-semibold text-orange-700">Migration Agent Active</span>
                                 </div>
                              </div>
                              
                              <div className="flex items-center justify-between relative px-4 py-2 bg-white/50 rounded-lg border border-slate-100">
                                 {/* Source */}
                                 <div className="flex flex-col items-center gap-1">
                                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">
                                       TBL
                                    </div>
                                    <span className="text-[8px] text-slate-400">Legacy BI</span>
                                 </div>

                                 {/* Animated Flow */}
                                 <div className="flex-1 px-4 flex flex-col items-center relative">
                                    <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                                       <motion.div 
                                          initial={{ x: '-100%' }}
                                          animate={{ x: '100%' }}
                                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                          className="w-1/2 h-full bg-orange-500 rounded-full"
                                       />
                                    </div>
                                    <div className="absolute -top-3 bg-white px-2 py-0.5 rounded-full border border-orange-100 shadow-sm flex items-center gap-1">
                                       <span className="text-[8px] font-medium text-orange-600">Auto-Mapping</span>
                                    </div>
                                 </div>

                                 {/* Target */}
                                 <div className="flex flex-col items-center gap-1">
                                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-[8px] font-bold text-orange-600">
                                       PBI
                                    </div>
                                    <span className="text-[8px] text-slate-400">PowerBI</span>
                                 </div>
                              </div>
                           </div>

                           {/* Split Row */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              
                              {/* 2. Assist BI: Admin Copilot & Scheduler */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-2 relative group overflow-hidden">
                                 <div className="absolute inset-0 bg-amber-50/30 -z-10 group-hover:bg-amber-50/50 transition-colors" />
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-amber-100 rounded-lg">
                                          <WrenchScrewdriverIcon className="w-3.5 h-3.5 text-amber-600" />
                                       </div>
                                       <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Assist BI</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-amber-100">
                                       <BoltIcon className="w-2.5 h-2.5 text-amber-500" />
                                       <span className="text-[8px] font-medium text-amber-600">Active</span>
                                    </div>
                                 </div>
                                 
                                 <div className="flex-1 flex flex-col gap-1.5">
                                    {/* Agent 1: Resource Optimizer */}
                                    <div className="bg-white/80 rounded-lg p-1.5 border border-white/60 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center border border-amber-100">
                                          <CpuChipIcon className="w-3 h-3 text-amber-600" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="flex justify-between items-center">
                                             <span className="text-[9px] font-bold text-slate-700">Admin Copilot</span>
                                             <span className="text-[8px] text-emerald-600 font-bold">+45% Perf</span>
                                          </div>
                                          <div className="h-1 w-full bg-slate-100 rounded-full mt-1">
                                             <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
                                          </div>
                                       </div>
                                    </div>

                                    {/* Agent 2: Smart Scheduler */}
                                    <div className="bg-white/80 rounded-lg p-1.5 border border-white/60 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center border border-amber-100">
                                          <ClockIcon className="w-3 h-3 text-amber-600" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="text-[9px] font-bold text-slate-700">Smart Scheduler</div>
                                          <div className="flex items-center gap-1 text-[8px] text-slate-500">
                                             <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                                             Rebalancing 12 Jobs
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* 3. MR Craft: Data Stewardship & Sentinel */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-2 relative group overflow-hidden">
                                 <div className="absolute inset-0 bg-yellow-50/30 -z-10 group-hover:bg-yellow-50/50 transition-colors" />
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-yellow-100 rounded-lg">
                                          <CircleStackIcon className="w-3.5 h-3.5 text-yellow-600" />
                                       </div>
                                       <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">MR Craft</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-yellow-100">
                                       <ShieldCheckIcon className="w-2.5 h-2.5 text-yellow-500" />
                                       <span className="text-[8px] font-medium text-yellow-600">Guarded</span>
                                    </div>
                                 </div>

                                 <div className="flex-1 flex flex-col gap-1.5">
                                    {/* Agent 1: Data Steward */}
                                    <div className="bg-white/80 rounded-lg p-1.5 border border-white/60 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-yellow-50 flex items-center justify-center border border-yellow-100">
                                          <UserGroupIcon className="w-3 h-3 text-yellow-600" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="flex justify-between items-center">
                                             <span className="text-[9px] font-bold text-slate-700">Data Steward AI</span>
                                             <span className="text-[8px] text-slate-400">Auto-Merge</span>
                                          </div>
                                          <div className="flex gap-1 mt-0.5">
                                             <span className="text-[8px] bg-emerald-50 text-emerald-600 px-1 rounded border border-emerald-100">2.4k Cleaned</span>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Agent 2: Quality Sentinel */}
                                    <div className="bg-white/80 rounded-lg p-1.5 border border-white/60 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-yellow-50 flex items-center justify-center border border-yellow-100">
                                          <MagnifyingGlassIcon className="w-3 h-3 text-yellow-600" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="text-[9px] font-bold text-slate-700">Quality Sentinel</div>
                                          <div className="flex items-center gap-1 text-[8px] text-slate-500">
                                             <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                                             1 Anomaly Blocked
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           {/* Bottom AI Governance Layer */}
                           <div className="bg-slate-900 rounded-xl p-2 border border-slate-800 flex items-center justify-between shadow-md">
                              <div className="flex items-center gap-2">
                                 <div className="p-1 bg-slate-800 rounded">
                                    <LockClosedIcon className="w-3 h-3 text-indigo-400" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-indigo-100">AI Governance Layer</span>
                                    <span className="text-[8px] text-slate-400">Monitoring All Agents</span>
                                 </div>
                              </div>
                              <div className="flex gap-1">
                                 <div className="h-1 w-6 bg-emerald-500 rounded-full animate-pulse" />
                                 <div className="h-1 w-1 bg-emerald-500 rounded-full" />
                                 <div className="h-1 w-1 bg-emerald-500 rounded-full" />
                              </div>
                           </div>

                        </div>
                      )}

                      {/* 5. COGNITEST (AI Quality Agent Swarm) */}
                      {current.id === 'cognitest' && (
                        <div className="flex flex-col h-full gap-3 text-slate-800">
                           
                           {/* 1. Header: Fleet Status */}
                           <div className="flex justify-between items-center px-1">
                              <div className="flex items-center gap-2">
                                 <div className="p-1.5 bg-teal-100 rounded-lg">
                                    <BeakerIcon className="w-3.5 h-3.5 text-teal-600" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">AI Quality Fleet</span>
                              </div>
                              <div className="flex gap-2">
                                 <div className="flex items-center gap-1.5 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                    <span className="text-[9px] font-semibold text-teal-700">5 Agents Active</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 bg-white/50 px-2 py-0.5 rounded-full border border-slate-200">
                                    <span className="text-[9px] font-mono text-slate-500">Build #8921</span>
                                 </div>
                              </div>
                           </div>

                           {/* 2. Agent Grid (Top Half) */}
                           <div className="grid grid-cols-2 gap-2 flex-1">
                              {/* Test Generator Agent */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 relative group hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600"><DocumentTextIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Test Generator Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100">GenAI</span>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Generating Scenarios...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-indigo-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Regression Test Agent */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 relative group hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-teal-50 rounded-lg text-teal-600"><CommandLineIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Regression Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-teal-50 text-teal-600 px-1.5 py-0.5 rounded border border-teal-100">Self-Heal</span>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Fixing 3 Selectors...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-teal-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Security Test Agent */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 relative group hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-rose-50 rounded-lg text-rose-600"><ShieldCheckIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Security Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded border border-rose-100">SAST/DAST</span>
                                 </div>
                                 <div className="flex gap-2 mt-1">
                                    <div className="flex flex-col items-center bg-white border border-rose-100 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-rose-600">0</span>
                                       <span className="text-[6px] text-slate-400 uppercase">Critical</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-white border border-slate-100 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-slate-600">12</span>
                                       <span className="text-[6px] text-slate-400 uppercase">Low</span>
                                    </div>
                                 </div>
                              </div>

                              {/* Performance Test Agent */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 relative group hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600"><ArrowTrendingUpIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Performance Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">Load</span>
                                 </div>
                                 <div className="flex gap-2 mt-1">
                                    <div className="flex flex-col items-center bg-white border border-blue-100 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-blue-600">12k</span>
                                       <span className="text-[6px] text-slate-400 uppercase">Users</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-white border border-blue-100 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-blue-600">28ms</span>
                                       <span className="text-[6px] text-slate-400 uppercase">Latency</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* 3. CI/CD Lifecycle Pipeline (Bottom Half) */}
                           <div className="bg-white/50 rounded-xl border border-white/60 p-3 shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                 <ServerIcon className="w-3 h-3 text-slate-400" />
                                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Continuous Delivery Pipeline</span>
                              </div>
                              <div className="relative flex items-center justify-between px-2 py-2">
                                 {/* Pipeline Line */}
                                 <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 -z-10" />
                                 <motion.div 
                                    className="absolute left-0 top-1/2 h-0.5 bg-teal-500 -z-10" 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                 />

                                 {/* Pipeline Stages */}
                                 {[
                                    { name: 'Code', icon: CodeBracketIcon, status: 'done' },
                                    { name: 'Build', icon: CircleStackIcon, status: 'done' },
                                    { name: 'Test', icon: BeakerIcon, status: 'active' },
                                    { name: 'Secure', icon: ShieldCheckIcon, status: 'pending' },
                                    { name: 'Deploy', icon: CloudIcon, status: 'pending' }
                                 ].map((stage, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-100 shadow-sm z-10">
                                       <div className={`w-5 h-5 rounded flex items-center justify-center ${
                                          stage.status === 'active' ? 'bg-teal-500 text-white animate-pulse' : 
                                          stage.status === 'done' ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'
                                       }`}>
                                          <stage.icon className="w-3 h-3" />
                                       </div>
                                       <span className={`text-[7px] font-semibold ${stage.status === 'active' ? 'text-teal-700' : 'text-slate-500'}`}>{stage.name}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                        </div>
                      )}

                      {/* 6. COGNIVIBE (Productivity Metrics) */}
                      {current.id === 'cognivibe' && (
                        <div className="flex flex-col h-full gap-3 text-slate-800">
                           
                           {/* Header: Context */}
                           <div className="bg-white/60 rounded-xl p-3 border border-white/60 shadow-sm">
                              <div className="flex items-center gap-2 mb-1">
                                 <div className="p-1.5 bg-fuchsia-50/50 rounded-lg">
                                    <SparklesIcon className="w-3.5 h-3.5 text-fuchsia-500" />
                                 </div>
                                 <h3 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">AI-Powered SDLC</h3>
                              </div>
                              <p className="text-[9px] text-slate-600 leading-relaxed">
                                 Our AI powered SDLC framework where we leverage AI cautiously and fastrack the development seamlessly and ahead of time and ship deliverables faster.
                              </p>
                           </div>

                           {/* Agents Grid */}
                           <div className="grid grid-cols-2 gap-2 flex-1">
                              {/* Agent 1: Strategy */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-fuchsia-50/50 rounded-lg text-fuchsia-500"><LightBulbIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Strategy Agent</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Aligning Goals...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-fuchsia-400 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 2: Development */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-violet-50/50 rounded-lg text-violet-500"><BoltIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Velocity Agent</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Fast-tracking Dev...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-violet-400 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 3: Risk/Caution */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-slate-50 rounded-lg text-slate-500"><ScaleIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Risk Sentinel</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Cautious Validation...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-slate-400 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 4: Delivery */}
                              <div className="bg-white/60 rounded-xl p-2.5 border border-white/60 shadow-sm flex flex-col gap-1 hover:bg-white/80 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-fuchsia-50/50 rounded-lg text-fuchsia-500"><CloudIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-slate-700">Delivery Pilot</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-slate-500 mt-1">Shipping Faster...</div>
                                 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 2.5, repeat: Infinity }} className="h-full bg-fuchsia-400 rounded-full" />
                                 </div>
                              </div>
                           </div>

                           {/* Metrics Footer */}
                           <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white/40 p-2 rounded-xl border border-fuchsia-50 shadow-sm flex flex-col items-center justify-center">
                                 <div className="text-xl font-bold text-slate-800">3x</div>
                                 <div className="text-[8px] text-slate-500 uppercase tracking-wide">Faster Delivery</div>
                              </div>
                              <div className="bg-white/40 p-2 rounded-xl border border-violet-50 shadow-sm flex flex-col items-center justify-center">
                                 <div className="text-xl font-bold text-slate-800">40%</div>
                                 <div className="text-[8px] text-slate-500 uppercase tracking-wide">Cost Savings</div>
                              </div>
                           </div>
                        </div>
                      )}

                    </div>

                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CleanHero
