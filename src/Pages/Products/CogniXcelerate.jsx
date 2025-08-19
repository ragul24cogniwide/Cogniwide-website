import React, { useState, useEffect } from 'react';
import { Activity, BarChart3, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const CogniXcellerate = () => {
  const [activeWorkflows, setActiveWorkflows] = useState(247);
  const [uptime, setUptime] = useState(99.9);
  const [avgResponse, setAvgResponse] = useState(2.3);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflows(prev => prev + Math.floor(Math.random() * 3) - 1);
      setUptime(prev => Math.min(100, prev + (Math.random() - 0.5) * 0.1));
      setAvgResponse(prev => Math.max(1, prev + (Math.random() - 0.5) * 0.2));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const Dashboard = () => (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">CogniXcellerate Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Active Workflows */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-300 text-lg font-medium">Active Workflows</span>
            <span className="text-3xl font-bold text-cyan-400">{activeWorkflows}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-full"></div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">{uptime.toFixed(1)}%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">{avgResponse.toFixed(1)}s</div>
            <div className="text-gray-400 text-sm">Avg Response</div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-300">Customer onboarding completed</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-300">Invoice processing automated</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-300">Compliance check initiated</span>
          </div>
        </div>
      </div>
    </div>
  );

  const roadmapSteps = [
    {
      title: "Discovery & Planning",
      desc: "Comprehensive assessment of current workflows and system architecture to design optimal integration strategy.",
      duration: "Week 1-2",
    },
    {
      title: "Environment Setup",
      desc: "Configure development and staging environments with security protocols and integration endpoints.",
      duration: "Week 3-4",
    },
    {
      title: "Core Integration",
      desc: "Implement core workflow orchestration features and establish connections with existing systems.",
      duration: "Week 5-8",
    },
    {
      title: "Testing & Optimization",
      desc: "Comprehensive testing of all workflows with performance optimization and user acceptance testing.",
      duration: "Week 9-10",
    },
    {
      title: "Production Deployment",
      desc: "Phased rollout to production environment with monitoring, training, and ongoing support.",
      duration: "Week 11-12",
    },
  ];

  const caseStudies = [
    {
      icon: "TC",
      name: "Global Telecom Corp",
      subtitle: "Fortune 500 Telecommunications",
      challenge:
        "Manual customer onboarding process taking 14 days with 23% error rate across multiple legacy systems.",
      solution:
        "Implemented CogniXcellerate to orchestrate end-to-end customer onboarding with intelligent validation and routing.",
      metrics: [
        { label: "Onboarding Time", value: "2 Days" },
        { label: "Error Rate", value: "1.2%" },
        { label: "Annual Savings", value: "$3.2M" }
      ],
      quote:
        "\"CogniXcellerate transformed our customer onboarding from a 14-day manual nightmare to a 2-day automated experience. The ROI was evident within the first quarter.\"",
      person: "Sarah Chen – CTO, Global Telecom Corp"
    },
    {
      icon: "PF",
      name: "Premier Financial Services",
      subtitle: "Regional Banking Institution",
      challenge:
        "Loan approval process involving 8 departments with average 21-day processing time and compliance bottlenecks.",
      solution:
        "Deployed CogniXcellerate for intelligent loan processing with automated compliance checks and risk assessment.",
      metrics: [
        { label: "Processing Time", value: "5 Days" },
        { label: "Compliance Rate", value: "94%" },
        { label: "Annual Savings", value: "$1.8M" }
      ],
      quote:
        "\"The intelligent orchestration capabilities reduced our loan processing time by 76% while improving compliance accuracy. Our customers are delighted with the faster service.\"",
      person: "Michael Rodriguez – VP Operations, Premier Financial"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-2">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Flagship AI Orchestration Platform</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className="bg-clip-text text-transparent animate-fade-in"
                style={{
                  backgroundImage: "linear-gradient(var(--color-purpletext), var(--color-purpletext))"
                }}
              >
                CogniXcellerate
              </span>
              <br />
              <span className="text-gray-900">Intelligent</span>
              <br />
              <span className="text-gray-900">Workflow</span>
              <br />
              <span className="text-gray-900">Orchestration</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            The premier AI orchestration platform that intelligently coordinates complex workflows,
            automates decision-making processes, and delivers measurable ROI through adaptive
            learning algorithms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-600 hover:to-blue-700"  style={{
    backgroundImage: "linear-gradient(var(--color-purpletext), var(--color-purpletext))"
  }}>
              Initiate Innovation → Start POC
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Smart Analytics</div>
                <div className="text-sm text-gray-600">Real-time insights</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Auto Scaling</div>
                <div className="text-sm text-gray-600">Dynamic resources</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard */}
        <div className="lg:pl-8">
          <Dashboard />
        </div>
      </div>

      {/* Additional Dashboard Section for Mobile */}
      <div className="mt-16 lg:hidden">
        <Dashboard />
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
          <div className="text-gray-600">Workflow Efficiency</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">70%</div>
          <div className="text-gray-600">Time Reduction</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>
    </div>

    {/* Background Elements */}
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>

    {/* Technical Architecture Section */}
    <section className="bg-background py-12 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
      Technical Architecture
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* API Integration Card */}
      <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-800">
        <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4">
          API Integration
        </h3>
        <pre className="bg-gray-950 text-gray-100 rounded-xl p-3 sm:p-4 overflow-auto text-xs sm:text-sm font-mono">{`// Initialize CogniXcellerate SDK
const cogni = new CogniXcellerate({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create workflow
const workflow = await cogni.workflows.create({
  name: 'Customer Onboarding',
  triggers: ['form_submission'],
  actions: ['validate', 'process', 'notify']
});`}</pre>
        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-gray-300 text-sm sm:text-base">RESTful API with GraphQL support</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-gray-300 text-sm sm:text-base">Real-time WebSocket connections</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-gray-300 text-sm sm:text-base">OAuth 2.0 and SAML authentication</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-gray-300 text-sm sm:text-base">Enterprise-grade security</span>
          </li>
        </ul>
      </div>

      {/* System Architecture */}
      <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-800">
        <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4">
          System Architecture
        </h3>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Presentation Layer</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">Web UI</div>
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">Mobile</div>
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">API</div>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Business Logic</div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">Workflow Engine</div>
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">AI Orchestrator</div>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Data Layer</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">PostgreSQL</div>
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">Redis</div>
              <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center text-gray-200 text-sm">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Core Capabilities Section */}
<section className="bg-background py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
      Core Capabilities
    </h2>

    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
      Discover the powerful features that make CogniXcellerate the leading AI orchestration platform
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">⚙️</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Intelligent Orchestration</h3>
        <p className="text-gray-400 mb-4">
          Automatically coordinate complex workflows across multiple systems with AI-driven decision making and adaptive routing.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Dynamic workflow adaptation</li>
          <li>• Multi-system integration</li>
          <li>• Real-time monitoring</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">📊</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
        <p className="text-gray-400 mb-4">
          Leverage machine learning algorithms to predict workflow bottlenecks and optimize resource allocation proactively.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Bottleneck prediction</li>
          <li>• Resource optimization</li>
          <li>• Performance forecasting</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🤖</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Adaptive Learning</h3>
        <p className="text-gray-400 mb-4">
          Continuously improve workflow efficiency through machine learning that adapts to changing business patterns and requirements.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Pattern recognition</li>
          <li>• Continuous optimization</li>
          <li>• Self-improving algorithms</li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">🔒</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
        <p className="text-gray-400 mb-4">
          Built-in security framework with end-to-end encryption, audit trails, and compliance management for enterprise requirements.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• End-to-end encryption</li>
          <li>• Comprehensive audit trails</li>
          <li>• Compliance automation</li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">📡</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
        <p className="text-gray-400 mb-4">
          Comprehensive monitoring dashboard with real-time alerts, performance metrics, and detailed analytics for complete visibility.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Live performance metrics</li>
          <li>• Intelligent alerting</li>
          <li>• Custom dashboards</li>
        </ul>
      </div>

      {/* Card 6 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl">☁️</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Scalable Infrastructure</h3>
        <p className="text-gray-400 mb-4">
          Cloud-native architecture that automatically scales to handle increasing workloads while maintaining optimal performance.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Auto-scaling capabilities</li>
          <li>• Load balancing</li>
          <li>• High availability</li>
        </ul>
      </div>
    </div>
  </div>
</section>


{/* Implemenation roadmap */}
<section className="bg-background py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-1 text-center">
        Implementation Roadmap
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Structured deployment process ensuring smooth integration with your existing systems
      </p>
      {/* Timeline */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple z-0" style={{minHeight: "420px"}}/>
        {/* Steps */}
        {roadmapSteps.map((step, idx) => (
          <div
            key={idx}
            className={`relative w-full flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} items-center mb-12`}
          >
            <div
              className={`w-full md:w-2/5 bg-white rounded-lg shadow-lg px-6 py-5 z-10 ${
                idx % 2 === 0
                  ? "ml-0 md:ml-8"
                  : "mr-0 md:mr-8"
              }`}
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700 mb-2">{step.desc}</p>
              <span className="block text-purple font-semibold">{step.duration}</span>
            </div>
            {/* Circle Marker & step number */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="rounded-full bg-purple text-white font-bold flex justify-center items-center w-8 h-8 border-4 border-white shadow-lg">
                {idx + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Customer Success Stories */}
    <section className="px-4 py-12 bg-background  flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold  mb-2 text-center" >
        Customer Success Stories
      </h2>
      <p className="text-gray-500 max-w-xl mb-10 text-center">
        Real implementations, measurable results, and transformative outcomes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {caseStudies.map((c, i) => (
          <div
            key={c.name}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className=" rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold text-white" style={{
    backgroundImage: "linear-gradient(var(--color-purpletext), var(--color-purpletext))"
  }}>
                {c.icon}
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">{c.name}</div>
                <div className="text-gray-500 text-sm">{c.subtitle}</div>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-1">Challenge</p>
              <p className="text-gray-600 text-sm">{c.challenge}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-1">Solution</p>
              <p className="text-gray-600 text-sm">{c.solution}</p>
            </div>
            <div className="flex flex-wrap gap-6 mb-4">
              {c.metrics.map((m) => (
                <div key={m.label} className="flex flex-col text-center">
                  <span className="font-bold text-purpletext text-xl">
                    {m.value}
                  </span>
                  <span className="text-xs text-gray-500">{m.label}</span>
                </div>
              ))}
            </div>
            <blockquote className="text-gray-700 italic text-sm border-l-4 border-purpletext pl-4 mb-2">
              {c.quote}
            </blockquote>
            <span className="text-xs text-gray-400">{c.person}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Portal Integration */}
    <section className="px-4 py-16 bg-background text-gray-900 flex flex-col items-center">
    {/* Headings */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
      Portal Integration
    </h2>
    <p className="text-gray-500 text-center mb-12 max-w-2xl">
      Experience CogniXcellerate through our interactive demonstration portal
    </p>
    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
      {/* Portal - Live Demo */}
      <div className="flex flex-col gap-6">
        {/* Section Title */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Portal - Live Demo</span>
          <span className="text-purple flex items-center gap-1 ml-4">
            <span className="inline-block w-2 h-2 rounded-full bg-purple"></span>
            <span className="text-sm font-medium">Interactive</span>
          </span>
        </div>
        {/* Workflow Designer */}
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Workflow Designer</span>
            <button className="text-purple rounded-full w-7 h-7 flex items-center justify-center bg-gray-800">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {["Start", "Process", "Validate", "End"].map(b => (
              <button
                key={b}
                className="flex-1 py-2 bg-purple hover:bg-sky-500 rounded-md font-semibold text-white transition text-sm"
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        {/* Performance Analytics */}
        <div className="bg-gray-900 rounded-xl px-6 py-4 flex flex-col gap-1">
          <div className="flex items-center justify-between text-sm pb-1">
            <span className="text-white font-medium">Performance Analytics</span>
            <span className="text-white font-bold">+23% this month</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-purple h-2 rounded-full w-3/4"></div>
          </div>
        </div>
        {/* API Integrations */}
        <div className="bg-gray-900 rounded-xl px-6 py-4 flex justify-between items-center text-sm">
          <span className="text-white font-medium">API Integrations</span>
          <span className="text-white font-bold">12 Active</span>
        </div>
      </div>
      {/* Interactive Experience */}
      <div>
        <div className="mb-6">
          <span className="text-2xl font-bold">Interactive Experience</span>
          <p className="text-gray-500 mt-2">
            Explore CogniXcellerate's capabilities through our comprehensive demonstration portal with real-time simulations and guided tutorials.
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {/* Item */}
          <div className="flex items-start gap-4">
            <div className="bg-purple p-2 rounded-lg">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold">Workflow Designer</div>
              <div className="text-gray-400 text-sm">Drag-and-drop interface for creating complex workflows</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple p-2 rounded-lg">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 13h4v3H4v-3zm6 0h6v3h-6v-3zM3 9h14v2H3V9zm1-4h12v2H4V5z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold">Real-time Analytics</div>
              <div className="text-gray-400 text-sm">Live performance metrics and optimization insights</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple p-2 rounded-lg">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2"/>
                <path d="M8 9h8M8 15h8M8 12h8" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold">API Playground</div>
              <div className="text-gray-400 text-sm">Test integrations with interactive API documentation</div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md bg-purple text-black font-bold shadow-purple shadow-md hover:bg-sky-500 focus:outline-none transition focus:ring-2 focus:ring-sky-300">
            Access Xcellerate Portal
          </button>
          <button className="px-5 py-2 rounded-md bg-transparent border border-gray-400 text-black font-bold hover:border-sky-400 focus:outline-none transition">
            Schedule Guided Demo
          </button>
        </div>
      </div>
    </div>
  </section>

    {/* why we choose us */}
    <section className="bg-background py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl text-gray-900 font-bold text-center mb-3">
        Why Choose CogniXcellerate
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
        See how we compare against traditional automation platforms
      </p>

      <div className="overflow-x-auto mb-10 w-full max-w-4xl">
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-amber-100">
            <tr>
              <th className="px-6 py-3 text-start font-semibold text-gray-800">Feature</th>
              <th className="px-6 py-3 text-start font-semibold text-purple">CogniXcellerate</th>
              <th className="px-6 py-3 text-start font-semibold text-gray-800">Traditional RPA</th>
              <th className="px-6 py-3 text-start font-semibold text-gray-800">Legacy BPM</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b">
              <td className="px-6 py-4">AI-Powered Decision Making</td>
              <td className="px-6 py-4 text-green-600 font-semibold">✓</td>
              <td className="px-6 py-4 text-red-500 font-bold">✗</td>
              <td className="px-6 py-4 text-red-500 font-bold">✗</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">Adaptive Learning</td>
              <td className="px-6 py-4 text-green-600 font-semibold">✓</td>
              <td className="px-6 py-4">Limited</td>
              <td className="px-6 py-4 text-red-500 font-bold">✗</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">Real-time Orchestration</td>
              <td className="px-6 py-4 text-green-600 font-semibold">✓</td>
              <td className="px-6 py-4">Partial</td>
              <td className="px-6 py-4">Basic</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">Implementation Time</td>
              <td className="px-6 py-4 text-purple font-semibold">6-12 weeks</td>
              <td className="px-6 py-4">3-6 months</td>
              <td className="px-6 py-4">6-18 months</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Total Cost of Ownership</td>
              <td className="px-6 py-4 text-green-600 font-semibold">Low</td>
              <td className="px-6 py-4">Medium</td>
              <td className="px-6 py-4">High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Ready to <span className="text-purple">Transform Your Workflows??</span>
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join hundreds of enterprises already benefiting from CogniXcellerate's intelligent orchestration platform.
          Start your transformation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className=" text-white font-semibold py-2 px-6 rounded shadow hover:bg-blue-800 transition bg-purple">
            Initiate Innovation → Start POC
          </button>
          <button className="bg-white border border-blue-700 text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-blue-100 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default CogniXcellerate;