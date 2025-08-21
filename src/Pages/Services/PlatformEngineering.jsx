import React, { useState } from "react";

const features = [
  {
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-400">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="10" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="15" r="2" fill="currentColor" />
        </svg>
      </div>
    ),
    title: "Auto-Scaling",
    desc: "99.9% uptime"
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-400">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
          <path d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 7v10M16 7v10M12 10v4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    title: "CI/CD Pipeline",
    desc: "Automated deployment"
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-pink-400">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    title: "Security First",
    desc: "Zero-trust architecture"
  }
];

// Dashboard (right section)
const loomStats = {
  cpu: 67,
  memory: "4.2GB",
  pods: 24,
  deployments: "12/h",
  lastDeployment: "2 min ago",
  activities: [
    "14:31:15 Deployment completed: api-service-v2.1.3",
    "14:29:42 Auto-scaling triggered: web-tier +2 instances",
    "14:28:01 Health check passed: database cluster"
  ]
};

export default function PlatformEngineering() {
  const [highlightedBtn, setHighlightedBtn] = useState(null);
  const [highlightedFeature, setHighlightedFeature] = useState(null);

  return (
    <section className="w-full py-16 bg-background fade-in">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce-slow">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Platform Engineering Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-purpletext animate-fade-in">Enterprise-Grade</span>{" "}
            <span className="text-purpletext animate-fade-in">Platform Engineering</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            Build scalable, secure AI infrastructure with our comprehensive platform engineering services and integrated Loom portal for real-time monitoring and orchestration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className={`
                  flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow border
                  ${highlightedFeature === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-black"}
                  transition-all fade-in
                  hover:border-purple hover:text-purple hover:shadow-purple/40
                `}
                onMouseEnter={() => setHighlightedFeature(idx)}
                onMouseLeave={() => setHighlightedFeature(null)}
                onFocus={() => setHighlightedFeature(idx)}
                onBlur={() => setHighlightedFeature(null)}
                tabIndex={0}
              >
                {f.icon}
                <div>
                  <div className={`font-semibold ${highlightedFeature === idx ? "text-purple" : ""}`}>{f.title}</div>
                  <div className="text-xs text-gray-400">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-col sm:flex-row mt-2">
            <button
              className={`px-6 py-3 font-semibold text-base rounded-md border-2 
                ${highlightedBtn === "getstarted" ? "border-purple text-purple bg-purple/10 shadow-purple"
                : "border-purple text-purple bg-white shadow-purple"
                } shadow transition duration-200 focus:outline-none ring-1 ring-purple
                 hover:border-purple hover:shadow-purple hover:bg-purpletext hover:text-white`}
              onMouseEnter={() => setHighlightedBtn("getstarted")}
              onMouseLeave={() => setHighlightedBtn(null)}
            >
              Get Started
            </button>
            <button
              className={`px-6 py-3 font-semibold text-base rounded-md border-2 border-gray-300 bg-white text-gray-700 shadow transition
                hover:text-purple hover:border-purple
                ${highlightedBtn === "schedule" ? "border-purple text-purple bg-purple/10" : ""}`}
              onMouseEnter={() => setHighlightedBtn("schedule")}
              onMouseLeave={() => setHighlightedBtn(null)}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Loom Portal Mini-Dashboard */}
        <div className="flex-1 w-full flex justify-center">
          <div className="bg-background rounded-2xl shadow-xl border border-gray-200 px-6 py-5 w-full max-w-lg animate-fade-in">
            <div className="flex items-center justify-between mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-black">Loom Portal</div>
                  <div className="text-xs text-gray-500">Live Platform Monitoring</div>
                </div>
              </div>
              <div className="text-xs text-purple font-bold">LIVE</div>
            </div>
            {/* Stats */}
            <div className="mt-3 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-xs w-24">CPU Usage</span>
                <span className="text-purple text-xs font-semibold">{loomStats.cpu}%</span>
                <div className="flex-1 bg-gray-200 h-2 rounded-full ml-2">
                  <div className="bg-purple h-2 rounded-full" style={{width: `${loomStats.cpu}%`}} />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-xs w-24">Memory</span>
                <span className="text-purple text-xs font-semibold">{loomStats.memory}</span>
                <div className="flex-1 bg-gray-200 h-2 rounded-full ml-2">
                  <div className="bg-purple h-2 rounded-full" style={{width: `85%`}} />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-xs w-24">Active Pods</span>
                <span className="text-purple text-xs font-semibold">{loomStats.pods}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-700 text-xs w-24">Deployments</span>
                <span className="text-purple text-xs font-semibold">{loomStats.deployments}</span>
                <span className="text-gray-500 text-xs ml-2">Last: {loomStats.lastDeployment}</span>
              </div>
            </div>
            <hr className="my-3"/>
            <div className="font-semibold text-gray-700 pb-2 text-sm">Recent Activity</div>
            <ul className="text-xs space-y-1">
              {loomStats.activities.map((note,i) => (
                <li key={i} className="text-purple before:content-['•'] before:mr-2">{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    // section2


  );
}
