import { ArrowDown } from "lucide-react";

const CogniLoom = () => {
  return (
    <section className="min-h-screen py-16  bg-background">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side */}
        <div className="flex-1">
        <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Intelligent Workflow Orchestration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-purple animate-fade-in">CogniLoom</span>
            <br />
            Weave Intelligence
            <br />
            Into Every Process
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl">
            Transform your enterprise operations with AI-powered workflow orchestration that seamlessly integrates disparate systems, automates complex processes, and adapts to changing business requirements in real-time.
          </p>
          <div className="flex gap-4 mb-10">
            <button className="px-6 py-2 font-semibold text-base rounded-md bg-transparent border-2 border-purple text-black shadow-purple shadow focus:outline-none transition hover:bg-purple hover:text-black hover:shadow-lg ring-1 ring-purple">
              Initiate Innovation → Start POC
            </button>
            <button className="px-6 py-2 font-semibold text-base rounded-md bg-[#23282d] text-white border border-gray-500 transition hover:border-sky-400">
              Schedule Demo
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mt-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-purple font-bold text-2xl">87%</span>
              <span className="text-gray-500 text-sm mt-1">Process Efficiency</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-purple font-bold text-2xl">65%</span>
              <span className="text-gray-500 text-sm mt-1">Cost Reduction</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-purple font-bold text-2xl">3x</span>
              <span className="text-gray-500 text-sm mt-1">Faster Deployment</span>
            </div>
          </div>
        </div>

        {/* Right Side (Feature Card) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#232427] rounded-2xl px-10 py-10 w-full max-w-md flex flex-col items-center justify-center gap-8 shadow-lg">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  {/* Icon */}
                  <svg width="28" height="28" fill="none" className="text-sky-400" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="9" width="6" height="6" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-white">Data Ingestion</span>
                  <div className="text-gray-400 text-sm leading-tight">
                    Multi-source data collection
                  </div>
                </div>
              </div>
              <ArrowDown className="text-sky-400 my-3 w-6 h-6" />
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  {/* Icon */}
                  <svg width="28" height="28" className="text-sky-400" fill="none" viewBox="0 0 24 24">
                    <rect x="6" y="5" width="12" height="14" stroke="currentColor" strokeWidth="2" rx="2" />
                    <path d="M9 3v4M15 3v4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-white">Process Automation</span>
                  <div className="text-gray-400 text-sm leading-tight">
                    Intelligent task routing
                  </div>
                </div>
              </div>
              <ArrowDown className="text-sky-400 my-3 w-6 h-6" />
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  {/* Icon */}
                  <svg width="28" height="28" className="text-sky-400" fill="none" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 9h8M8 15h8M8 12h8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-white">Real-time Analytics</span>
                  <div className="text-gray-400 text-sm leading-tight">
                    Performance monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CogniLoom;
