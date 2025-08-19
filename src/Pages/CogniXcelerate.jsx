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

  return (
    <div className="min-h-screen bg-amber-50">
    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
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
                style={{ backgroundImage: "var(--color-gradient-purple-orange)" }}
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
            <button className="text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-600 hover:to-blue-700"  style={{ backgroundImage: "var(--color-gradient-purple-orange)" }}>
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
    <section className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Technical Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* API Integration Card */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">API Integration</h3>
            <pre className="bg-gray-950 text-gray-100 rounded-xl p-4 overflow-auto text-sm font-mono">{`// Initialize CogniXcellerate SDK
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
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-gray-300">RESTful API with GraphQL support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-gray-300">Real-time WebSocket connections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-gray-300">OAuth 2.0 and SAML authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-gray-300">Enterprise-grade security</span>
              </li>
            </ul>
          </div>

          

          {/* System Architecture */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">System Architecture</h3>
            <div className="space-y-6">
              <div>
                <div className="text-gray-400 text-sm mb-2">Presentation Layer</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">Web UI</div>
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">Mobile</div>
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">API</div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Business Logic</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">Workflow Engine</div>
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">AI Orchestrator</div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Data Layer</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">PostgreSQL</div>
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">Redis</div>
                  <div className="bg-gray-800 px-4 py-3 rounded-lg text-center text-gray-200">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Core Capabilities Section */}
<section className="bg-amber-50 py-16">
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
<section className="bg-amber-50 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-1 text-center">
        Implementation Roadmap
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Structured deployment process ensuring smooth integration with your existing systems
      </p>
      {/* Timeline */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0" style={{minHeight: "420px"}}/>
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
              <span className="block text-blue-700 font-semibold">{step.duration}</span>
            </div>
            {/* Circle Marker & step number */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="rounded-full bg-blue-700 text-white font-bold flex justify-center items-center w-8 h-8 border-4 border-white shadow-lg">
                {idx + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Customer Success Stor
        </h3>
        <p className="text-gray-700">
          Real implementations, measurable results, and transformative outcomes
        </p>
      </div>
    </section>


    {/* why we choose us */}
    <section className="bg-amber-50 py-12 px-4 flex flex-col items-center">
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
              <th className="px-6 py-3 text-start font-semibold text-blue-700">CogniXcellerate</th>
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
              <td className="px-6 py-4 text-blue-700 font-semibold">6-12 weeks</td>
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
          Ready to <span className="text-blue-700">Transform Your Workflows??</span>
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join hundreds of enterprises already benefiting from CogniXcellerate's intelligent orchestration platform.
          Start your transformation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow hover:bg-blue-800 transition"  style={{ backgroundImage: "var(--color-gradient-purple-orange)" }}>
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