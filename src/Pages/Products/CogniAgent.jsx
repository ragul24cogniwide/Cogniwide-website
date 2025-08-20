import React, { useState } from "react";
import congiagent from "../../assets/cogniagent.png"; // (update path as needed)

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

export default function CogniAgentSection() {
  const [highlightedBtn, setHighlightedBtn] = useState(null);
  const [highlightedMetric, setHighlightedMetric] = useState(null);

  return (
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
                hover:text-purple hover:border-purple hover:shadow-purple hover:bg-purpletext hover:text-white`}
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
          {/* <img
            src={congiagent}
            alt="Agent Dashboard"
            className="w-60 h-auto rounded-xl shadow-lg object-contain absolute top-0 right-[-80px] hidden xl:block"
          /> */}
        </div>
      </div>
    </section>
  );
}
