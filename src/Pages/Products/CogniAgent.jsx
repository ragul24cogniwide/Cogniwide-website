import React, { useState } from "react";
import bot from "../../assets/bot.png"; // (update path as needed)

const agentStats = {
  deployed: 12,
  completion: 98,
  avgResponse: 0.5,
  summary: [
    "Invoice Agent processed 50 docs",
    "Policy Review Agent flagged 3 issues",
    "Report Gen. Agent created 1 daily report",
  ],
};
const benefits = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <path d="M12 2v15m0 5v0m0-5l4.5-4.5M12 17l-4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      ),
      title: "Rapid Deployment",
      desc: "Deploy intelligent automation rapidly with our pre-built agents and intuitive configuration, significantly reducing time-to-value.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-400 to-cyan-500">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2l4-4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Enhanced Accuracy",
      desc: "Leverage advanced AI and machine learning to minimize human error, ensuring higher data quality and process precision.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-400 to-orange-400">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="5" y="10" width="14" height="6" rx="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 14h1M14 14h1" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Significant Cost Reduction",
      desc: "Automate repetitive tasks, reduce operational overhead, and reallocate human resources to more strategic initiatives.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-yellow-300">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <path d="M7 17V7m5 10V7m5 10V7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Scalability & Flexibility",
      desc: "Scale your automation efforts seamlessly to meet growing demands and adapt to evolving business requirements.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="6" y="10" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 4v6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="15" r="2" fill="currentColor"/>
          </svg>
        </div>
      ),
      title: "Seamless Integration",
      desc: "Integrate CogniAgent effortlessly with your existing enterprise systems and data sources.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-600 to-gray-800">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="5" y="10" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6v4" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="15" r="2" fill="currentColor"/>
          </svg>
        </div>
      ),
      title: "Enterprise-grade Security",
      desc: "Ensure data privacy and compliance with robust security features and audit capabilities.",
    },
  ];

  const agents = [
    {
      color: "bg-cyan-400",
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-400">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="6" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Invoice Processing Agent",
      desc: "Automated invoice extraction, validation, and approval workflows, reducing manual effort and errors.",
      bullets: [
        "Automated data extraction",
        "Intelligent validation rules",
        "Seamless ERP integration"
      ]
    },
    {
      color: "bg-blue-400",
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-400">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="6" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 12h4M12 10v4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Policy Review Agent",
      desc: "Intelligent policy analysis and compliance checking, ensuring adherence to regulatory standards.",
      bullets: [
        "Automated compliance checks",
        "Risk identification",
        "Version control & audit trails"
      ]
    },
    {
      color: "bg-pink-400",
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-400">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
            <rect x="6" y="5" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
            <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Report Generation Agent",
      desc: "Automated report creation with data visualization, ensuring timely and accurate insights.",
      bullets: [
        "Customizable report templates",
        "Automated data aggregation",
        "Scheduled report delivery"
      ]
    }
  ];

export default function CogniAgentSection() {
  const [highlightedBtn, setHighlightedBtn] = useState(null);
  const [highlightedMetric, setHighlightedMetric] = useState(null);
  const [highlighted, setHighlighted] = useState(null);


  return (
    <>
    <section className="w-full min-h-screen bg-background py-16 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full">
        <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow mb-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Plug-and-Play AI Agent Library</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-purpletext animate-fade-in">CogniAgent</span>
            <br />
            Intelligent Automation,
            <br />
            Simplified.
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl">
            A comprehensive library of pre-built AI agents for invoice processing, policy reviews, report generation & more. Deploy powerful automation in minutes.
          </p>
          <div className="flex gap-4 mb-8 flex-col sm:flex-row w-full max-w-xl">
            <button
              className={`px-6 py-3 font-semibold text-base rounded-md border-2 
                ${highlightedBtn === "explore" ? "border-purple text-purple bg-purple/10 shadow-purple"
                : "border-purpletext text-purpletext bg-transparent shadow-purple"
                } shadow focus:outline-none ring-1 ring-purple transition duration-200
                 hover:border-purple hover:shadow-purple hover:bg-purpletext hover:text-white`}
              onMouseEnter={() => setHighlightedBtn("explore")}
              onMouseLeave={() => setHighlightedBtn(null)}
            >
              Explore Agents &rarr;
            </button>
            <button
              className={`px-6 py-3 font-semibold text-base rounded-md bg-gray-900 text-white border border-gray-500 transition
                hover:border-cyan-400 hover:text-purple
                ${highlightedBtn === "request" ? "text-purple border-purple" : ""}`}
              onMouseEnter={() => setHighlightedBtn("request")}
              onMouseLeave={() => setHighlightedBtn(null)}
            >
              Request Custom Agent
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full flex flex-col items-center gap-8 relative">
          {/* Dashboard-style card */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">Agent Performance Overview</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-xs font-medium">Live Data</span>
              </div>
            </div>
            <div className="text-gray-100 mb-2 font-semibold">Agents Deployed</div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 bg-gray-800 rounded-full h-2 relative">
                <div
                  className="bg-cyan-400 h-2 rounded-full"
                  style={{ width: `${Math.min(agentStats.deployed * 8, 100)}%` }}
                />
              </div>
              <span className="text-cyan-400 font-bold ml-2">{agentStats.deployed}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div
                className={`text-center p-2 rounded-md transition duration-150 cursor-pointer
                  ${highlightedMetric === "complete" ? "bg-purple/20 text-purple" : ""}`}
                onMouseEnter={() => setHighlightedMetric("complete")}
                onMouseLeave={() => setHighlightedMetric(null)}
              >
                <div className="text-2xl font-bold text-cyan-400">{agentStats.completion}%</div>
                <div className={`text-xs ${highlightedMetric === "complete" ? "text-purple" : "text-gray-400"}`}>Task Completion</div>
              </div>
              <div
                className={`text-center p-2 rounded-md transition duration-150 cursor-pointer
                  ${highlightedMetric === "response" ? "bg-purple/20 text-purple" : ""}`}
                onMouseEnter={() => setHighlightedMetric("response")}
                onMouseLeave={() => setHighlightedMetric(null)}
              >
                <div className="text-2xl font-bold text-cyan-400">{agentStats.avgResponse}s</div>
                <div className={`text-xs ${highlightedMetric === "response" ? "text-purple" : "text-gray-400"}`}>Avg Agent Response</div>
              </div>
            </div>
            <ul>
              {agentStats.summary.map((txt, idx) => (
                <li key={idx} className="flex items-center text-gray-200 text-sm mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2" />
                  {txt}
                </li>
              ))}
            </ul>
          </div>
          {/* Overlapping image */}
          <img
            src={bot}
            alt="Agent Dashboard"
            className="w-50 h-auto rounded-xl bg-transparent object-contain absolute -top-20 right-[-30px] hidden xl:block"
          />
        </div>
      </div>
    </section>

    {/* // Section2 */}
    <section className="w-full py-16 bg-background fade-in flex min-h-screen -mt-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-purpletext">
        Key Benefits of CogniAgent
      </h2>
      <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl mx-auto">
        Unlock new levels of efficiency, accuracy, and scalability for your business operations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {benefits.map((item, idx) => (
          <div
            key={item.title}
            className={`
              bg-white rounded-2xl p-5 shadow-md flex flex-col items-start
              border transition-all duration-300
              ${highlighted === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-white"}
              hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
              focus:outline-none
              fade-in zoom-in
            `}
            onMouseEnter={() => setHighlighted(idx)}
            onMouseLeave={() => setHighlighted(null)}
            onFocus={() => setHighlighted(idx)}
            onBlur={() => setHighlighted(null)}
            tabIndex={0}
          >
            {item.icon}
            <div className={`font-semibold text-base mt-3 mb-2 ${highlighted === idx ? "text-purple" : "text-purple"}`}>
              {item.title}
            </div>
            <div className={`text-[15px] text-gray-300 ${highlighted === idx ? "text-purple" : "text-gray-500"}`}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* section3 */}
  <section className="w-full min-h-screen -mt-24 py-16 bg-background fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-purpletext">
          Pre-built AI Agents for Every Business Need
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl mx-auto">
          CogniAgent provides a comprehensive library of pre-built AI agents designed for common business processes. From invoice processing to report generation, deploy powerful automation in minutes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-[#181a1b] rounded-2xl p-6 shadow-md flex flex-col items-start
                border transition-all duration-300
                ${highlighted === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-white"}
                hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
                focus:outline-none fade-in zoom-in
              `}
              onMouseEnter={() => setHighlighted(idx)}
              onMouseLeave={() => setHighlighted(null)}
              onFocus={() => setHighlighted(idx)}
              onBlur={() => setHighlighted(null)}
              tabIndex={0}
            >
              {item.icon}
              <div className={`font-semibold text-base mt-3 mb-2 ${highlighted === idx ? "text-purple" : "text-white"}`}>
                {item.title}
              </div>
              <div className={`text-[15px] text-gray-300 mb-4 ${highlighted === idx ? "text-purple" : ""}`}>
                {item.desc}
              </div>
              <ul className="space-y-1">
                {item.bullets.map((b, bidx) => (
                  <li
                    key={bidx}
                    className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                      before:${item.color} text-sm ${highlighted === idx ? "text-purple" : "text-gray-300"}`}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

  </>
  );
}
