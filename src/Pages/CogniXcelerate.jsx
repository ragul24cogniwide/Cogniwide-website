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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Navigation */}
      {/* <nav className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">CogniVibe</span>
            <span className="text-xs text-gray-500 ml-1">™</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">Solutions</span>
            <span className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">Resources</span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Request a Demo
          </button>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Flagship AI Orchestration Platform</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
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
              The premier AI orchestration platform that intelligently coordinates complex workflows, automates decision-making processes, and delivers measurable ROI through adaptive learning algorithms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-600 hover:to-blue-700">
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
    </div>
  );
};

export default CogniXcellerate;