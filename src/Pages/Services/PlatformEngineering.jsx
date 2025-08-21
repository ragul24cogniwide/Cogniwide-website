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

// section2
const cards = [
  {
    icon: (
      <div className="bg-cyan-400 rounded-2xl unded-full w-10 h-10 flex items-center justify-center">
        <svg width="22" height="22" fill="none">
          <rect width="22" height="22" rx="5" fill="#fff" />
          <path
            d="M7 11h8M11 7v8"
            stroke="#06b6d4"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
    title: "Infrastructure Orchestration",
    desc:
      "Cloud-native infrastructure design and orchestration with intelligent resource optimization and automated scaling capabilities.",
    details: (
      <>
        <div className="font-semibold mb-2">Key Capabilities</div>
        <ul className="list-disc list-inside text-xs mb-3 text-black">
          <li>Kubernetes orchestration with custom operators</li>
          <li>Multi-cloud deployment strategies</li>
          <li>Infrastructure as Code (Terraform/Pulumi)</li>
          <li>Automated disaster recovery</li>
        </ul>
        <div className="font-semibold mb-2">Kubernetes Deployment</div>
      </>
    ),
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: cogni-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: cogni-api
  template:
    metadata:
      labels:
        app: cogni-api
    spec:
      containers:
        - name: api
          image: cogniplatform/api:v2.1.3
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"`,
    stats: [
      { label: "99.9%", text: "Uptime SLA" },
      { label: "40%", text: "Cost Reduction" },
    ],
  },
  {
    icon: (
      <div className="bg-cyan-400 rounded-full w-10 h-10 flex items-center justify-center">
        <svg width="22" height="22" fill="none">
          <rect width="22" height="22" rx="5" fill="#fff" />
          <path
            d="M5 14h12M11 5v12"
            stroke="#06b6d4"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
    title: "DevOps Automation",
    desc:
      "End-to-end automation of development workflows with intelligent monitoring, testing, and deployment pipelines.",
    details: (
      <>
        <div className="font-semibold mb-2">Automated Pipeline Stages</div>
        <ul className="text-xs mb-2 text-black/80">
          <li>
            <span className="inline-block w-32">Code Commit</span>
            <span className="text-green-400">PASSED</span>
          </li>
          <li>
            <span className="inline-block w-32">Build & Package</span>
            <span className="text-green-400">PASSED</span>
          </li>
          <li>
            <span className="inline-block w-32">Deploy to Staging</span>
            <span className="text-yellow-400">RUNNING</span>
          </li>
        </ul>
      </>
    ),
    code: `pipeline:
  stages:
    - code_commit
    - build_package
    - deploy_staging
  notifications:
    on_failure: email
    on_success: slack`,
    stats: [
      { label: "85%", text: "Faster Deployments" },
      { label: "12x", text: "Daily Releases" },
    ],
  },
  {
    icon: (
      <div className="bg-cyan-400 rounded-full w-10 h-10 flex items-center justify-center">
        <svg width="22" height="22" fill="none">
          <rect width="22" height="22" rx="5" fill="#fff" />
          <path
            d="M11 5v12M5 11h12"
            stroke="#06b6d4"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
    title: "Continuous Integration/Deployment",
    desc:
      "Robust CI/CD pipelines with automated testing, security scanning, and intelligent deployment strategies.",
    details: (
      <>
        <div className="font-semibold mb-2">Pipeline Health</div>
        <ul className="text-xs mb-4 text-black">
          <li>
            Success Rate <span className="ml-2 text-purpletext">94%</span>
          </li>
          <li>
            Avg. Build Time <span className="ml-2 text-purpletext">45s</span>
          </li>
          <li>
            Tests Passed <span className="ml-2 text-purpletext">2,847/2,891</span>
          </li>
          <li>
            Security Scans <span className="ml-2 text-purpletext">@ Critical Issues</span>
          </li>
        </ul>
      </>
    ),
    code: `ci_cd:
  test:
    coverage: 99.2%
    passed: 2847
    failed: 44
  build:
    avg_time: 2.5min
  reliability: 99.2%`,
    stats: [
      { label: "2.5min", text: "Avg Build Time" },
      { label: "99.2%", text: "Pipeline Reliability" },
    ],
  },
];

// section3
const colors = [
  "bg-purpletext",      // Auth Service
  "bg-fuchsiatext",     // AI Engine
  "bg-bluetext",        // Data Service
  "bg-cyantext",        // Load Balancer
  "bg-pinktext",        // API Gateway
  "bg-indigo-300",      // PostgreSQL
  "bg-emerald-300",     // Redis Cache
];

const boxes = [
  { label: "Auth Service", desc: "", color: colors[0] },
  { label: "AI Engine", desc: "", color: colors[1] },
  { label: "Data Service", desc: "", color: colors },
  { label: "Load Balancer", desc: "", color: colors },
  { label: "API Gateway", desc: "", color: colors },
  { label: "PostgreSQL", desc: "", color: colors },
  { label: "Redis Cache", desc: "", color: colors },
];

function AnimatedBox({ label, color, small = false }) {
  return (
    <div
      className={`rounded-lg transition-all duration-300 ease-in-out 
        ${color} shadow-md flex items-center justify-center text-white font-semibold
        ${small ? "w-32 h-10 text-xs" : "w-40 h-12 text-base"}
        hover:text-purple outline-none focus:text-purple
        animate-fadeIn`}
      tabIndex={0} // for focus accessibility
    >
      {label}
    </div>
  );
}

const statsTelecom = [
  { label: "Deployment Speed", value: "24x Faster", color: "bg-purpletext" },
  { label: "System Uptime", value: "99.97%", color: "bg-fuchsiatext" },
  { label: "Cost Reduction", value: "45%", color: "bg-bluetext" },
];

const statsFinance = [
  { label: "Daily Deployments", value: "50+", color: "bg-purpletext" },
  { label: "Zero Downtime", value: "100%", color: "bg-cyantext" },
  { label: "Security Compliance", value: "SOC 2 Type II", color: "bg-pinktext" },
];

// White card with fade-in animation
function FadeInCard({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-[270px]
      transition-all animate-fadeIn
      flex flex-col justify-between
      ">
      {children}
    </div>
  );
}

// Statistic colored box, highlight on hover/focus
function StatBox({ label, value, color }) {
  return (
    <div
      tabIndex={0}
      className={`rounded-lg ${color} px-3 py-2 w-max flex flex-col items-center
        text-gray-700 font-semibold text-xs shadow-md cursor-pointer transition-all duration-300
        hover:text-purple focus:text-purple outline-none animate-fadeIn`}
    >
      <span>{label}</span>
      <span className="text-base font-bold">{value}</span>
    </div>
  );
}

// CTA Button with glow effect and highlight
function GlowingButton({ children }) {
  return (
    <button
      className="mt-2 px-6 py-2 text-black font-semibold bg-white rounded-lg border border-purpletext
        transition-all duration-300 shadow-md
         focus:text-purple outline-none
        hover:shadow-cyan-400/80 hover:border-purpletext hover:bg-purpletext hover:text-white
        animate-fadeIn"
    >
      {children}
    </button>
  );
}

export default function PlatformEngineering() {
  const [highlightedBtn, setHighlightedBtn] = useState(null);
  const [highlightedFeature, setHighlightedFeature] = useState(null);
   const [showCodeAll, setShowCodeAll] = useState(false);
  const [highlighted, setHighlighted] = useState(false);


  return (
    <>
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

    {/* section2 */}
    <section className="bg-background py-8 px-3 min-h-screen flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-purpletext font-bold text-2xl md:text-3xl text-center mb-2">
          Comprehensive Platform Engineering Services
        </h2>
        <p className="text-gray-500 text-base text-center mb-7">
          Three core service areas designed to accelerate your AI platform deployment and ensure long-term success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scale-105">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className={`relative bg-white   rounded-xl p-5 flex flex-col justify-between
                transition-all duration-300
                ${highlighted ? "text-purple-500 shadow-2xl " : "text-gray-500 shadow-md"}
                hover:scale-105 hover:shadow-xl cursor-pointer`}
              onMouseEnter={() => setHighlighted(true)}
              onMouseLeave={() => setHighlighted(false)}
            >
              <div className="flex items-center gap-3 mb-3">{card.icon}
                <h3 className="font-bold text-base text-purple">{card.title}</h3>
              </div>
              <div className="text-sm mb-3">{card.desc}</div>
              {card.details}
              {/* Show Code button and code block */}
              <button
                onClick={() => setShowCodeAll(!showCodeAll)}
                className={`text-black hover:underline text-xs font-mono transition mb-2`}
              >
                Show Code {showCodeAll ? '▲' : '▼'}
              </button>
              {/* Code block, only if showCodeAll */}
              {showCodeAll && (
                <pre className="bg-gray-900 text-white text-xs font-mono rounded-lg p-3 mb-3 overflow-x-auto">
                  {card.code}
                </pre>
              )}
              {/* Stats & Learn More */}
              <div className="flex gap-4 items-center text-xs font-mono mb-3">
                {card.stats.map(s => (
                  <div key={s.label} className="text-purpletext font-bold">{s.label}
                    <span className="ml-1 text-black font-normal">{s.text}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-auto py-2 border-2 border-purpletext rounded-lg text-center text-purpletext font-semibold transition hover:bg-purpletext hover:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section3 */}
    <section className="bg-background min-h-screen flex flex-col px-2 py-8 items-center transition-all md:-mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4 transition-all">
        Technical Architecture & Implementation
      </h2>
      <p className="text-gray-500 text-center max-w-xl mb-8">
        Comprehensive technical documentation and architecture diagrams for solution architects and DevOps engineers
      </p>
      {/* Platform Architecture */}
      <div className="rounded-xl shadow-lg bg-black/80 p-3 md:p-7 flex flex-col w-full max-w-2xl md:max-w-3xl gap-4 transition-all">
        {/* Load Balancer & API Gateway */}
        <div className="flex flex-row gap-2 justify-center items-center">
          <AnimatedBox label="Load Balancer" color={colors[3]} />
          <AnimatedBox label="API Gateway" color={colors} />
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <AnimatedBox label="Auth Service" color={colors} />
          <AnimatedBox label="AI Engine" color={colors[1]} />
          <AnimatedBox label="Data Service" color={colors} />
        </div>
        {/* Third Row */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <AnimatedBox label="PostgreSQL" color={colors} small />
          <AnimatedBox label="Redis Cache" color={colors} small />
        </div>
        {/* Features List */}
        <ul className="text-white/80 mt-2 space-y-1 text-sm md:text-base pl-4">
          <li className="list-disc">Kubernetes-native deployment</li>
          <li className="list-disc">Microservices architecture</li>
          <li className="list-disc">Event-driven communication</li>
          <li className="list-disc">Distributed data management</li>
        </ul>
      </div>
      {/* Performance Benchmarks */}
      <div className="bg-black/70 rounded-lg mt-6 px-4 py-6 w-full max-w-md mx-auto flex justify-between">
        <div>
          <p className="font-semibold text-white">API Response Time</p>
          <span className="text-purple font-bold text-lg">&lt; 100ms</span>
        </div>
        <div>
          <p className="font-semibold text-white">Requests/Second</p>
          <span className="text-purple font-bold text-lg">10,000+</span>
        </div>
      </div>
    </section>


    {/* section4 */}
<section className="bg-background py-8 px-3 flex flex-col items-center transition-all -mt-24">
      {/* Title & Subtitle */}
      <h2 className="text-2xl md:text-4xl font-bold text-purple mb-2 transition-all">
        Technical Success Stories
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-xl">
        Real-world implementations showcasing technical achievements and measurable improvements
      </p>
      {/* Testimonials Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-stretch">
        {/* Global Telecom Provider */}
        <FadeInCard>
          <div className="flex gap-3 items-start">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Chen"
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <h3 className="font-bold text-lg text-black">Global Telecom Provider</h3>
              <p className="text-black text-sm">Infrastructure Modernization</p>
            </div>
          </div>
          <blockquote className="italic text-gray-700 mt-3 mb-2">
            "Cogniwide’s platform engineering team reduced our deployment time from 6 hours to 15 minutes while improving system reliability by 300%. The Loom portal gives us unprecedented visibility into our infrastructure."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            {statsTelecom.map((stat) => (
              <StatBox key={stat.label} label={stat.label} value={stat.value} color={stat.color} />
            ))}
          </div>
          <div className="mt-3 text-gray-900 text-sm">
            <span className="font-bold">Sarah Chen</span><br />
            CTO, TelecomGlobal
          </div>
        </FadeInCard>
        {/* Finance Institution */}
        <FadeInCard>
          <div>
            <div className="text-black font-semibold text-lg mb-1">Leading Financial Institution</div>
            <div className="text-black text-sm mb-2">DevOps Transformation</div>
            <blockquote className="italic text-gray-700">
              "The automated CI/CD pipeline implementation exceeded our expectations. We now deploy 50+ times per day with zero downtime, and the security scanning integration gives us complete confidence in our releases."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              {statsFinance.map((stat) => (
                <StatBox key={stat.label} label={stat.label} value={stat.value} color={stat.color} />
              ))}
            </div>
            <div className="mt-3 text-gray-900 text-sm">
              <span className="font-bold">Michael Rodriguez</span><br />
              VP Engineering, FinanceFirst
            </div>
          </div>
        </FadeInCard>
      </div>
      {/* CTA Section */}
      <div className="w-full max-w-3xl mt-12 mb-2 bg-transparent flex flex-col items-center">
        <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-2">
          Ready to <span className="text-purpletext">Transform Your Platform Engineering??</span>
        </h3>
        <p className="text-gray-500 text-center max-w-xl mb-4">
          Schedule a technical consultation with our platform engineering experts and discover how Cogniwide can accelerate your infrastructure deployment.
        </p>
        <GlowingButton>Schedule Technical Consultation</GlowingButton>
      </div>
    </section>
</>
  );
}
